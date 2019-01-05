const Service = require('egg').Service;

class CreateIdService extends Service {

    async getId(model) {
        const result = await this.ctx.model.IdentityCounter.findOneAndUpdate({
            model,
        }, {
            $inc: {
                count: 1,
            },
        }, {
            upsert: true,
            new: true,
        });
        return result.count;
    }

}

module.exports = CreateIdService;
