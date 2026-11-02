import { IArticle } from '../../types/interfaces';
import './news.css';

class News {
    draw(data: IArticle[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');
        const newsContainer = document.querySelector('.news');

        if (!(newsItemTemp instanceof HTMLTemplateElement)) return;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true);
            if (!(newsClone instanceof DocumentFragment)) return;

            const newsItem = newsClone.querySelector('.news__item');
            if (!(newsItem instanceof HTMLElement)) return;

            const newsImage = newsClone.querySelector('.news__meta-photo');
            const newsAuthor = newsClone.querySelector('.news__meta-author');
            const newsDate = newsClone.querySelector('.news__meta-date');
            const newsTitle = newsClone.querySelector('.news__description-title');
            const newsSource = newsClone.querySelector('.news__description-source');
            const newsContent = newsClone.querySelector('.news__description-content');

            if (idx % 2) newsItem.classList.add('alt');

            if (newsImage instanceof HTMLElement)
                newsImage.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            if (newsAuthor) newsAuthor.textContent = item.author || item.source.name;
            if (newsDate) newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            if (newsTitle) newsTitle.textContent = item.title;
            if (newsSource) newsSource.textContent = item.source.name;
            if (newsContent) newsContent.textContent = item.description || '';

            newsItem.querySelector('.news__read-more a')?.setAttribute('href', item.url);
            fragment.append(newsClone);
        });

        if (!newsContainer) return;
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
