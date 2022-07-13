import Profile from './components/home/Profile';
import './App.css';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route
					path='/'
					element={
						<>
							{' '}
							<Header />
							<Profile />
							<Projects />
						</>
					}
				/>

				<Route
					path='/contact'
					element={
						<>
							{' '}
							<Contact />
						</>
					}
				/>
				<Route
					path='/projects'
					element={
						<>
							
							<Projects />
						</>
					}
				/>
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
