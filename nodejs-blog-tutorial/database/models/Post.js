
const Post = require('./database/models/Post');

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String
});

const Post = mongoose.model('Post', PostSchema);



const mongoose = require('mongoose');

app.post('/posts/store', (req, res) => {
    Post.create(req.body, (error, post) => {
        res.redirect('/')
    })
});

module.exports = Post;