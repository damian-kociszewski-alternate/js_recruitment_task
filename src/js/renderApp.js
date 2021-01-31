import renderArticle from './components/article';
import renderFilters from './components/filters';
import renderHeader from './components/header';
import renderPagination from './components/pagination';
import renderReadLaterArticle from './components/readLaterArticle';
import eventListeners from './eventListeners';
import { formatDate } from './utils/date';
import fetchApi from './utils/fetchApi';

/**
 *
 * @param {boolean} fetchData - Determines whether a new data should be fetched.
 * @return {Promise<void>}
 */
const renderApp = async (fetchData = false) => {
    try {
        if (fetchData) {
            const { response } = await fetchApi();
            window.appData.news = response;
        }

        renderComponents(window.appData);
    } catch (e) {
        console.error(e);
    }
};

/**
 * Static components.
 * @type {{header: string, filters: string}}
 */
const staticComponents = {
    header: renderHeader(),
    filters: renderFilters(),
};

/**
 * Renders the app.
 * @param data - global app state
 */
const renderComponents = (data) => {
    eventListeners.remove();

    const root = document.getElementById('root');
    const readLaterIds = data.readLater.map((news) => news.id);

    root.innerHTML = `
        ${staticComponents.header}
        ${staticComponents.filters}
        <section class="container newsContainer">
            <div class="row">
                <div class="column column-67">
                    <h2 class="newsColumnTitle">News List</h2>
                    
                    <ul id="newsList" class="newsList">
                        ${
    data.news.results
        .map((news) =>
            renderArticle({
                ...news,
                disabledReadLater: readLaterIds.includes(
                    news.id
                ),
                webPublicationDate: formatDate(
                    news.webPublicationDate,
                    '/'
                ),
            })
        )
        .join('') || '<p>No news found.</p>'
}
                    </ul>
                    
                    ${renderPagination(data)}
                </div>
                
                <div class="column column-33">
                    <h2 class="newsColumnTitle">Read Later</h2>
                    
                    <ul class="readLaterList">
                        ${
    data.readLater
        .map((news) => renderReadLaterArticle(news))
        .join('') || '<p>No saved articles found.</p>'
}
                    </ul>
                </div>
            </div>
        </section>
    `;

    eventListeners.add();
};

export default renderApp;
