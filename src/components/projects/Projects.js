import React from 'react';
import './Projects.css';
import { BiWorld } from 'react-icons/bi';
import Fade from 'react-reveal/Fade';

const Projects = () => {
	return (
		<Fade bottom>
			<section className='project'>
				<h2>Projects</h2>

				<div className='container project-container'>
					<article className='project-item'>
						<h4 className='project-item-p-h4'>Disneyplus clone</h4>
						<p className='project-item-p'>Movies App</p>
						<p className='project-item-p-h4'>Technologies:</p>
						<p className='project-item-p'>
							ReactJS, Redux, Firebase, Style-components
						</p>
						<div className='project-item-CTA'>
							<a
								href='https://disneyplus-clone-5818d.web.app'
								className='visit'
								target='_blank'>
								<BiWorld />
								Visit
							</a>
						</div>
					</article>

					<article className='project-item'>
						<h4 className='project-item-p-h4'>Tesla clone </h4>
						<p className='project-item-p'>Automotive company App</p>
						<p className='project-item-p-h4'>Technologies:</p>
						<p className='project-item-p'>
							ReactJS, Redux, Firebase, Style-components
						</p>
						<div className='project-item-CTA'>
							<a
								href='https://tesla-clone-49b71.web.app'
								className='visit'
								target='_blank'>
								<BiWorld />
								Visit
							</a>
						</div>
					</article>

					<article className='project-item'>
						<h4 className='project-item-p-h4'>Amazon clone</h4>
						<p className='project-item-p'>E-commerce App</p>
						<p className='project-item-p-h4'>Technologies:</p>
						<p className='project-item-p'>
							ReactJS, Context API, Firebase, CSS
						</p>
						<div className='project-item-CTA'>
							<a
								href='https://clone-1406d.web.app'
								className='visit'
								target='_blank'>
								<BiWorld />
								Visit
							</a>
						</div>
					</article>

					<article className='project-item'>
						<h4 className='project-item-p-h4'>World News App</h4>
						<p className='project-item-p'>Series of World News</p>
						<p className='project-item-p-h4'>Technologies:</p>
						<p className='project-item-p'>ReactJS, Bootstrap5</p>
						<div className='project-item-CTA'>
							<a
								href='https://newsapi-fdac0.web.app'
								className='visit'
								target='_blank'>
								<BiWorld />
								Visit
							</a>
						</div>
					</article>

					<article className='project-item'>
						<h4 className='project-item-p-h4'>Inventory System App</h4>
						<p className='project-item-p'></p>
						<p className='project-item-p-h4'>Technologies:</p>
						<p className='project-item-p'>ReactJS, Context API, Bootstrap5</p>
						<div className='project-item-CTA'>
							<a
								href='https://inventory-system-contextapi.web.app'
								className='visit'
								target='_blank'>
								<BiWorld />
								Visit
							</a>
						</div>
					</article>

					<article className='project-item'>
						<h4 className='project-item-p-h4'>Book List App</h4>
						<p className='project-item-p'></p>
						<p className='project-item-p-h4'>Technologies:</p>
						<p className='project-item-p'>ReactJS, Context API, CSS</p>
						<div className='project-item-CTA'>
							<a
								href='https://booklist-fb333.web.app'
								className='visit'
								target='_blank'>
								<BiWorld />
								Visit
							</a>
						</div>
					</article>
					<article className='project-item'>
						<h4 className='project-item-p-h4'>My Portfolio</h4>
						<p className='project-item-p'>know more about me.</p>
						<p className='project-item-p-h4'>Technologies:</p>
						<p className='project-item-p'>ReactJS, Bootstrap5, CSS</p>
						<div className='project-item-CTA'>
							<a
								href='https://my-portfolio-f3e1a.web.app'
								className='visit'
								target='_blank'>
								<BiWorld />
								Visit
							</a>
						</div>
					</article>
				</div>
			</section>
		</Fade>
	);
};

export default Projects;
