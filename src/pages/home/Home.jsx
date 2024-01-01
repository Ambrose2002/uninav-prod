import React, { useEffect, useRef, useState } from 'react'
import './home.css'
import BuildingList from './BuildingList'
import { init } from 'ityped'
import { useNavigate } from "react-router-dom";


const Home = () => {

	const [inputValue, setInputValue] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		// Navigate to the ResultPage and pass the input value as a query parameter
		navigate(`/search/${inputValue}`);
	};

	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			typeSpeed: 60,
			showCursor: false,
			backDelay: 1500,
			backSpeed: 60,
			strings: ["Navigate Cornell University smarter with real-time insights.",
				"Your go-to campus room occupancy checker!",
				"Enter a building name and instantly find out which lecture rooms are busy.",
			]
		});
	}, []);

	return (
		<section className="home__container container">
			<div className="intro">
				<span className="intro__text" ref={textRef}></span>
			</div>
			<div className="home__card container">
				<div className='welcome'>
					<span>Welcome to UniNav</span>
				</div>

				<div className="search">
					<form action="/" className='form' onSubmit={handleSubmit}>
						<input type="text" placeholder='Enter Building' className='form__item form__input' list="search-options"
							onChange={(e) => setInputValue(e.target.value)}
						/>
						<BuildingList />

						<button className='button form__item'>
							<span className='button__text'>Search</span>
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Home