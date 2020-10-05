/**
 * Returns the response from calling alphaOne
 * @param {Date} start
 * @param {Date} end
 * @returns {string}
 */
declare const addAlphaOne: (start: Date, end: Date) => string;
/**
 * Returns the response from alphaTwo endpoint.
 * @param {Date} start
 * @param {Date} end
 * @returns {Promise<data>}
 */
declare const addAlphaTwo: (start: Date, end: Date) => Promise<any>;
export { addAlphaOne, addAlphaTwo };
