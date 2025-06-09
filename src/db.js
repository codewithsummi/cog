import mongoose from "mongoose";
const db="mongodb+srv://smartcodementors:j0VQ6GMzRrRdi1wd@cluster0.urkafbh.mongodb.net/projectcog"

const dbConnect=async ()=>{
  try{
     await mongoose.connect(db)
     console.log("MongoDb  connected")
  }
  catch(err){
    console.log("MongoDb not connected")
  }
}
export default dbConnect;