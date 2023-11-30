import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Page/Home'
import About from './Page/About'
import Courses from './Page/Courses'
import Gallery from './Page/Gallery'
import Staff from './Page/Staff'
import Page404 from './Page/Page404'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/courses' element={<Courses />} />
      <Route exact path='/gallery' element={<Gallery />} />
      <Route exact path='/staff' element={<Staff />} />
      <Route exact path='*' element={<Page404 />} />
    </Routes>
  )
}

export default App