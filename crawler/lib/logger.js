// lib/logger.js

const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'app.log');

/**
 * Logs a message to the console and a log file.
 * @param {string} level - The log level (info, warn, error).
 * @param {string} message - The message to log.
 */
const log = (level, message) => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} [${level.toUpperCase()}]: ${message}`;

    // Log to console
    console.log(logMessage);

    // Log to file
    fs.appendFile(logFilePath, logMessage + '\n', (err) => {
        if (err) {
            console.error('Failed to write to log file:', err);
        }
    });
};

/**
 * Logs an info message.
 * @param {string} message - The message to log.
 */
const info = (message) => {
    log('info', message);
};

/**
 * Logs a warning message.
 * @param {string} message - The message to log.
 */
const warn = (message) => {
    log('warn', message);
};

/**
 * Logs an error message.
 * @param {string} message - The message to log.
 */
const error = (message) => {
    log('error', message);
};

module.exports = {
    info,
    warn,
    error,
};
