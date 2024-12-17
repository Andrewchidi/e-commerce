import mongoose from "mongoose";

const productSchema=mongoose.Schema({

  name:{
    type:String,
    required: true,
   },
   price:{
    type:number,
    reqired:true,
   },
   description :{
    type : String,
   },

   quantity :{
    type : String
   },
   productImg:{
    type: String
   }
},{timestamp:true});

export default mongoose.model("product", productSchema)