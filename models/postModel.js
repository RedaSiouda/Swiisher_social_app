const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    swiish: {type: String, required: true},
    swiishPic: String,
    swiishTimeStamp: String,

})

const PostModel = mongoose.model('Post', postSchema);

module.exports = PostModel