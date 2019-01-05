const Service = require('egg').Service;

class GoodsService extends Service {

    async createLowestPrice(goodsColorArr) {
        // 拿到对应的商品数据
        let goodsIdArr = [];
        for (let index = 0; index < goodsColorArr.length; index++) {
            goodsIdArr = goodsIdArr.concat(goodsColorArr[index].goods_id_arr);
            goodsColorArr[index]._id = goodsColorArr[index]._id.toString();
            goodsColorArr[index].price = -1;
        }
        const goodsArr = await this.ctx.model.Goods.find({
            _id: { $in: goodsIdArr },
        }, { sku: 1, goods_color_id: 1 }).lean();
        // 找出最便宜的goods
        let goods = null;
        let skuArr = null;
        let goodsColorId = null;
        const skuSortFun = (a, b) => a.price - b.price;
        const skuFilterFun = s => s.isInStock;
        for (let index = 0; index < goodsArr.length; index++) {
            goods = goodsArr[index];
            goodsColorId = goods.goods_color_id.toString();
            for (let i = 0; i < goodsColorArr.length; i++) {
                if (goodsColorArr[i]._id === goodsColorId) {
                    if (!goodsColorArr[i].numShop) {
                        goodsColorArr[i].numShop = 1;
                    } else {
                        goodsColorArr[i].numShop += 1;
                    }
                    skuArr = goods.sku;
                    if (skuArr.length > 0) {
                        skuArr = skuArr.filter(skuFilterFun).sort(skuSortFun);
                        // console.log(skuArr.map(s => s.price));
                        if (skuArr.length > 0) {
                            if (goodsColorArr[i].price < 0 || goodsColorArr[i].price > skuArr[0].price) {
                                // console.log(goodsColorArr[i].price, skuArr[0].price, goodsColorId);
                                goodsColorArr[i].price = skuArr[0].price;
                            }
                        }
                    }
                    break;
                }
            }
        }
        return goodsColorArr;
    }

}

module.exports = GoodsService;
