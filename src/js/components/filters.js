/**
 * Renders filters.
 * @return {string}
 */
const renderFilters = () => `
    <section class="container filtersContainer">
        <div class="row">
            <div class="column searchColumn">
                <label for="newsContentSearch">News content search</label>
                <input type="search" placeholder="News content search" id="newsContentSearch" />
            </div>
            <div class="column">
                <label for="sectionSelect">Section</label>
                <select id="sectionSelect">
                    <option value="">All</option>
                    <option value="books">Books</option>
                    <option value="business">Business</option>
                    <option value="culture">Culture</option>
                    <option value="sport">Sport</option>
                </select>
            </div>
        </div>
    </section>
`;
export default renderFilters;
