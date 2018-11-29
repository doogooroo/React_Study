const Koa = require('koa');
const app = new Koa();

app.use((ctx, next) => {
    console.log(1);
    next().then(() => {console.log('bye')}); // 다음 미들웨어 실행
})

app.use((ctx, next) => {
    console.log(2);
    next();// 다음 미들웨어 실행
})

app.use((ctx, next) => {
    ctx.body = 'hello world';

    console.log('main middleware URL : ' + ctx.URL);
    console.log(next.name);
});

app.listen(4000, () =>{
    console.log("listning to port 4000");
})