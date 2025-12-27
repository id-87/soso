import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const Health = () => {
    const [data,setData]=useState(null)
    const emer="No data"
    

    const health=async()=>{
        const resp=await axios.get('http://localhost:3000/health')
        setData(resp.data)


    }

  return (
    <div>
      <button onClick={health}> health</button>
      {data?data:emer}
    </div>
  )
}

export default Health
