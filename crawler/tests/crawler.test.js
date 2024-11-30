// crawler/tests/crawler.test.js

const { startCrawling } = require('../index'); // Adjust the import based on your actual crawler implementation
const logger = require('../lib/logger');

jest.mock('../lib/logger'); // Mock the logger to avoid actual logging during tests

describe('Crawler Tests', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear mocks before each test
    });

    test('should start crawling successfully', async () => {
        // Mock the behavior of the crawling function
        const mockCrawlFunction = jest.fn().mockResolvedValue('Crawling completed');
        startCrawling = mockCrawlFunction;

        const result = await startCrawling();
        expect(result).toBe('Crawling completed');
        expect(mockCrawlFunction).toHaveBeenCalled();
        expect(logger.info).toHaveBeenCalledWith('Crawling started');
    });

    test('should log an error if crawling fails', async () => {
        const mockCrawlFunction = jest.fn().mockRejectedValue(new Error('Crawling failed'));
        startCrawling = mockCrawlFunction;

        await expect(startCrawling()).rejects.toThrow('Crawling failed');
        expect(logger.error).toHaveBeenCalledWith('Crawling failed');
    });
});
