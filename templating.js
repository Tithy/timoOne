const  nunjucks = require("nunjucks");

function createEnv(path,opts) {
    var autoescape = opts.autoescape === undefined ? true:opts.autoescape,
        noCahe = opts.noCache || false,
        watch = opts.watch || false,
        throwInUndefined = opts.throwInUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader(path || 'view',{
                noCache:noCahe,
                watch:watch,
            }),{
                autoescape:autoescape,
                throwInUndefined:throwInUndefined
            });
    if(opts.filters){
        for(var f in opts.filters){
            env.addFilter(f,opts.filters[f])
        }
    }
    return env;
}

function templating(path,opts) {
    var env = createEnv(path,opts);
    return async(ctx,next)=>{
        ctx.render = function (view,model) {
            ctx.response.body = env.render(view,Object.assign({},ctx.state || {}, model || {}));
            ctx.response.type = 'text/html';
        };
        await next();
    };
}


module.exports = templating;