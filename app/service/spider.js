const child_process = require('child_process');

const Service = require('egg').Service;

class SpiderService extends Service {

    async run() {
        // // const ls = child_process.spawn('cd /home/Hope3-spider/ && python spider.py goat');
        // // const ls = child_process.spawn('python', [ '/home/Hope3-spider/spider.py', 'stockx' ]);
        // const ls = child_process.spawn('python', [ '/home/Hope3-spider/spider.py', 'nike', 'common' ]);
        // ls.stdout.on('data', data => {
        //     this.ctx.logger.info('stdout: ' + data);
        // });

        // ls.stderr.on('data', data => {
        //     this.ctx.logger.info('stderr: ' + data);
        // });

        // ls.on('exit', code => {
        //     this.ctx.logger.info('child process exited with code ' + code);
        // });
        // return true;
    }

}

module.exports = SpiderService;
