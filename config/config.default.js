module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1514430527431_7904';

    config.security = {
        csrf: {
            // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
            // headerName: 'x-csrf-token',
            // ignoreJSON: true,
            enable: false,
        },
    };

    config.cors = {
        // {string|Function} origin: '*',
        origin: '*',
        // {string|Array} allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };

    // add your config here
    config.middleware = [ 'logger' ];

    config.mongoose = {
        url: 'mongodb://47.101.66.224:27017/OneStroke',
        options: {
            db: { native_parser: true },
            server: {
                poolSize: 10,
                auto_reconnect: true,
                socketOptions: {
                    keepAlive: 1,
                    socketTimeoutMS: 60000,
                    connectTimeoutMS: 60000,
                },
            },
        },
    };

    config.bodyParser = {
        jsonLimit: '100kb',
        formLimit: '100kb',
    };

    config.logger = {
        level: 'DEBUG',
    };

    config.multipart = {
        fileSize: '1mb',
        whitelist: [
            '.jpg',
            '.jpeg',
        ],
    };

    config.wx = {
        token: 'h0OsNBlSEqqKHdrYJIuJNipXWX7g5yyL',
        EncodingAESKey: 'vqifAtdnHaEzievRRrF5k58PIttCgHW4UDpJZ5waP3l',
    };

    return config;
};
