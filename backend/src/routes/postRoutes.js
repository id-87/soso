const express=require('express')
const router=new express.Router()
const createPost=require('../controllers/createPost')

router.post('/create',createPost)

module.exports=router
