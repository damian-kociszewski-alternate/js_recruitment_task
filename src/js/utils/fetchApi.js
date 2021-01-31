import { config } from '../../config';
import { formatDate, subDaysFromDate } from './date';

/** Default query params */
const defaultQueryParams = {
    'api-key': config.apiKey,
    'page-size': 10,
    'from-date': formatDate(subDaysFromDate(new Date(), 30)),
    q: undefined,
    section: undefined,
    'order-by': 'newest',
    page: 1,
};

/**
 * Generates url with query params.
 * @return string
 */
const generateUrlWithQueryParams = () => {
    let url = `${config.baseUrl}/search`;
    const queryParams = { ...defaultQueryParams, ...window.appData.query };

    for (const [key, value] of Object.entries(queryParams)) {
        if (value) {
            if (key === 'api-key') {
                url += `?${key}=${value}`;
            } else {
                url += `&${key}=${value}`;
            }
        }
    }

    return url;
};

/**
 * Fetches an API.
 * @return {Promise<object>}
 */
const fetchApi = async () => {
    const url = generateUrlWithQueryParams();
    const response = await fetch(url);

    if (response.status) {
        return response.json();
    }
};

export default fetchApi;
