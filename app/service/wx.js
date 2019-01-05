const Service = require('egg').Service;

class WXService extends Service {

    async getOpenid(code) {
        const { appid, appsecret } = this.ctx.app.config.wx;
        const url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${appsecret}&code=${code}&grant_type=authorization_code`;
        const result = await this.ctx.curl(url, { dataType: 'json' });
        const { data } = result;
        const {
            // 网页授权接口调用凭证, 注意：此access_token与基础支持的access_token不同
            // access_token,
            // access_token接口调用凭证超时时间，单位（秒）
            // expires_in,
            // 用户刷新access_token
            // refresh_token,
            // 用户唯一标识，请注意，在未关注公众号时，用户访问公众号的网页，也会产生一个用户和公众号唯一的OpenID
            openid,
            // 用户授权的作用域，使用逗号（, ）分隔
            // scope,
        } = data;
        return openid || null;
    }

}

module.exports = WXService;
