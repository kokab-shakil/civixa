import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomCard from "../../../components/CustomCard/CustomCard";
import Heading from "../../../components/Heading";
import CovidModel from "../../../images/CovidModel.svg";
import useWindowSize from "../../../WindowSize";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "./newcomponents/ResponsiveCardCarousel.css";


import SwiperCore from "swiper/core";

export default function PreTrainedModels({ classes }) {
	const [width] = useWindowSize();
	const mail = (e) => {
		 window.location = "mailto:hello@civixa.com";
                          e.preventDefault();
	}
	return (
		<Row className={`${width > 502 ? classes : "padding-y paddingStop"}`}>
			<Col className="d-block d-flex align-items-center flex-column d-md-flex d-lg-flex  d-xl-none p-0">
				<Heading
					HeadingText={[
						<span className="position-relative">
							<span className="pr-2 underlined">Pre-trained</span>
						</span>,
						"models",
					]}
					headingClass="font-weight-900 xs-fontSize-boldHeading text-center text-md-left"
					para
					paraClass=" text-center text-md-left"
					paraText="Your specific business needs will always be listened to."
				/>
			</Col>
			<Col
				xs={12}
				sm={12}
				md={12}
				lg={12}
				xl={8}
				className={
					"d-flex flex-wrap justify-content-center justify-content-lg-around p-0 px-md-0"
				}
			>
				{width > 800 ? (
					<>
						<CustomCard
							icon={CovidModel}
							CardClasses={
								"d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
							}
							HeadingText="COVID19 Model"
							headingClass="card-heading w-min-content text-center"
						/>
						<CustomCard
							icon={CovidModel}
							CardClasses={
								"d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
							}
							HeadingText="Retail Plus"
							headingClass="card-heading w-min-content text-center"
						/>
						<CustomCard
							icon={CovidModel}
							CardClasses={
								"d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
							}
							HeadingText="Autonomous Mobility"
							headingClass="card-heading w-min-content text-center"
						/>
						<CustomCard
							icon={CovidModel}
							CardClasses={
								"d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
							}
							HeadingText="Sentiment Analysis"
							headingClass="card-heading w-min-content text-center"
						/>
					</>
				) : (
					<ResponsiveCardCarousel />
				)}
			</Col>
			<Col className="d-block p-0 d-md-none text-center text-md-left">
				<CustomButton
					btnColor="green"
					btnText="Request A Demo"
					btnClasses="text-white mt-2 mr-3"
					handlebtn={mail}
				/>
			</Col>
			<Col
				xs={12}
				md={4}
				lg={3}
				xl={4}
				className="flex-column justify-content-center d-sm-none d-md-none pl-4 d-lg-none d-xl-flex "
			>
				<Heading
					HeadingText={[
						<span className="position-relative">
							<span className="pr-2 underlined">Pre-trained</span>
						</span>,
						"models",
					]}
					headingClass="font-weight-900 text-left "
					para
					paraText="Your specific business needs will always be listened to."
				/>
				<CustomButton
					btnColor="green"
					btnText="Request A Demo"
					btnClasses="text-white mt-2"
					handlebtn={mail}
				/>
			</Col>
		</Row>
	);
}

const ResponsiveCardCarousel = () => {
	return (
		<Swiper
			freeMode={true}
			className={"ResponsiveCardCarousel"}
			slidesPerView={"auto"}
		>
			{data.map((item, key) => {
				return (
					<SwiperSlide>
						<CustomCard
							icon={item.img}
							CardClasses={
								"d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
							}
							HeadingText={item.name}
							headingClass="card-heading w-min-content text-center"
						/>
					</SwiperSlide>
				);
			})}
			{/* <div className="d-none">
						<span className="swiper-button-prev">
							<i class="fas fa-arrow-left"></i>
						</span>
						<span className="swiper-button-next">
							<i class="fas fa-arrow-right"></i>
						</span>
					</div> */}
		</Swiper>
	);
};

const data = [
	{
		name: "COVID19 Model",
		img: CovidModel,
	},
	{
		name: "Retail Plus",
		img: CovidModel,
	},
	{
		name: "Loan Prediction",
		img: CovidModel,
	},
	{
		name: "Sentiment Analysis",
		img: CovidModel,
	},
];

// 503
