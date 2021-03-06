require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const api = require('./api');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

const {
    PORT: port = 4000,
    MONGO_URI: mongoURI
} = process.env;
mongoose.Promise = global.Promise; // Node Promise 사용
mongoose.connect(mongoURI,{useNewUrlParser: true}).then(() => {
    console.log('connected to mongodb');
}).catch((e) => {
    console.error(e);
})
const app = new Koa();
const router = new Router();

// 라우터 설정
router.use('/api', api.routes()); // api 라우터 적용
// 라우터 적용전 bodyParser 적용
app.use(bodyParser());
// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('listening to port ', port);
})