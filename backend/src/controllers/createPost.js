const Post=require('../models/Post')
// const authMiddleware=require('../middlewares/authMiddleware')

async function createPost(req,res){
    const {title,body}=req.body
    const username = req.user.username;

    try{
        const resp=await Post.create({username,title,body})
        res.send("Post created")
    }
    catch(err){
        console.log(err)
        res.send("Error")
    }
}


module.exports=createPost