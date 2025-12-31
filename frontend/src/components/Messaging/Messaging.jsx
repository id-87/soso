import React from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

const Messaging = () => {
  const sendMessage=()=>{
    socket.emit('connection',()=>console.log("connection triggered"))
  }
  return (
    <div>
        <p>Private messaging of soso</p>
      
    </div>
  )
}

export default Messaging
