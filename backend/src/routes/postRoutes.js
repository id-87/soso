const express=require('express')
const router=new express.Router()
const createPost=require('../controllers/createPost')
const getFeed=require('../controllers/getFeed')
const authMiddleware=require('../middlewares/authMiddleware')

router.post('/create',authMiddleware,createPost)
router.get('fetch',getFeed)
module.exports=router
