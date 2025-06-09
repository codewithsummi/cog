import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        lowercase:true, //uppercase
        required:true,
        minlength:3,
        maxlength:20
    },
    email:{
        type:String,
        trim:true,
        lowercase:true, //uppercase
        required:true,
        unique:true,
       
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:6,
       
    },
    age:{
        type: Number,
        required:true,
        min: 18,
        max: 65,
        default: 21
    },
    gender:{
        type:String,
        trim:true,
        required:true,
        lowercase:true,
        enum:["male", "female"]
    },
    userImg:{
        type: String,
        default: "defaultUser.png"
    },
   
},{
    timestamps: true
})



const User = mongoose.model("User", userSchema)
export default User;