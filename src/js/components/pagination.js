/**
 * Renders pagination.
 * @param data - global app state
 * @return {string}
 */
const renderPagination = (data) => `
    <div class="pagination">
        <button class="button" id="prev-page" ${
    data.query.page <= 1 ? 'disabled' : ''
}>Prev page</button>
        <span><strong>${data.query.page} / ${data.news.pages}</strong></span>
        <button class="button" id="next-page" ${
    data.query.page >= data.news.pages ? 'disabled' : ''
}>Next page</button>
    </div>
`;

export default renderPagination;
