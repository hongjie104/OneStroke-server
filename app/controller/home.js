const crypto = require('crypto');
const Controller = require('../core/baseController');

class HomeController extends Controller {
    async index() {
        // 1）将token、timestamp、nonce三个参数进行字典序排序
        // 2）将三个参数字符串拼接成一个字符串进行sha1加密
        // 3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
        const { signature, echostr, timestamp, nonce } = this.ctx.query;
        const { wx: { token } } = this.ctx.app.config;
        const mySignature = crypto.createHash('sha1').update([token, timestamp, nonce].sort().join('')).digest('hex');
        if (mySignature === signature) {
            this.ctx.body = echostr;
        } else {
            this.fail('你不是微信服务器...嫑害我');
        }
    }

    async createSignature() {
        const { url } = this.ctx.request.body;
        const noncestr = this.ctx.helper.randomStr();
        const jsapi_ticket = await this.ctx.service.wx.getJSApiTicket();
        const timestamp = Math.floor(new Date().getTime() / 1000);
        const str = `jsapi_ticket=${jsapi_ticket}&noncestr=${noncestr}&timestamp=${timestamp}&url=${url}`;
        const signature = crypto.createHash('sha1').update(str).digest('hex');
        this.success({
            noncestr,
            timestamp,
            signature,
        });
    }

    async test() {
        this.ctx.redirect('https://www.baidu.com');
    }
}

module.exports = HomeController;
