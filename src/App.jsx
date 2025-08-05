import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Coin from './pages/Coin/Coin'
import Footer from './component/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coin/:coinId" element={<Coin/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App