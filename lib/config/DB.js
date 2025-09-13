import mongoose from "mongoose";

export const connectedDB = async () => {
    mongoose.connect('mongodb+srv://next_kazan:b4yhQryNglQW7cgx@cluster0.mgstja5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/blog-app');
    console.log('DB connected');
}

