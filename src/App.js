import React from 'react'
import Home from './pages/home/Home'
import Schedules from './pages/schedules/Schedules'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/search/:building" element={<Schedules />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App