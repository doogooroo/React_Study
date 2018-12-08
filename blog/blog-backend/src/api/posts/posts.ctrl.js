const Post = require('models/post');
const { ObjectId } = require('mongoose').Types;
const Joi = require('joi');

exports.checkObjectId = (ctx, next) => {
    const { id } = ctx.params;

    if(!ObjectId.isValid(id)){
        ctx.status = 400;
        return null;
    }

    return next();
}


exports.write = async(ctx) => {
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        tags: Joi.array().items(Joi.string()).required()
    })
    const result = Joi.validate(ctx.request.body, schema);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const {title, body, tags} = ctx.request.body;
    const post = new Post({
        title,
        body,   
        tags
    });
    try{
        await post.save();

        ctx.body = post;
    }catch(e) {
        ctx.throw(e,500);
    }
}

exports.read = async (ctx) => {
    const { id } = ctx.params;

    try{
        const post = await Post.findById(id).exec();

        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch(e){
        ctx.throw(e, 500);
    }
}

exports.list = async (ctx) => {

    const page = parseInt(ctx.query.page || 1, 10);

    if(page < 1){
        ctx.status = 400;
        return;
    }

    try{
        // 역순으로 검색(sort(-1))
        // 검색 개수 제한(limit())
        const posts = await Post.find()
        .sort({_id:-1})
        .limit(10)
        .skip((page - 1) * 10)
        .lean()
        .exec();

        const postCount = await Post.count().exec();
        const limitBodyLength = post => ({
            ...post,
            body:post.body.length < 200 ? post.body : `${post.body.slice(0,200)}...`
        })
        ctx.body = posts.map(limitBodyLength);
        ctx.set('Last-Page', Math.ceil(postCount / 10))
        
        //ctx.body = posts;
    }catch(e){
        ctx.throw(e);
    }

}
exports.remove = async (ctx) => {
    const { id } = ctx.params;
    try{
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    }catch(e){
        ctx.throw(e, 500);
    }
}
exports.update = async (ctx) => {
    const { id } = ctx.params;
    
    try{
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true // 설정해야 업데이트된 값을 반환
        }).exec();

        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch(e){
        ctx.throw(e, 500);
    }
}