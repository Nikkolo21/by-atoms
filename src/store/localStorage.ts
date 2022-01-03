/**
 * Write data to local storage
 * @param {string} key - key for storing
 * @param {Object} data - serializable object
 */
 export const write = (key: any, data: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    // eslint-disable-next-line no-empty
  } catch {}
};

/**
 * Read data from local storage
 * @param {string} key
 * @returns {Object}
 */
export const read = (key: any) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (!serializedState) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};
