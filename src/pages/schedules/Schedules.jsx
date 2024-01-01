import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './schedules.css'
import Schedule from './Schedule';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Schedules = () => {
	const [data, setData] = useState([{}])
	const { building } = useParams()

	useEffect(() => {
		async function getBuilding() {
			try {
				const response = await fetch(`/api/search/${building}/`, {
					method: "GET",
					mode: "no-cors"
				});
				if (response.ok) {
					const jsonResponse = await response.json()
					setData(jsonResponse)
					return (
						<div>
							<Schedule schedules={data.lectures} />
						</div>
					)
				}
				else throw new Error("Request failed");

			} catch (error) {
				console.log(error)
			}
		}
		getBuilding()
	}, [])

	const Data = data.lectures
	console.log(Data)

	try {
		console.log(Data.length)
		if (Data.length === 0) {
			return (
				<div className="all container">No lectures happening at {building} now. Feel free to study in any room.</div>
			)
		}
		return (
			<div>
				<section className="testimonial container section result__page" id='testimonials'>
					<div className='message__container'>
						<span className='message'>Busy rooms</span>
						<div className="swipe__instructions">
							<i class='bx bx-left-arrow-alt arrow arrow-left' ></i>
							<span>Swipe</span>
							<i class='bx bx-right-arrow-alt arrow arrow-right' ></i>
						</div>
					</div>
					<Swiper className="testimonial__container"
						loop={true}
						grabCursor={true}
						spaceBetween={24}
						pagination={{
							clickable: true,
						}}
						breakpoints={{
							576: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 48,
							},
						}}
						modules={[Pagination]}>

						{Data.map(({ code, course, days, location, status, time_period }) => {
							return (
								<SwiperSlide>
									<Schedule lecture={{ code: code, course: course, days: days, location: location, status: status, time_period: time_period }} />
								</SwiperSlide>
							)
						}
						)}


					</Swiper>

				</section>

			</div>
		)
	}
	catch {
		return (
			<div className="all container">{building} is not valid lecture building. Please enter a valid lecture building</div>
		)
	}

}

export default Schedules