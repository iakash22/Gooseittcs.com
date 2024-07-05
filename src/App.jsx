import React from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const navigate = useNavigate();
  return (
    <div className='overflow-hidden'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<div className='h-screen w-screen flex-col flex justify-center items-center'>
          <h2 className='md:text-5xl text-3xl caption-top text-center font-semibold mb-5'>Page is under maintenance</h2>
          <button className='py-3 px-10 bg-blue text-2xl text-white rounded-md' onClick={() => navigate(-1)}>Back</button>
        </div>} />
      </Routes>
    </div>
  )
}

export default App
