import axios from 'axios';
const API_ROOT = 'https://postman-echo.com/';

/**
 * Returns the response from calling alphaOne
 * @param {Date} start
 * @param {Date} end
 * @returns {string}
 */
const addAlphaOne = (start: Date, end: Date) => {
     const hours = Math.abs(end.getTime() - start.getTime())/36e5;
     return `Alpha one recorded ${hours} hours`;
}

/**
 * Returns the response from alphaTwo endpoint.
 * @param {Date} start
 * @param {Date} end
 * @returns {Promise<data>}
 */
const addAlphaTwo = async (start: Date, end: Date) => {

    const hours = Math.abs(end.getTime() - start.getTime())/36e5;

    const response = await axios.get(API_ROOT+ 'get?alphatwo=' + hours);

    return response.data;
}

export {
    addAlphaOne,
    addAlphaTwo
};