module.exports = app => {
    const { mongoose } = app;
    /**
     * 用户表
     */
    return mongoose.model('User', new mongoose.Schema({
        // 用户的唯一标识
        openid: { type: String, required: true },
        // 用户昵称
        nickname: { type: String, required: true },
        // 用户的性别，值为1时是男性，值为2时是女性，值为0时是未知
        sex: { type: Number, default: 0 },
        // 用户个人资料填写的省份
        province: { type: String, default: '' },
        // 普通用户个人资料填写的城市
        city: { type: String, default: '' },
        // 国家，如中国为CN
        country: { type: String, default: '' },
        // 用户头像，最后一个数值代表正方形头像大小（有0、46、64、96、132数值可选，0代表640* 640正方形头像），用户没有头像时该项为空。若用户更换头像，原有头像URL将失效。
        headimgurl: { type: String, default: '' },
        // 只有在用户将公众号绑定到微信开放平台帐号后，才会出现该字段。
        unionid: { type: String, default: '' },
        // 已获得的钱的数量
        money: { type: Number, default: 0 },
        curLevel: { type: Number, default: 1 },
        // 重玩的次数
        replayCount: { type: Number, default: 0 },
    }));
};
