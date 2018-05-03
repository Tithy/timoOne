module.exports = {
    "GET /test": async(ctx,next) => {
        ctx.render('test.html',{
        title:"iframe"
        });
    }
};