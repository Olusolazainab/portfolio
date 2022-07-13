import React from 'react';
import './Header.css';
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import Fade from 'react-reveal/Fade';

const Header = () => {
	return (
      
		<nav className='header-container d-flex justify-content-center '>
			  <Fade top>
            <div className='m-3'>
          <a href='https://www.linkedin.com/in/olusola-oluwani-154635127' target="_blank"> <span className='header-icon'><FaLinkedinIn /></span>  <span className='linkedin'>LinkedIn</span></a>
			</div>
			<div className='m-3'>
            <a href='https://github.com/Olusolazainab' target="_blank">  <span className='header-icon'><AiFillGithub/></span>  <span className='linkedin'>Github</span></a>
			</div>
            <div className='m-3'>
            <a href='https://wa.me/2348139500083' target="_blank">  <span className='header-icon'><AiOutlineWhatsApp/></span>  <span className='linkedin'>WhatsApp</span></a>
			</div>
            </Fade>
		</nav>
        
	);
};
 
export default Header;
