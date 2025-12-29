import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Health from './components/Health'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Profile/Login'
import Notifications from './components/Notifications/Notifications'
import Messaging from './components/Messaging/Messaging'
import Feed from './components/Feed/Feed'
import Signup from './components/Profile/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div className='app-container'>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/messaging' element={<Messaging/>}/>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/notifications' element={<Notifications/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
