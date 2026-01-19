const Post=require('../models/Post')
async function getFeed(req,res){
    try{
    const resp=await Post.find()
    res.send(resp)
    }catch(err){
        console.log(err)
        return res.send("Error fetching feed")
    }
}
module.exports=getFeed