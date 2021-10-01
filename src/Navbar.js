import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  //a useState for making the ham to only show when pressed
  const [showLinks,setShowLinks] = useState(true);
  //function to toggle
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  }
  return (
    <nav>
      <div className="nav-center">
        {/*for the nav header - 1st part */}
        <div className="nav-header">
          <img src={logo} alt="Logo" className='logo'/>
          <button className="nav-toggle" onClick ={toggleLinks}>
          <FaBars /> 
          </button>
        </div>
        {/*for the nav links to home inside the project navigation- 2nd part */}
        {/*classname to be included to add height to the contianer explicitly - show-container */}
        <div className="links-container">
          <ul className="links">
            {links.map((link) => {
              const {id,url,text} = link;
              return (
                <li key={id}>
                  <a href={url}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/*for the social media links  - 3rd part */}
        <ul className="social-icons">
          {
            social.map((socialLink)=>{
              const {id,url,icon} = socialLink;
              return (
              <li key={id}>
                <a href={url}>
                  {icon}
                </a>
              </li>
              );
            })
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
