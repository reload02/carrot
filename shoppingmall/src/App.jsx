import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { useState } from 'react'




function App() {
  return (
  <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </div>
  )
}

export default App