import jwt from 'jsonwebtoken';
import User from '../models/user.model';
const CLIENT_SECRET="hfksdf998898sdfks0909"
const auth=async(req,res,next)=>{
    try{
         const header=req.header("Authorization");
         const token=header && header.split(" ")[1];
         const decode=jwt.verify(token,CLIENT_SECRET);
         const user=await User.findOne({_id:decode._id})
         if(!user) return res.send("UnAuthorize person")
            next();
    }
    catch(err){
      res.send("UnAuthorize person or invalid token")
    }
}
export default auth;