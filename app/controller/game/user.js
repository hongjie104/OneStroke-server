const Controller = require('../../core/baseController');

class UserController extends Controller {
    async index() {
        // ...
    }

    async login() {
        const { code } = this.ctx.request.body;
        let user = null;
        if (!code) {
            user = await this.ctx.model.User.findOneAndUpdate({
                openid: 'test',
            }, {
                    $set: {
                        nickname: 'hj',
                        sex: 1,
                        province: '江西',
                        city: '上饶',
                        country: '中国',
                        headimgurl: '',
                        unionid: null,
                    }
                }, { upsert: true, new: true });
        } else {
            const {
                // 用户的唯一标识
                openid,
                // 用户昵称
                nickname,
                // 用户的性别，值为1时是男性，值为2时是女性，值为0时是未知
                sex,
                // 用户个人资料填写的省份
                province,
                // 普通用户个人资料填写的城市
                city,
                // 国家，如中国为CN
                country,
                // 用户头像，最后一个数值代表正方形头像大小（有0、46、64、96、132数值可选，0代表640* 640正方形头像），用户没有头像时该项为空。若用户更换头像，原有头像URL将失效。
                headimgurl,
                // 只有在用户将公众号绑定到微信开放平台帐号后，才会出现该字段。
                unionid,
            } = await this.ctx.service.wx.getUserInfo(code);
            user = await this.ctx.model.User.findOneAndUpdate({
                openid,
            }, {
                    $set: {
                        nickname,
                        sex,
                        province,
                        city,
                        country,
                        headimgurl,
                        unionid,
                    }
            }, { upsert: true, new: true });
        }
        this.success({
            id: user._id,
            money: user.money,
            curLevel: user.curLevel,
            leftReplayCount: user.leftReplayCount,
        });
    }

    async passLevel() {
        const { uid } = this.ctx.state;
        await this.ctx.model.User.update({ _id: uid }, { $inc: { curLevel: 1 }, $set: { leftReplayCount: 3 } });
        this.success();
    }

    // 获取红包奖励
    async getRedBag() {
        const { uid } = this.ctx.state;
        const { minVal, maxVal } = this.ctx.request.body;
        const money = parseFloat((Math.random() * (maxVal - minVal) + minVal).toFixed(2));
        await this.ctx.model.User.update({ _id: uid }, { $inc: { money } });
        this.success({ money });
    }

    async replay() {
        const { uid } = this.ctx.state;
        const user = await this.ctx.model.User.findOne({ _id: uid }, { leftReplayCount: 1 });
        if (user) {
            if (user.leftReplayCount > 0) {
                await this.ctx.model.User.update({ _id: uid }, { $inc: { leftReplayCount: -1 } });
                this.success(true);
            } else {
                this.success(false);
            }
        } else {
            this.fail(`没有找到id为${uid}的玩家`);
        }
    }

    async redirect() {
        const { state } = this.ctx.params;
        this.ctx.redirect(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc32a98e6039c198f&redirect_uri=https%3A%2F%2Fwww.bidapei.com&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`);
    }
}

module.exports = UserController;
