const Service = require('egg').Service;

class WXService extends Service {

    async getUserInfo(code) {
        const { appid, appsecret } = this.ctx.app.config.wx;
        let url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${appsecret}&code=${code}&grant_type=authorization_code`;
        let result = await this.ctx.curl(url, { dataType: 'json' });
        const { data } = result;
        const {
            // 网页授权接口调用凭证, 注意：此access_token与基础支持的access_token不同
            access_token,
            // access_token接口调用凭证超时时间，单位（秒）
            // expires_in,
            // 用户刷新access_token
            // refresh_token,
            // 用户唯一标识，请注意，在未关注公众号时，用户访问公众号的网页，也会产生一个用户和公众号唯一的OpenID
            openid,
            // 用户授权的作用域，使用逗号（, ）分隔
            // scope,
        } = data;
        url = `https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}&lang=zh_CN`;
        result = await this.ctx.curl(url, { dataType: 'json' });
        /*
            openid	用户的唯一标识
            nickname	用户昵称
            sex	用户的性别，值为1时是男性，值为2时是女性，值为0时是未知
            province	用户个人资料填写的省份
            city	普通用户个人资料填写的城市
            country	国家，如中国为CN
            headimgurl	用户头像，最后一个数值代表正方形头像大小（有0、46、64、96、132数值可选，0代表640*640正方形头像），用户没有头像时该项为空。若用户更换头像，原有头像URL将失效。
            privilege	用户特权信息，json 数组，如微信沃卡用户为（chinaunicom）
            unionid	只有在用户将公众号绑定到微信开放平台帐号后，才会出现该字段。
        */
        return result.data;
    }

    async getAccessToken() {
        let { access_token, access_token_expires } = await this.ctx.model.Wx.findOne({}, { access_token_expires: 1, access_token: 1 });
        const now = new Date().getTime();
        if (access_token_expires - 600000 < now) {
            // 过期了
            const { appid, appsecret } = this.ctx.app.config.wx;
            const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appsecret}`;
            // {"access_token":"ACCESS_TOKEN","expires_in":7200}
            const result = await this.ctx.curl(url, { dataType: 'json' });
            await this.ctx.model.Wx.update({}, { $set: {
                access_token: result.data.access_token,
                access_token_expires: result.data.expires_in * 1000,
            } }, { multi: true });
            access_token = result.data.access_token;
        }
        return access_token;
    }

    async getJSApiTicket() {
        let { jsapi_ticket_expires, jsapi_ticket } = await this.ctx.model.Wx.findOne({}, { jsapi_ticket_expires: 1, jsapi_ticket: 1 });
        const now = new Date().getTime();
        if (jsapi_ticket_expires - 600000 < now) {
            // 过期了
            const access_token = await this.getAccessToken();
            const url = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token}&type=jsapi`;
            const result = await this.ctx.curl(url, { dataType: 'json' });
            await this.ctx.model.Wx.update({}, { $set: {
                jsapi_ticket: result.data.ticket,
                jsapi_ticket_expires: result.data.expires_in * 1000,
            } });
            jsapi_ticket = result.data.ticket;
        }
        return jsapi_ticket;
    }

}

module.exports = WXService;
