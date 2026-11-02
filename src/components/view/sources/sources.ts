import { ISourceData } from '../../types/interfaces';
import './sources.css';

class Sources {
    draw(data: ISourceData[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            if (!(sourceItemTemp instanceof HTMLTemplateElement)) return;

            const sourceClone = document.importNode(sourceItemTemp.content, true);
            const sourceItem = sourceClone.querySelector('.source__item');
            if (!(sourceItem instanceof HTMLElement)) return;

            const sourceCloneItemName = sourceItem.querySelector('.source__item-name');
            if (!sourceCloneItemName) return;

            sourceCloneItemName.textContent = item.name;
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
