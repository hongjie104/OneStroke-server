module.exports = app => {
    const { router, controller } = app;

    // // 平台相关
    // router.post('/api/admin/find_platform', app.oAuth2Server.authenticate(), controller.admin.platform.find);

    // router.get('/api/admin/detail_platform/:id', app.oAuth2Server.authenticate(), controller.admin.platform.detail);

    // router.post('/api/admin/update_platform', app.oAuth2Server.authenticate(), controller.admin.platform.update);

    // router.post('/api/admin/add_platform', app.oAuth2Server.authenticate(), controller.admin.platform.add);
    // // 品牌相关
    // router.post('/api/admin/find_brand', app.oAuth2Server.authenticate(), controller.admin.brand.find);

    // router.get('/api/admin/detail_brand/:id', app.oAuth2Server.authenticate(), controller.admin.brand.detail);

    // router.post('/api/admin/update_brand', app.oAuth2Server.authenticate(), controller.admin.brand.update);

    // router.post('/api/admin/add_brand', app.oAuth2Server.authenticate(), controller.admin.brand.add);

    // router.get('/api/admin/remove_brand/:id', app.oAuth2Server.authenticate(), controller.admin.brand.remove);

    // router.get('/api/admin/fetch_goods_img_by_seriesId/:seriesId/:page/:pageSize', app.oAuth2Server.authenticate(), controller.admin.brand.fetchGoodsImgBySeriesId);

    // router.post('/api/admin/set_seried_img', app.oAuth2Server.authenticate(), controller.admin.brand.setSeriesImg);

    // router.post('/api/admin/set_series_top', app.oAuth2Server.authenticate(), controller.admin.brand.setSeriesTop);

    // router.get('/api/admin/get_top_series', app.oAuth2Server.authenticate(), controller.admin.brand.getTopSeries);

    // // 类目相关
    // router.post('/api/admin/add_category', app.oAuth2Server.authenticate(), controller.admin.category.add);

    // router.post('/api/admin/find_category', app.oAuth2Server.authenticate(), controller.admin.category.find);

    // router.get('/api/admin/detail_category/:id', app.oAuth2Server.authenticate(), controller.admin.category.detail);

    // router.post('/api/admin/update_category', app.oAuth2Server.authenticate(), controller.admin.category.update);

    // router.get('/api/admin/fetch_sub_category/:_id', app.oAuth2Server.authenticate(), controller.admin.category.fetchSubCategory);

    // // 商店相关

    // router.post('/api/admin/find_shop', app.oAuth2Server.authenticate(), controller.admin.shop.find);

    // router.get('/api/admin/detail_shop/:id', app.oAuth2Server.authenticate(), controller.admin.shop.detail);

    // router.post('/api/admin/update_shop', app.oAuth2Server.authenticate(), controller.admin.shop.update);

    // // 待处理商品相关
    // router.post('/api/admin/find_pending_goods', app.oAuth2Server.authenticate(), controller.admin.pendingGoods.find);

    // router.post('/api/admin/set_pending_goods_check', app.oAuth2Server.authenticate(), controller.admin.pendingGoods.setCheck);

    // router.get('/api/admin/delete_pending_goods/:_id', app.oAuth2Server.authenticate(), controller.admin.pendingGoods.delete);

    // // router.post('/api/admin/add_goods_type_by_pending_goods', app.oAuth2Server.authenticate(), controller.admin.pendingGoods.createGoodsType);

    // // router.post('/api/admin/relation_goods_type_by_pending_goods', app.oAuth2Server.authenticate(), controller.admin.pendingGoods.relationGoodsType);

    // router.get('/api/admin/fetch_brand_and_category', app.oAuth2Server.authenticate(), controller.admin.pendingGoods.fetchBrandAndCategory);

    // // router.get('/api/admin/auto_connect_by_number', app.oAuth2Server.authenticate(), controller.admin.pendingGoods.autoConnectByNumber);
    // router.get('/api/admin/auto_connect_by_number', controller.admin.pendingGoods.autoConnectByNumber);

    // router.get('/api/admin/auto_connect_by_name', app.oAuth2Server.authenticate(), controller.admin.pendingGoods.autoConnectByName);

    // // 款型相关
    // router.post('/api/admin/add_goods_type', app.oAuth2Server.authenticate(), controller.admin.goodsType.add);
    // // 关联款型
    // router.post('/api/admin/connect_goods_type', app.oAuth2Server.authenticate(), controller.admin.goodsType.connect);

    // router.post('/api/admin/find_goods_type', app.oAuth2Server.authenticate(), controller.admin.goodsType.find);

    // router.post('/api/admin/update_goods_type', app.oAuth2Server.authenticate(), controller.admin.goodsType.update);

    // router.post('/api/admin/merge_goods_type', app.oAuth2Server.authenticate(), controller.admin.goodsType.merge);

    // router.get('/api/admin/unmerge_goods_type/:mergeTargetGoodsType/:goodsTypeArr', controller.admin.goodsType.unMerge);

    // router.get('/api/admin/detail_goods_type/:_id', app.oAuth2Server.authenticate(), controller.admin.goodsType.detail);

    // router.get('/api/admin/remove_goods_color/:_id/:goods_color_id', app.oAuth2Server.authenticate(), controller.admin.goodsType.removeGoodsColor);

    // // 配色相关
    // router.post('/api/admin/detail_goods_color', app.oAuth2Server.authenticate(), controller.admin.goodsColor.detail);

    // router.post('/api/admin/update_goods_color', app.oAuth2Server.authenticate(), controller.admin.goodsColor.update);

    // router.post('/api/admin/merge_goods_color', app.oAuth2Server.authenticate(), controller.admin.goodsColor.merge);

    // router.get('/api/admin/find_popular/:page/:count', app.oAuth2Server.authenticate(), controller.admin.goodsColor.findPopular);

    // router.get('/api/admin/find_recommend/:page/:count', app.oAuth2Server.authenticate(), controller.admin.goodsColor.findRecommend);

    // router.get('/api/admin/remove_goods/:_id/:goods_id', app.oAuth2Server.authenticate(), controller.admin.goodsColor.removeGoods);

    // router.post('/api/admin/goods_color/change_goods_type', app.oAuth2Server.authenticate(), controller.admin.goodsColor.changeGoodsType);

    // // 商品相关
    // router.get('/api/admin/detail_goods/:_id', app.oAuth2Server.authenticate(), controller.admin.goods.detail);

    // router.post('/api/admin/find_goods', app.oAuth2Server.authenticate(), controller.admin.goods.find);

    // router.post('/api/admin/update_goods', app.oAuth2Server.authenticate(), controller.admin.goods.update);
};
