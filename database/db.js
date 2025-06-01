import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://sardo1be1:aTZBGgj0sME7dHiQ@cluster0.ji6tr52.mongodb.net/support?retryWrites=true&w=majority&appName=Cluster0');
        console.log(`MongoDB connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}