import User from "../models/user.model.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
const CLIENT_SECRET="hfksdf998898sdfks0909"
const register=async (req,res)=>{
   try{
       let newuserData= req.body;
       newuserData.password=bcrypt.hashSync(newuserData.password,salt)
       const userData=new User(newuserData)
       await userData.save();
       res.status(200).json({"err":0,"msg":"User registered"})
   }
   catch(err){
       res.status(400).json({"err":1,"msg":"Already registered or something went wrong","error":err})
   }
}
const login=async (req,res)=>{
    try{
         let {email,password}=req.body;
         const userData=await User.findOne({email:email})
         if(!userData) return res.status(400).json({"err":1,"msg":"Already registered or something went wrong"})
            if(bcrypt.compareSync(password,userData.password)){
                let payload={_id:userData._id,email:userData.email}
                const token=jwt.sign(payload,CLIENT_SECRET,{expiresIn:'2h'})
                res.status(200).json({"err":0,"msg":"User registered","_token":token})
            }
            else{
                res.status(400).json({"err":1,"msg":"Already registered or something went wrong"})
            }
    }
    catch(err){
        res.status(400).json({"err":1,"msg":"Enter correct email of password"})
    }
}
export {login,register}