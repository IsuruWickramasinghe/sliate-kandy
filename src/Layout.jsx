import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


function Layout({children}) {
  return (
    <>
    <nav className='nav'><NavBar /></nav>
    <main className='main'>{children}</main>
    <footer className='footer'><Footer /></footer>
    </>
  )
}

export default Layout