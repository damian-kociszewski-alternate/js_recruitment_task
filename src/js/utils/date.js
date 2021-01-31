/**
 * Formats date.
 * @param {Date|string} providedDate
 * @return {string}
 */
const formatDate = (providedDate, separator = '-') => {
    const date = new Date(providedDate);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (day <= 9) {
        day = '0' + day;
    }

    if (month <= 9) {
        month = '0' + month;
    }

    return `${year}${separator}${month}${separator}${day}`;
};

/**
 *
 * @param {Date|string} providedDate
 * @param {number} days
 * @return {Date}
 */
const subDaysFromDate = (providedDate, days) => {
    const today = new Date();
    const date = new Date(providedDate);
    return new Date(today.setDate(date.getDate() - days));
};

export { formatDate, subDaysFromDate };
