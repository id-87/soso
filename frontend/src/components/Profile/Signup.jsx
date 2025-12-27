import React from 'react'

const Signup = () => {
  return (
    <div>
        <form className='signup'>
            <label>First Name <input type="text" /></label>
            <label>Last Name <input type="text" /></label>
            <label>Email <input type="email" /></label>
            <label>Password <input type="password" /></label>
            <label>Confirm Password <input type="pasword" /></label>
            <label>Phone <input type="text" /></label>
            <label>Bio <input type="text" /></label>
        </form>
      
    </div>
  )
}

export default Signup
