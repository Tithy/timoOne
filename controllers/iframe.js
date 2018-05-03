module.exports = {
    "GET /iframe": async(ctx,next) => {
        ctx.render('iframe.html',{
        title:"iframe"
    });
    }
};
