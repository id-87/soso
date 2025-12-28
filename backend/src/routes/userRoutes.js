const express=require('express')
const router=new express.Router()
const userRegister=require('../controllers/userRegister')
router.post('/register',userRegister)
module.exports=router
