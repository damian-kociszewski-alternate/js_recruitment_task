import renderApp from './renderApp';

import { updateLocalStorage } from './utils/localStorage';

/**
 * Event listeners service.
 * @type {
 *     {
 *          documentNode: {}
 *          sectionSelectNode: {}
 *          prevPageNode: {}
 *          nextPageNode: {}
 *          searchNode: {}
 *          documentClickListener: (function(*): Promise<void>)
 *          sectionSelectChangeListener: (function(*): Promise<void>)
 *          prevPageClickListener: (function(): Promise<void>)
 *          nextPageClickListener: (function(): Promise<void>)
 *          searchInputListener: (function(*): Promise<void>)
 *          searchBlurListener: eventListeners.searchBlurListener
 *          add: eventListeners.add
 *          remove: eventListeners.remove
 *     }
 * }
 */
const eventListeners = {
    documentNode: {},
    sectionSelectNode: {},
    prevPageNode: {},
    nextPageNode: {},
    searchNode: {},
    documentClickListener: async (event) => {
        if (event.target.dataset.role === 'read-later-add') {
            const selectedArticle = window.appData.news.results.find(
                (news) => news.id === event.target.dataset.id
            );

            if (
                window.appData.readLater.findIndex(
                    (news) => news.id === selectedArticle.id
                ) === -1
            ) {
                window.appData.readLater = [
                    ...window.appData.readLater,
                    selectedArticle,
                ];
                updateLocalStorage('readLater', window.appData.readLater);
                await renderApp();
            }
        }

        if (event.target.dataset.role === 'read-later-remove') {
            window.appData.readLater = window.appData.readLater.filter(
                (news) => news.id !== event.target.dataset.id
            );
            updateLocalStorage('readLater', window.appData.readLater);
            await renderApp();
        }
    },
    sectionSelectChangeListener: async (event) => {
        window.appData.query.section = event.target.value;
        window.appData.query.page = 1;
        await renderApp(true);
    },
    prevPageClickListener: async () => {
        window.appData.query.page = window.appData.query.page - 1;
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        await renderApp(true);
    },
    nextPageClickListener: async () => {
        window.appData.query.page = window.appData.query.page + 1;
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        await renderApp(true);
    },
    searchInputListener: async (event) => {
        window.appData.query.q = event.target.value;
        window.appData.query.page = 1;
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        await renderApp(true);
        window.appData.focusInput = true;
    },
    searchBlurListener: () => {
        window.appData.focusInput = false;
    },
    add: function () {
        this.documentNode = window.document;
        this.sectionSelectNode = document.getElementById('sectionSelect');
        this.prevPageNode = document.getElementById('prev-page');
        this.nextPageNode = document.getElementById('next-page');
        this.searchNode = document.getElementById('newsContentSearch');

        this.documentNode.addEventListener('click', this.documentClickListener);
        this.sectionSelectNode.addEventListener(
            'change',
            this.sectionSelectChangeListener
        );
        this.prevPageNode.addEventListener('click', this.prevPageClickListener);
        this.nextPageNode.addEventListener('click', this.nextPageClickListener);
        this.searchNode.addEventListener('input', this.searchInputListener);
        this.searchNode.addEventListener('blur', this.searchBlurListener);

        this.sectionSelectNode.value = window.appData.query.section;
        this.searchNode.value = window.appData.query.q;

        setTimeout(() => {
            if (window.appData.focusInput) {
                this.searchNode.focus();
            }
        });
    },
    remove: function () {
        if (this.documentNode.removeEventListener) {
            this.documentNode.removeEventListener(
                'click',
                this.documentClickListener
            );
            this.sectionSelectNode.removeEventListener(
                'change',
                this.sectionSelectChangeListener
            );
            this.prevPageNode.removeEventListener(
                'click',
                this.prevPageClickListener
            );
            this.nextPageNode.removeEventListener(
                'click',
                this.nextPageClickListener
            );
            this.searchNode.removeEventListener('input', this.searchInputListener);
            this.searchNode.removeEventListener('blur', this.searchBlurListener);
        }
    },
};

export default eventListeners;
