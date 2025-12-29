import React, { useState } from 'react'
import axios from 'axios'
const url=import.meta.VITE_baseurl+'/users/login'
const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const submit = async(e)=>{
    e.preventDefault()
    try{
       const resp=await axios.post(url,{email,password})
       alert("logged in")
    }catch(err){
      console.log(err)
      alert("Error logging in")
    }
    
   
    
  }
  return (
    <div>
      <form className='login' onSubmit={submit}>
        <label>Email: <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} /></label>
        <label>Password: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} /></label>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
