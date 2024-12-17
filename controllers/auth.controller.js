import Authservice from "../services/auth.service.js";
import bcryptjs from "bcryptjs"
const {registerUser}= new Authservice

export default class AuthController{
  async registerUser(req, res, next){
    try {
      const {password, email, name, phone, address }= userData
      const {userData } =req.body
      if (!password || !name || !phone){
        throw new Error ( "please provide all required details");
      }
      const hashpassword = bcryptjs.hash (password, 10);
      const user = await registerUser({userData})


    } catch (error) {
      
    }
  }

}