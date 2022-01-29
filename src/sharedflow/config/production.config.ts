export default () => ({
    server: {
        host: 'localhost:8080',
        logLevel: process.env.LOG_LEVEL || 'debug',
        port: Number(process.env.PORT) || 8080,
    },
    env: process.env.NODE_ENV,
    database: {
        mongo: {
            host: process.env.DB_MONGO_HOST,
            port: process.env.DB_MONGO_PORT,
            username: process.env.DB_MONGO_USERNAME,
            password: process.env.DB_MONGO_PASSWORD,
            name: process.env.DB_MONGO_DATABASE,
        },
        pgsql: {
            host: process.env.DB_MONGO_HOST,
            port: process.env.DB_MONGO_PORT,
            username: process.env.DB_MONGO_USERNAME,
            password: process.env.DB_MONGO_PASSWORD,
            name: process.env.DB_MONGO_DATABASE,
        },
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_SECRET_EXPIRES || 10000,
    },
    services: {
        products: {
            baseUrl: process.env.PRODUCTS_BASE_URL || '',
            timeout: Number(process.env.PRODUCTS_TIMEOUT) || 10000,
        },
    },
});
