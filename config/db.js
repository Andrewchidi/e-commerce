import mongoose from "mongoose";
import dotenv from "dotenv"


 export const connectDb = async()=>{
  await mongoose.connect(process.env.MONGO_URL)
  .then(()=> console.log("mongoDB is connected"))
  .catch((err)=> console.log( err));
};




