const jwt=require('jsonwebtoken')
const User=require('../models/User')
const bcrypt=require('bcrypt')
const JWT_SECRET=process.env.JWT_SECRET

async function userLogin(req,res){
    const{email,password}=req.body
    if(!email||!password){
        return res.status(400).send("Credentials are invalid or missing")
    }
    try{
        const resp=await User.findOne({email})
        if(!resp){
            return res.status(404).send("User not found")
        }
        
        const pass=resp.password
        const match=await bcrypt.compare(password,pass)
        if (!match) {
      return res.status(401).send("Invalid credentials");
    }
        if(match){
            const token=jwt.sign({email},JWT_SECRET)
            res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: false, 
    });
    res.send({"token":token})
            
        }

    }catch(err){

        console.log(err)
         return res.status(500).send("Login failed");
    }

}

module.exports=userLogin