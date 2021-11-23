import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import "./ItemCarousel.css";
import classification from "../../images/CarouselIcons/classification.svg";
import box from "../../images/CarouselIcons/box.svg";
import cuboid from "../../images/CarouselIcons/Cuboid.svg";
import point from "../../images/CarouselIcons/point.svg";
import polygons from "../../images/CarouselIcons/Polygons.svg";
import polylines from "../../images/CarouselIcons/polylines.svg";
import segmentation from "../../images/CarouselIcons/segmentation.svg";
import transcription from "../../images/CarouselIcons/Transcription.svg";
import { Container, Row } from "react-bootstrap";
import TabData from "../CustomTabs/TabData";
import { ItemCarousel } from "./ItemCarousel";

const data = [
	{
		value: "Anootation",
		component: "Box",
	},
	{
		value: "Data",
		component: <ItemCarousel />,
	},
	{
		value: "AI",
		component: "Classification",
	},
];

export const ServiceCarousel = () => {
	const [option, selectedOption] = useState(<ItemCarousel />);

	const handleClick = (e) => {
		const optionValue = data.find((element) => element.value == e);
		selectedOption(optionValue.component);
	};
	return (
		<Row className="w-100 m-auto">
			<Carousel
				pagination={false}
				showArrows={false}
				breakPoints={[
					{ width: 1, itemsToShow: 1, pagination: false },
					{ width: 350, itemsToShow: 2, pagination: false },
					{
						width: 550,
						itemsToShow: 2,
						itemsToScroll: 2,
						pagination: false,
					},
					{ width: 850, itemsToShow: 3 },
					{ width: 1150, itemsToShow: 4, itemsToScroll: 2 },
					{ width: 1450, itemsToShow: 5 },
					{ width: 1750, itemsToShow: 6 },
				]}
			>
				<div
					value="Anootation"
					onClick={() => handleClick("Anootation")}
				>
					<img
						src={box}
						alt="Anootation"
						className={"tabIcon pr-2"}
					/>
					Anootation
				</div>
				<div
					className="d-flex"
					value="Data"
					onClick={() => handleClick("Data")}
				>
					<img
						src={cuboid}
						alt="Data Generation"
						className={"tabIcon pr-2"}
					/>
					Data Generation
				</div>
				<div
					className="d-flex"
					value="AI"
					onClick={() => handleClick("AI")}
				>
					<img src={polygons} alt="AI" className={"tabIcon pr-2"} />
					AI as a Service
				</div>
			</Carousel>
			<Container>
				<Row className="p-4">{option}</Row>
			</Container>
		</Row>
	);
};
