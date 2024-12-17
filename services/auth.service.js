import mongoose from "mongoose";
import User from "../models/user.model.js";

export default class Authservice{
  async registerUser(userData){
    const {email}=userData;
    const existingUser = await User.findone(email);
    if(existingUser){
      throw new Error ("user alredy exist with this email ")
    }
    const user = await user.create(userData)
  }
}