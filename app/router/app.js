module.exports = app => {
    const { router, controller } = app;
    // Method	Path	      Route Name	Controller.Action
    // GET	   /posts	       posts	app.controllers.posts.index
    // GET	   /posts/new	   new_post	app.controllers.posts.new
    // GET     /posts/:id	   post	app.controllers.posts.show
    // GET     /posts/:id/edit edit_post	app.controllers.posts.edit
    // POST    /posts	       posts	app.controllers.posts.create
    // PUT     /posts/:id	    post	app.controllers.posts.update
    // DELETE  /posts/:id	    post	app.controllers.posts.destroy
    // app
    // router.resources('series', '/api/app/series', controller.app.series);

    // router.get('/api/app/series/top/:count', controller.app.series.top);

    // // ----------- home --------------
    // router.get('/api/app/home/:seriesCount/:popularGoodsColorCount/:recommendGoodsColorCount', controller.app.home.index);

    // // ----------- goodsType --------------

    // router.resources('goodsType', '/api/app/goodsType', controller.app.goodsType);

    // // router.get('/api/app/goodsType/show/:goodsColorId', controller.app.goodsType.showByGoodsColor);

    // // ----------- goodsColor --------------

    // router.resources('goodsColor', '/api/app/goodsColor', controller.app.goodsColor);

    // router.get('/api/app/goodsColor/top/:count', controller.app.goodsColor.top);

    // router.get('/api/app/goodsColor/recommend/:page/:pageSize', controller.app.goodsColor.recommend);

    // // ----------- goods --------------

    // router.resources('goods', '/api/app/goods', controller.app.goods);
};
