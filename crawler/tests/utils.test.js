// crawler/tests/utils.test.js

const { validateEmail, validateURL, formatDate, deepClone } = require('../lib/utils');

describe('Utils Tests', () => {
    test('should validate email addresses correctly', () => {
        expect(validateEmail('test@example.com')).toBe(true);
        expect(validateEmail('invalid-email')).toBe(false);
    });

    test('should validate URLs correctly', () => {
        expect(validateURL('https://www.example.com')).toBe(true);
        expect(validateURL('invalid-url')).toBe(false);
    });

    test('should format dates correctly', () => {
        const date = new Date('2023-10-01T12:00:00Z');
        expect(formatDate(date)).toBe('2023-10-01');
    });

    test('should deep clone an object', () => {
        const original = { a: 1, b: { c: 2 } };
        const clone = deepClone(original);
        expect(clone).toEqual(original);
        expect(clone).not.toBe(original); // Ensure it's a different reference
        clone.b.c = 3; // Modify the clone
        expect(original.b.c).toBe(2); // Ensure the original is unchanged
    });
});
