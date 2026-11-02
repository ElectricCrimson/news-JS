import { ISources, IResponse } from '../types/interfaces';
import { Callback } from '../types/types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: Callback<ISources>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: Callback<IResponse>) {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target instanceof HTMLElement) {
                if (target.classList.contains('source__item')) {
                    const sourceId = target.getAttribute('data-source-id');
                    if (newsContainer instanceof Element) {
                        if (newsContainer.getAttribute('data-source') !== sourceId) {
                            if (!sourceId) return;
                            newsContainer.setAttribute('data-source', sourceId);
                            super.getResp(
                                {
                                    endpoint: 'everything',
                                    options: {
                                        sources: sourceId,
                                    },
                                },
                                callback
                            );
                        }
                    }
                    return;
                }
                target = target.parentNode;
            }
        }
    }
}

export default AppController;
