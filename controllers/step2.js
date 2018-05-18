module.exports = {
    "GET /step2": async(ctx,next) => {
    ctx.render('step2.html',{
    title:"iframe"
});
}
};
