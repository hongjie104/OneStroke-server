module.exports = app => {
    const { mongoose } = app;
    /**
     * 用户表
     */
    return mongoose.model('User', new mongoose.Schema({
        openid: { type: String, required: true },
    }));
};
