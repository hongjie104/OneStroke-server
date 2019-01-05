const child_process = require('child_process');
const path = require('path');
const Controller = require('../core/baseController');

class WebHookController extends Controller {
    async pushAdmin() {
        child_process.execFile(path.join(this.config.baseDir, './shell/pushAdmin.sh'));
        this.success();
    }
}

module.exports = WebHookController;
