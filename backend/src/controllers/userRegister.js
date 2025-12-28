const User=require('../models/User')

async function userRegister(req,res){
  try{
    const user = await User.create(req.body);
    res.send("userCreated")

  }catch(err){
    console.log(err)
    res.send("Error")
  }

    
  res.status(201).json(user);

}

module.exports=userRegister