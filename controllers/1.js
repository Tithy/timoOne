var fn_index = async(ctx,next) =>{
    ctx.response.body ='' +
        '<h1>index</h1>' +
        '<form action="/signin" method="post">\n' +
        '            <p>Name: <input name="name" value="koa"></p>\n' +
        '            <p>Password: <input name="password" type="password"></p>\n' +
        '            <p><input type="submit" value="Submit"></p>\n' +
        '        </form>'
}

var fs_signin = async(ctx,next) =>{
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
        if(name === "koa" && password === "12345"){
            ctx.response.body = "<h1>hello</h1>"
        }else {
            ctx.response.body = "<h1>no</h1>" +
                "<p><a href='/'>again</a></p>"
        }
};

module.exports = {
    'GET /' : fn_index,
    'POST /signin':fs_signin
}