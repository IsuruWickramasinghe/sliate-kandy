import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Page/Home'
import About from './Page/About'
import Courses from './Page/Courses'
import Gallery from './Page/Gallery'
import Staff from './Page/Staff'
import Page404 from './Page/Page404'
import Announcement from './components/sub-comp/Announcement'
import AtiEvent from './components/sub-comp/AtiEvent'
import Gal from './components/sub-comp/Gal'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/courses' element={<Courses />} />
      <Route exact path='/gallery' element={<Gallery />} />
      <Route exact path='/staff' element={<Staff />} />
      <Route exact path='/announcement/:dep/:announcements_id' element={<Announcement />} />
      <Route exact path='/event/:dep/:event_id' element={<AtiEvent />} />
      <Route exact path='/gallery/:dep/:gal_id' element={<Gal />} />
      <Route exact path='*' element={<Page404 />} />
    </Routes>
  )
}

export default App