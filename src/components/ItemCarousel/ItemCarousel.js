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

const data = [
	{
		value: "box",
		component: "Box",
	},
	{
		value: "cuboid",
		component: <TabData />,
	},
	{
		value: "classification",
		component: "Classification",
	},
	{
		value: "point",
		component: "point",
	},
	{
		value: "polygons",
		component: <TabData />,
	},
	{
		value: "polylines",
		component: <TabData />,
	},
	{
		value: "segmentation",
		component: "segmentation",
	},
	{
		value: "transcription",
		component: <TabData />,
	},
];

export const ItemCarousel = () => {
	const [option, selectedOption] = useState(TabData);

	const handleClick = (e) => {
		const optionValue = data.find((element) => element.value == e);
		selectedOption(optionValue.component);
		console.log(optionValue);
	};
	return (
		<Row className="w-100 m-auto">
			<Carousel
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
				<div value="box" onClick={() => handleClick("box")}>
					<img src={box} alt="box" className={"tabIcon pr-2"} />
					Box
				</div>
				<div
					className="d-flex"
					value="cuboid"
					onClick={() => handleClick("cuboid")}
				>
					<img src={cuboid} alt="box" className={"tabIcon pr-2"} />
					Cuboid
				</div>
				<div
					className="d-flex"
					value="polygons"
					onClick={() => handleClick("polygons")}
				>
					<img
						src={polygons}
						alt="polygons"
						className={"tabIcon pr-2"}
					/>
					Polygons
				</div>
				<div
					className="d-flex"
					value="polylines"
					onClick={() => handleClick("polylines")}
				>
					<img
						src={polylines}
						alt="polylines"
						className={"tabIcon pr-2"}
					/>
					Polylines
				</div>
				<div
					className="d-flex"
					value="classification"
					onClick={() => handleClick("classification")}
				>
					<img
						src={classification}
						alt="classification"
						className={"tabIcon pr-2"}
					/>
					Classification
				</div>
				<div
					className="d-flex"
					value="point"
					onClick={() => handleClick("point")}
				>
					<img src={point} alt="point" className={"tabIcon pr-2"} />
					Point
				</div>
				<div
					className="d-flex"
					value="segmentation"
					onClick={() => handleClick("segmentation")}
				>
					<img
						src={segmentation}
						alt="segmentation"
						className={"tabIcon pr-2"}
					/>
					Segmentation
				</div>
				<div
					className="d-flex"
					value="transcription"
					onClick={() => handleClick("transcription")}
				>
					<img
						src={transcription}
						alt="transcription"
						className={"tabIcon pr-2"}
					/>
					Transcription
				</div>
			</Carousel>
			<Container>
				<Row className="p-4">{option}</Row>
			</Container>
		</Row>
	);
};
