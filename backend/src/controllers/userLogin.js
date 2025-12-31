const jwt=require('jsonwebtoken')
const User=require('../models/User')
const bcrypt=require('bcrypt')

require('dotenv').config()
const JWT_SECRET=process.env.JWT_SECRET

async function userLogin(req,res){
    const{username,password}=req.body
    if(!username||!password){
        return res.status(400).send("Credentials are invalid or missing")
    }
    try{
        const resp=await User.findOne({username})
        // console.log(JWT_SECRET)
        console.log(resp)
        if(!resp){
            return res.status(404).send("User not found")
        }
        
        const pass=resp.password
        console.log(pass)
        const match=await bcrypt.compare(password,pass)
        if (!match) {
      return res.status(401).send("Invalid credentials");
    }
        if(match){
            const token=jwt.sign({username},JWT_SECRET)
            
    
    res.status(200).send({"token":token})
            
        }

    }catch(err){

        console.log(err)
         return res.status(500).send("Login failed");
    }

}

module.exports=userLogin