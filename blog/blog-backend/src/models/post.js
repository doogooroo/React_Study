const mongoose = require('mongoose');
const { Schema } = mongoose; 

const Post = new Schema({
    title: String,
    body: String,
    tags:[String],
    publishedDate: { //필드값
        type: Date,
        default: new Date()
    }
})
// 모델 생성시 moongoose.model 함수 사용
//
module.exports = mongoose.model('Post', Post);