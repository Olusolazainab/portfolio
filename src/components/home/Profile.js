import React from 'react';
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';
import './Profile.css';
import {useNavigate} from 'react-router-dom'


const Profile = () => {
	const navigate = useNavigate()
	return (
		
		<section className='profile-container d-flex flex-column align-items-center'>
			<Fade bottom>
			<div className='profile-picture  '>
				<div className='profile-picture-background'></div>
			</div>

			<div className='profile-details-name'>
				<span className='primary-text'>
					Hello, I'm <span className='name'>Oluwani Zaianb</span>
				</span>
			</div>
			<div className='profile-details-role'>
				<span className='primary-text typical-text'>
					<h3>
						<Typical
							loop={Infinity}
							steps={['Ethusiastic Dev', 1000, 'React JS Dev', 1000, 'Front end Dev', 1000]}
						/>
					</h3>
					<span className='profile-role-tagline'>
						A React JS Front end Developer who specializes in building fast, beautiful and
						responsive websites and we applications.
					</span><br />
				<span className=' d-flex justify-content-center'>Got Anything? &nbsp;<button  className='contact-me' onClick={()=> navigate('/contact')}>Contact me</button></span>
				
				</span>
			</div>
			<div className='profile-options '>
						<button onClick={()=> navigate('/projects')} className='btn primary-btn projects'>Projects</button>
						<a href="Zainab's CV.pdf" download="Oluwani Zainab's CV.pdf">
							<button className='btn highlighted-btn'>Get Resume</button>
						</a>
					</div>
					</Fade>
					
		</section>
		
	);
};

export default Profile;
