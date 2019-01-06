module.exports = app => {
    const { router, controller } = app;
    const uid = app.middleware.uid();

    router.post('/api/user/login', controller.game.user.login);

    router.post('/api/user/get_red_bag', uid, controller.game.user.getRedBag);

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
