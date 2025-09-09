import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {type:String, required: true},
    description: {type:String, required: true},
    category: {type:String, required: true},
    image: {type:String, required: true},
    date: {type:Date, default:Date.now()},
    author: {type:String, required: true},
    author_img: {type:String, required: true},
})

const BlogModel = mongoose.models.blog || mongoose.model('blog', schema);
export default BlogModel