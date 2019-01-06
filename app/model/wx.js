module.exports = app => {
    const { mongoose } = app;
    /**
     * 微信相关的表
     */
    return mongoose.model('WX', new mongoose.Schema({
        access_token: { type: String, default: '' },
        access_token_expires: { type: Number, default: 0 },
        jsapi_ticket: { type: String, default: '' },
        jsapi_ticket_expires: { type: Number, default: 0 },
    }));
};
