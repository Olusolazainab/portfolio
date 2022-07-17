import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_nvdfhee',
				'template_uucc6pt',
				form.current,
				'NsAYIW-BbYKk80zLR'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};

	return (
		<section className='contact'>
			<div className='mt-5 pt-5'>
				<h5>
					<span className='get-in-touch'>Get In Touch</span>
				</h5>
				<h2>
					<span className='me'>Contact Me</span>
				</h2>
			</div>
			<div className='container contct-container mt-5  '>
				<div className='contact-options'>
					<article className='contact-option'>
						<MdOutlineEmail className='contact-option-icon' />
						<h4>Email</h4>
						<h5>olusolazainab@gmail.com</h5>
						<a href='mailto:olusolazainab@gmail.com' target='_blank'>
							{' '}
							<span className='message'>send a message</span>
						</a>
					</article>
					<article className='contact-option'>
						<RiMessengerLine className='contact-option-icon' />
						<h4>Messenger</h4>
						<a href='https://m.me/olusanya.olusola.98' target='_blank'>
							{' '}
							<span className='message'>send a message</span>
						</a>
					</article>
					<article className='contact-option'>
						<AiOutlineWhatsApp className='contact-option-icon' />
						<h4>WhatsApp</h4>

						<a href='https://wa.me/2348139500083' target='_blank'>
							{' '}
							<span className='message'>send a message</span>
						</a>
					</article>
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='Your full name'
						required
					/>
					<input type='email' name='email' placeholder='Your Email' required />
					<textarea
						name='message'
						rows='7'
						placeholder='Your Message'
						required
					/>
					<button type='submit' className='btn submit-btn'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
