import { connectedDB } from '@/lib/config/DB';
import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises';
import BlogModel from '@/lib/models/blogModel';

const fs = require('fs');

const LoadDB = async () => {
    await connectedDB();
}
LoadDB();

// API endpoint to get All
export async function GET(request) {

    const blogId = request.nextUrl.searchParams.get('id');
    if (blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json({ blog });
    }else{
        const blogs = await BlogModel.find({});
        return NextResponse.json({ blogs });
    }
    
}

// api endpoint for upload blog
export async function POST(request){
    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`
    
    const blogData = {
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        image:imgUrl,
        author:`${formData.get('author')}`,
        author_img:`${formData.get('author_img')}`
    }

    await BlogModel.create(blogData);
    console.log("blog saved",blogData);

    return NextResponse.json({success:true,message:'Blog Added'});
    
}

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    fs.unlink(`./public/${blog.image}`, (err) => {
        if (err) console.log(err);
    });
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({success:true,message:'Blog Deleted'});
}