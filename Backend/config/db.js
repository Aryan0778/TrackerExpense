import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://aryan:aryan123@cluster0.m9psxar.mongodb.net/Expense")
    .then(()=> console.log("DB CONNECTED")
    )
}