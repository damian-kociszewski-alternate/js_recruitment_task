/**
 * Renders article.
 * @param {string} id
 * @param {string} webTitle
 * @param {string} sectionName
 * @param {string} webPublicationDate
 * @param {string} webUrl
 * @param {boolean} disabledReadLater
 * @return {string}
 */
const renderArticle = ({
    id,
    webTitle,
    sectionName,
    webPublicationDate,
    webUrl,
    disabledReadLater,
}) => `
    <li id="${id}">
        <article class="news">
            <header>
                <h3>${webTitle}</h3>
            </header>
            <section class="newsDetails">
                <ul>
                    <li><strong>Section Name:</strong> ${sectionName}</li>
                    <li><strong>Publication Date:</strong> ${webPublicationDate}</li>
                </ul>
            </section>
            <section class="newsActions">
                <a href="${webUrl}" target="_blank" class="button">Full article</a>
                ${
    disabledReadLater
        ? ''
        : `<button class="button button-outline" data-role="read-later-add" data-id="${id}">Read Later</button>`
}
            </section>
        </article>
    </li>
`;

export default renderArticle;
