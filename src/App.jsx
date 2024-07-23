import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeItemGlobalContext from './components/context/Index'
import Home from './components/pages/home/Index'
import {Route, Routes} from 'react-router-dom'
import Details from './components/pages/details/Index'
import Fav from './components/pages/fav/Index'
import Navbar from './components/navbar/Index'


function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/fav' element={<Fav/>}/>
      </Routes>


    </div>
  )
}

export default App
