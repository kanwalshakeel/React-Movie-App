import React, { useState } from 'react'
import "./css/App.css"
import Card from './components/Card'
import axios from 'axios'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Favorite from './pages/Favorite'
import Navbar from './components/Navbar'
import { MovieProvider } from './contexts/MovieContext'


const App = () => {
  
  return (
   <MovieProvider>
    <Navbar/>
    <main className='main-content'>
   <Routes>
     <Route path='/' element={<Home/>}/>
    <Route path='/favorite' element={<Favorite/>}/>
   </Routes>
   </main>
   </MovieProvider>
  
  )
}

export default App