import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const url=import.meta.env.VITE_baseurl+'/users/register'
const Signup = () => {
  const [firstName,setfn]=useState("")
  const [lastName,setln]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [cp,setCp]=useState("")
  const [phone,setPhone]=useState("")
  const [bio,setBio]=useState("")



  const register=async(e)=>{
    e.preventDefault()
    if (cp.trim() === password.trim()){
      const resp=await axios.post(url,{firstName,lastName,email,password,phone,bio})
    console.log(resp)

    }
    else{
      alert("Passwords do not match");
    return;
    }
    


  }
  return (
    <div>
        <form className='signup' onSubmit={register}>
            <label>First Name <input type="text" value={firstName} onChange={(e)=>setfn(e.target.value)}/></label>
            <br />
            <label>Last Name <input type="text" value={lastName} onChange={(e)=>setln(e.target.value)}/></label>
            <br />
            <label>Email <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></label>
            <br />
            <label>Password <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} /></label>
            <br />
            <label>Confirm Password <input type="password" value={cp} onChange={(e)=>setCp(e.target.value)}/></label>
            <br />
            <label>Phone <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/></label>
            <br />
            <label>Bio <input type="text" value={bio} onChange={(e)=>setBio(e.target.value)} /></label>
            <br />
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default Signup
