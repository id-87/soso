import React, { useState } from 'react'
import axios from 'axios'
const url=import.meta.env.VITE_baseurl+'/users/login'
const Login = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const submit = async(e)=>{
    e.preventDefault()
    try{
      const resp=await axios.post(url,{username,password});
      alert("logged in")
      localStorage.setItem("token", resp.data.token);

    }catch(err){
      console.log(err)
      alert("Error logging in")
    }
    
   
    
  }
  return (
    <div>
      <form className='login' onSubmit={submit}>
        <label>User Name: <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} /></label>
        <label>Password: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} /></label>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
