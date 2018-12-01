const Router = require('koa-router');
const posts = require('./posts');
const api = new Router();

// router connect
api.use('/posts', posts.routes());

api.get('/test', (ctx) => {
    ctx.body = 'Success';
})

module.exports = api;