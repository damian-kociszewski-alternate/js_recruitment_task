import logo from 'url:../../assets/logo.png';

/**
 * Renders static header.
 * @return {string}
 */
const renderHeader = () => `
    <header class="appHeader">
        <div class="container appHeader-inner">
            <img src="${logo}" alt="company logo" class="companyLogo" />
            <h1 class="appTitle">Recruitment task</h1>
        </div>
    </header>
`;

export default renderHeader;
