/**
 * Renders read later article.
 * @param {string} id
 * @param {string} webTitle
 * @param {string} webUrl
 * @return {string}
 */
const renderReadLaterArticle = ({ id, webTitle, webUrl }) => `
    <li id="${id}">
        <h4 class="readLaterItem-title">${webTitle}</h4>
        <section>
            <a href="${webUrl}" target="_blank" class="button button-clear">Read</a>
            <button class="button button-clear" data-role="read-later-remove" data-id="${id}">Remove</button>
        </section>
    </li>
`;

export default renderReadLaterArticle;
