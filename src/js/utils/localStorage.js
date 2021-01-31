/**
 * Updates selected local storage value
 * @param key
 * @param value
 */
const updateLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error(e);
    }
};

/**
 * Retrieves selected value from local storage
 * @param key
 * @return {any}
 */
const getFromLocalStorage = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        console.error(e);
    }
};

export { updateLocalStorage, getFromLocalStorage };
