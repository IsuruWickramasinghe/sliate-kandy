import React from 'react'
import '../styles/footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className="footer-links">
        <ul className="page-links">
          <h4>Page</h4>
          <NavLink className={"footer-link"} to={'/'}>Home</NavLink>
          <NavLink className={"footer-link"} to={'/about'}>About</NavLink>
          <NavLink className={"footer-link"} to={'/courses'}>Courses</NavLink>
          <NavLink className={"footer-link"} to={'/gallery'}>Gallery</NavLink>
          <NavLink className={"footer-link"} to={'/staff'}>Staff</NavLink>
        </ul>
        <ul className="social-links">
          <h4>Social Links</h4>
          <li><a className={"footer-link"} target='_blank' href="http://www.sliate.ac.lk/">SLIATE</a></li>
          <li><a className={"footer-link"} target='_blank' href="https://www.facebook.com/sliate.ac.lk/">Facebook</a></li>
          <li><a className={"footer-link"} href="mailto:abc@gmail.com">Email</a></li>
          <li><a className={"footer-link"} href="tel:+94000000000">+94 00 000 0000</a></li>
        </ul>
      </div>
      <div className="credits">
        <p>Copyright © 2024, KANDY-SLIATE.</p>
        <p>Designed and developed by : isuruW</p>
      </div>
    </>
  )
}

export default Footer