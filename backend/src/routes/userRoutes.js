const express=require('express')
const router=new express.Router()
const userRegister=require('../controllers/userRegister')
const userLogin=require('../controllers/userLogin')
router.post('/register',userRegister)
router.post('/login',userLogin)
module.exports=router
