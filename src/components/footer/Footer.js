import React from 'react'
import './Footer.css'
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {

const currentYear = new Date().getFullYear()

  return (

      <div className='footer-container mt-5 pt-5'>
	<div className='d-flex justify-content-center social'>
            <div className='m-3 mr-5 linkedIn'>
          <a href='https://www.linkedin.com/in/olusola-oluwani-154635127' target="_blank"> <span className='header-icon'><FaLinkedinIn /></span>  <span className='linkedin'>LinkedIn</span></a>
			</div>
			<div className='m-3 ml-5 github'>
            <a href='https://github.com/Olusolazainab' target="_blank">  <span className='header-icon'><AiFillGithub/></span>  <span className='linkedin'>Github</span></a>
			</div>
      </div>
      <div className='copyright mt-5 pt-3 mb-3'>
     <p><span className='contact-me'>©</span> {currentYear}  Zeela. All Rights Reserved</p> 
      </div>
    </div>
  )
}

export default Footer
