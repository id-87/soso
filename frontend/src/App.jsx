import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Health from './components/Health'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>

      <Home/>
    </>
  )
}

export default App
