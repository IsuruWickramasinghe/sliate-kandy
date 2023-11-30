import React from 'react';
import '../styles/navBar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";



function NavBar() {

  const [menuToggle,setMenuToggle] = useState(false);
  const [searchInput,setSearchInput] = useState("")

  const menuHandler = () => {
    setMenuToggle(prev => !prev)
  }
  
  const handleKeyPress = (e) => {
    if(e.key === "Enter") alert(searchInput)
  }


  return (
    <>
      <div className="nav-state">
        <p>INQUIRIES? CALL: <a href="tel:+94000000000">+94 00 000 0000</a></p>
        <p>SLIATE | KANDY</p>
        <div className="search-box">
          <input type="text" onKeyPress={handleKeyPress} onChange={e => setSearchInput(e.target.value)} placeholder='search'/>
          <FaSearch className='search-icon'/>
        </div>
      </div>
      <div className="nav-bar">
        <div className="logo">
          <img src="/logo.png" alt="logo" className='desk-logo'/>
        </div>
        <div className="menu-toggle" onClick={menuHandler}>
          {(menuToggle)? <IoMdClose className='menu-btn'/> : <IoMdMenu className='menu-btn'/>}
        </div>
        <div className={(menuToggle)? "nav-links-wrapper show-nav-bar" : "nav-links-wrapper"}>
          <ul className="nav-links" onClick={menuHandler}>
            <NavLink className={"nav-link"} to={'/'}>Home</NavLink>
            <NavLink className={"nav-link"} to={'/about'}>About</NavLink>
            <NavLink className={"nav-link"} to={'/courses'}>Courses</NavLink>
            <NavLink className={"nav-link"} to={'/gallery'}>Gallery</NavLink>
            <NavLink className={"nav-link"} to={'/staff'}>Staff</NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
