/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    require('./router/game')(app);

    const { router, controller } = app;
    router.get('/', controller.home.index);
    // 微信jssdk签名
    // body: { url: String }
    router.post('/sign', controller.home.createSignature);

    router.get('/test', controller.home.test);

    // // 认证相关
    // app.post('/oauth2/access_token', app.oAuth2Server.token(), controller.oauth.accessToken);

    // webhook
    app.post('/webhook/push_admin', controller.webhook.pushAdmin);
};

// Method	Path	      Route Name	Controller.Action
// GET	   /posts	       posts	app.controllers.posts.index
// GET	   /posts/new	   new_post	app.controllers.posts.new
// GET     /posts/:id	   post	app.controllers.posts.show
// GET     /posts/:id/edit edit_post	app.controllers.posts.edit
// POST    /posts	       posts	app.controllers.posts.create
// PUT     /posts/:id	    post	app.controllers.posts.update
// DELETE  /posts/:id	    post	app.controllers.posts.destroy
