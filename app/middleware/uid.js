module.exports = () => {
    return async function uid(ctx, next) {
        const uid = ctx.get('token');
        ctx.state.uid = uid;
        await next();
    };
};