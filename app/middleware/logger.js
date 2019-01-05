const bytes = require('bytes');
const Counter = require('passthrough-counter');
const humanize = require('humanize-number');

module.exports = () => {
    function log(ctx, start, len, err, event) {
        // get the status code of the response
        const status = err ? (err.status || 500) : (ctx.status || 404);

        // get the human readable response length
        let length;
        if (~[204, 205, 304].indexOf(status)) {
            length = '';
        } else if (len == null) {
            length = '-';
        } else {
            length = bytes(len);
        }

        const upstream = err ? 'xxx' : event === 'close' ? '-x-' : '-->';
        ctx.logger.info('	%s %s %s %s %s %s', upstream, ctx.method, ctx.originalUrl, status, time(start), length);
    }

    /**
     * Show the response time in a human readable format.
     * In milliseconds if less than 10 seconds,
     * in seconds otherwise.
     * @param {Date} start start date
     * @return {Number} time
     */
    function time(start) {
        let delta = new Date() - start;
        delta = delta < 10000 ? delta + 'ms' : Math.round(delta / 1000) + 's';
        return humanize(delta);
    }

    return async function logger(ctx, next) {
        // request
        const start = new Date();
        ctx.logger.info('	<-- %s %s', ctx.method, ctx.originalUrl);
        try {
            await next();
        } catch (err) {
            // log uncaught downstream errors
            log(ctx, start, null, err);
            throw err;
        }

        // calculate the length of a streaming response
        // by intercepting the stream with a counter.
        // only necessary if a content-length header is currently not set.
        const length = ctx.response.length;
        const body = ctx.body;
        let counter;
        if (length == null && body && body.readable) {
            ctx.body = body.pipe(counter = Counter()).on('error', ctx.onerror);
        }

        // log when the response is finished or closed,
        // whichever happens first.
        const onfinish = done.bind(null, 'finish');
        const onclose = done.bind(null, 'close');

        const res = ctx.res;
        res.once('finish', onfinish);
        res.once('close', onclose);

        function done(event) {
            res.removeListener('finish', onfinish);
            res.removeListener('close', onclose);
            log(ctx, start, counter ? counter.length : length, null, event);
        }
    };
};
