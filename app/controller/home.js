// const fs = require('fs');
// const path = require('path');
const Controller = require('../core/baseController');

class HomeController extends Controller {
    async index() {
        // {
        // "signature":"b5682c4d92c5d05c3e6ef085b9002d3b24396561",
        // "echostr":"331186382028045302",
        // "timestamp":"1546679138",
        // "nonce":"649492913"
        // }
        // 1）将token、timestamp、nonce三个参数进行字典序排序
        // 2）将三个参数字符串拼接成一个字符串进行sha1加密
        // 3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
        // this.success(this.ctx.query);
        const { echostr } = this.ctx.query;
        this.ctx.body = echostr;
    }

    async test() {
        this.success();
    }
}

module.exports = HomeController;
