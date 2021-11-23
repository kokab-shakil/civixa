import React from "react";
import { Col, Row } from "react-bootstrap";

import "./LogoCarousel.css";

// icons
import Udemy from "../../../../images/CarouselImages/udemy.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

export const LogoCarousel = () => {
	// const [selected, setSelected] = useState(1);
	// const [childSelected, setChildSelected] = useState(1);
	// const [option, selectedOption] = useState(TabData);

	// const handleClick = (e, selected) => {
	// 	const optionValue = childData.find((element) => element.value === e);
	// 	selectedOption(optionValue.component);
	// 	setChildSelected(selected);
	// 	console.log(childSelected);
	// };
	return (
		<Row>
			<Col xs={12}>
				<Swiper
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					freeMode={true}
					className={"logoCarousel"}
					slidesPerView={"auto"}
				>
					{data.map((item, key) => {
						return (
							<SwiperSlide>
								<img src={item.img} />
							</SwiperSlide>
						);
					})}
					<div className="d-none">
						<span className="swiper-button-prev">
							<i class="fas fa-arrow-left"></i>
						</span>
						<span className="swiper-button-next">
							<i class="fas fa-arrow-right"></i>
						</span>
					</div>
				</Swiper>
			</Col>
		</Row>
	);
};

const data = [
	{
		id: 1,
		img: Udemy,
	},
	{
		id: 2,
		img: Udemy,
	},
	{
		id: 3,
		img: Udemy,
	},
	{
		id: 4,
		img: Udemy,
	},
	{
		id: 5,
		img: Udemy,
	},
	{
		id: 6,
		img: Udemy,
	},
	{
		id: 7,
		img: Udemy,
	},
	{
		id: 8,
		img: Udemy,
	},
	{
		id: 9,
		img: Udemy,
	},
];
