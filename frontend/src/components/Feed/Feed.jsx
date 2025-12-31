import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Feed = () => {
  

  function post(){

    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")

    async function createPost(){
      try{
        await axios.post()


      }
      catch(err){
        console.log(err)
      }

  }
    return(
      <>
      <form onSubmit={createPost}>
        <label>Title <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/></label>
        <label>Body <input type="text" value={body} onChange={(e)=>setBody(e.target.value)}/></label>
        {/* <label>Media <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/></label> */}
        <button type='submit'></button>
      </form>
      </>
    )
  }
  return (

    <div>
      <p>Feed of soso</p>
      <button onClick={post}>Create Post</button>
    </div>
  )
}

export default Feed
