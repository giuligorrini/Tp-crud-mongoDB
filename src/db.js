import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGOURI = process.env.MONGODB_URI;

export const connectDB = async ()=> {
    try{
        await mongoose.connect(MONGOURI);
        console.log("Database connected");
    } catch (error){
        console.error("Error connectig to dababase:",error);
        process.exit(1)
    }
};