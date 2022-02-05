export default () => ({
    server: {
        host: 'localhost:8080',
        logLevel: process.env.LOG_LEVEL || 'debug',
        port: Number(process.env.PORT) || 8080,
    },
    env: process.env.NODE_ENV,
    cache: {
        redis: {
            host: process.env.REDIS_HOSTS || '127.0.0.1:6379,127.0.0.1:6380',
            password: process.env.REDIS_PASSWORD || '',
            defaultTtl: process.env.REDIS_DEFAULT_TTL || 600,
            connectTimeout: process.env.REDIS_CONNECT_TIMEOUT || 400,
            requestTimeout: process.env.REDIS_REQUEST_TIMEOUT || 400,
        },
    },
    services: {
        products: {
            baseUrl: process.env.PRODUCTS_BASE_URL || '',
            timeout: Number(process.env.PRODUCTS_TIMEOUT) || 10000,
        },
    },
});
