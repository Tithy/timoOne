module.exports = {
    "GET /index": async(ctx,next) => {
        ctx.render('index.html',{
        title:"hello"
        });
    }
};