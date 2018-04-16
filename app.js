const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controllers');
const templating = require('./templating');

const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

if(!isProduction){
    let staticFiles = require('./static-files');
    app.use(staticFiles('/Static/',__dirname + '/Static'));
}

app.use(bodyParser());

app.use(templating('view',{
    noCache :!isProduction,
    watch:!isProduction
}))

app.use(controller());

app.listen(8081);
console.log('app started at port 8081');