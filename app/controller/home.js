// const fs = require('fs');
// const path = require('path');
const Controller = require('../core/baseController');

class HomeController extends Controller {
    async index() {
        this.success('hi, welcome to One-Stroke-Server!');
    }

    async test() {
        this.success();
    }
}

module.exports = HomeController;
