const Subscription = require('egg').Subscription;

class Spider extends Subscription {
    // 通过 schedule 属性来设置定时任务的执行间隔等配置
    static get schedule() {
        return {
            // interval: '3s',
            // type: 'all', // 指定所有的 worker 都需要执行
            // *    *    *    *    *    *
            // ┬    ┬    ┬    ┬    ┬    ┬
            // │    │    │    │    │    |
            // │    │    │    │    │    └ day of week(0 - 7)(0 or 7 is Sun)
            // │    │    │    │    └───── month(1 - 12)
            // │    │    │    └────────── day of month(1 - 31)
            // │    │    └─────────────── hour(0 - 23)
            // │    └──────────────────── minute(0 - 59)
            // └───────────────────────── second(0 - 59, optional)
            cron: '0 5 12 * * *',
            cronOptions: { tz: 'Asia/Shanghai' },
            type: 'worker',
            immediate: false,
            disable: true,
        };
    }

    // subscribe 是真正定时任务执行时被运行的函数
    async subscribe() {
        // this.ctx.logger.info('======== run spider =========');
        // await this.ctx.service.spider.run();
        // this.ctx.logger.info('======== running spider =========');
    }
}

module.exports = Spider;
