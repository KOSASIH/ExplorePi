// lib/rateLimiter.js

const rateLimit = (limit, interval) => {
    const requests = new Map();

    return (req, res, next) => {
        const ip = req.ip;
        const currentTime = Date.now();

        if (!requests.has(ip)) {
            requests.set(ip, { count: 1, firstRequestTime: currentTime });
        } else {
            const requestData = requests.get(ip);
            const timeElapsed = currentTime - requestData.firstRequestTime;

            // Reset count if interval has passed
            if (timeElapsed > interval) {
                requests.set(ip, { count: 1, firstRequestTime: currentTime });
            } else {
                requestData.count++;
                requests.set(ip, requestData);
            }
        }

        const requestData = requests.get(ip);
        if (requestData.count > limit) {
            res.status(429).send('Too many requests, please try again later.');
        } else {
            next();
        }
    };
};

module.exports = rateLimit;
