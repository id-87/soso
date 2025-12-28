const User=require('../models/User')
const bcrypt=require('bcrypt')

async function userRegister(req,res){
  const {firstName,lastName,password,phone,email,bio}=req.body
  if(!firstName||!lastName||!email||!password){
    return res.status(400).send("Full name, email and passwords are mandatory")
  }
  
  try{
    const hashp=await bcrypt.hash(password,10)
    const user = await User.create({firstName:firstName,
      lastName:lastName,
      email:email,
      password:hashp,
      phone:phone,
      bio:bio

    });
    res.status(201).json(user);

  }catch(err){
    console.log(err)
    res.send("Error")
  }

    
  

}

module.exports=userRegister