const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:String,
    phone:String,
    bio:String


})

module.exports=mongoose.model("User",userSchema)