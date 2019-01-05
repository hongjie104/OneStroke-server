const { Controller } = require('egg');

class BaseController extends Controller {
    // get user() {
    //     return this.ctx.session.user;
    // }

    success(data) {
        this.ctx.body = {
            success: true,
            data,
        };
    }

    fail(data) {
        this.ctx.body = {
            success: false,
            data,
        };
    }

    notFound(data) {
        data = data || 'not found';
        this.ctx.throw(404, data);
    }
}

module.exports = BaseController;
