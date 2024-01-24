const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    
    displayName: String,
    userName: String,
    profilPic: Buffer,
    emailAdress: String,
    pet: String,
    password: String,
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
})

const User = new mongoose.model('User', userSchema);

module.exports = User;