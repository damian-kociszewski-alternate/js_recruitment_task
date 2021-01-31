import renderApp from './js/renderApp';
import { getFromLocalStorage } from './js/utils/localStorage';
import './styles/main.css';

/** App state */
window.appData = {
    query: {
        q: '',
        section: '',
        page: 1,
    },
    focusInput: false,
    news: [],
    readLater: [],
};

/** Get saved data from local storage */
window.appData.readLater = getFromLocalStorage('readLater') || [];

/** Initial app render */
(async () => {
    await renderApp(true);
})();
