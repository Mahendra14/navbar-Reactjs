import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  //a useState for making the ham to only show when pressed
  const [showLinks,setShowLinks] = useState(false);

//adding useRef to get the reference of the containers thtats been buried in.
const linkContainerRef = useRef(null);
const linkRef = useRef(null);
  //function to toggle
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  }

  //using useEffect to mess with the height of the container to blow it into proportions.
  useEffect(()=>{
    const linkHeight = linkRef.current.getBoundingClientRect().height;
    if(showLinks){
      linkContainerRef.current.style.height = `${linkHeight}px`;
    }else{
      linkContainerRef.current.style.height = '0px';
    }
    //we are gng to make use of this height and change it inline so make sure to mark it imporatant in css.
  },[showLinks]);
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
       {/*its very important to make the whole ul to wrap around in container to make it viable - as we are going to do the height 0 in css manually.*/}
        <div className="links-container" ref={linkContainerRef}>
          <ul className="links" ref={linkRef}>
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
