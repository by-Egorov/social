import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Register from './page/Register/Register.jsx'
import Home from './page/Home/Home.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Register/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default App