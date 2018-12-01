let postId = 1; // init

const posts = [
    {
        id:1,
        title:'title',
        body:'content'
    }
]
// POST/api/posts {title, body}
exports.write = (ctx) => {
    //REST API request body는 ctx.request.body check
    const {title, body} = ctx.request.body;
    postId += 1;
    const post = {id: postId, title, body};

    console.log('post' + title,body);
    // insert data
    posts.push(post);
    ctx.body = post;
};

exports.list = (ctx) => {
    ctx.body = posts;
};

exports.read = (ctx) => {
    const {id} = ctx.params;

    const post = posts.find(p => p.id.toString() === id);

    if(!post){
        ctx.status = 404;
        ctx.body = {
            message:'Doesn`t have posts'
        };
        return;
    }
    ctx.body = post;
}

exports.remove = (ctx) => {
    const {id} = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if(index === -1){
        ctx.status = 404;
        ctx.body = {
            message: 'doesn`t have posts'
        };
        return;
    }
    posts.splice(index,1);
    ctx.status = 204;
}

exports.replace = (ctx) => {
    const {id} = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if(index === -1){
        ctx.status = 400;
        ctx.body = {
            message: 'doesn`t have posts'
        };
        return;
    }
    posts[index] = {
        id,
        ...ctx.request.body
    };
    ctx.body = posts[index];
};

exports.update = (ctx) => {
    const {id} = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if(index === -1) {
        ctx.status = 404;
        ctx.body = {
            message:'doesn`t have posts'
        };
        return;
    }
    posts[index] = {
        ...posts[index],
        ...ctx.request.body
    };
    ctx.body = posts[index];

}