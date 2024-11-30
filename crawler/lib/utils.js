// lib/utils.js

const { isEmail, isURL } = require('validator');

/**
 * Validates an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if valid, false otherwise.
 */
const validateEmail = (email) => {
    return isEmail(email);
};

/**
 * Validates a URL.
 * @param {string} url - The URL to validate.
 * @returns {boolean} - Returns true if valid, false otherwise.
 */
const validateURL = (url) => {
    return isURL(url);
};

/**
 * Formats a date to a readable string.
 * @param {Date} date - The date to format.
 * @returns {string} - Returns the formatted date string.
 */
const formatDate = (date) => {
    return date.toISOString().split('T')[0]; // YYYY-MM-DD format
};

/**
 * Deep clones an object.
 * @param {Object} obj - The object to clone.
 * @returns {Object} - Returns a deep clone of the object.
 */
const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

module.exports = {
    validateEmail,
    validateURL,
    formatDate,
    deepClone,
};
