/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    require('./router/admin')(app);
    require('./router/app')(app);

    const { router, controller } = app;
    router.get('/', controller.home.index);

    router.get('/test', controller.home.test);

    // // 认证相关
    // app.post('/oauth2/access_token', app.oAuth2Server.token(), controller.oauth.accessToken);

    // webhook
    app.post('/webhook/push_admin', controller.webhook.pushAdmin);
};
