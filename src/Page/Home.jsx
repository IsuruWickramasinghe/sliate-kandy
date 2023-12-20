import React from 'react'
import HeroBanners from '../components/HeroBanners'
import Announcements from '../components/Announcements'
import Welcome from '../components/Welcome'
import AtiEvents from '../components/AtiEvents'

function Home() {

  return (
    <div className="home-page">
      <HeroBanners />
      <Announcements />
      <Welcome />
      <AtiEvents />
    </div>
  )
}

export default Home