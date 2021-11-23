import React, { useState } from "react";
import { Row } from "react-bootstrap";
import InfiniteCarousel from "react-leaf-carousel";

import BoxBlue from "./Images/box-blue.svg";
import CuboidBlue from "./Images/cuboid.svg";
import KeyPointBlue from "./Images/keypoin.svg";
import PointBlue from "./Images/point-blue.svg";
import PolygonsBlue from "./Images/polygons-blue.svg";
import PolylinesBlue from "./Images/polylines.svg";
import SegmentationBlue from "./Images/sementation.svg";
// import classification from "./TabIcons/classification.svg";
// import box from "./TabIcons/box.svg";
// import cuboid from "./TabIcons/Cuboid.svg";
// import point from "./TabIcons/point.svg";
// import polygons from "./TabIcons/Polygons.svg";
// import polylines from "./TabIcons/polylines.svg";
// import segmentation from "./TabIcons/segmentation.svg";
// import transcription from "./TabIcons/Transcription.svg";
import "./CustomTabs.css";
import TabData from "./TabData";

const data = [
	{
		value: "box",
		component: <TabData />,
	},
	{
		value: "cuboid",
		component: <TabData />,
	},
	{
		value: "classification",
		component: <TabData />,
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
		component: <TabData />,
	},
	{
		value: "transcription",
		component: <TabData />,
	},
];

export const ResponsiveCarousel = () => {
	const [option, selectedOption] = useState(<TabData />);

	const handleClick = (e) => {
		const optionValue = data.find((element) => element.value == e);
		selectedOption(optionValue.component);
		console.log(optionValue);
	};

	// const handleClick = (e) => {
	//   console.log(e);
	// };
	return (
		<>
			<Row className="d-block responsive-carousel overflow-hidden">
				<InfiniteCarousel
					breakpoints={[
						{
							breakpoint: 500,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							},
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							},
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							},
						},
					]}
					// dots={true}
					// showSides={true}
					// sidesOpacity={0.5}
					// sideSize={0.1}
					slidesToScroll={1}
					slidesToShow={3}
					// scrollOnDevice={true}
				>
					<div
						className="d-flex"
						value="box"
						onClick={() => handleClick("box")}
					>
						<img
							src={BoxBlue}
							alt="box"
							className={"tabIcon pr-2"}
						/>
						Box
					</div>
					<div
						className="d-flex"
						value="cuboid"
						onClick={() => handleClick("cuboid")}
					>
						<img
							src={CuboidBlue}
							alt="box"
							className={"tabIcon pr-2"}
						/>
						Cuboid
					</div>
					<div
						className="d-flex"
						value="polygons"
						onClick={() => handleClick("polygons")}
					>
						<img
							src={PolygonsBlue}
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
							src={PolylinesBlue}
							alt="polylines"
							className={"tabIcon pr-2"}
						/>
						Polylines
					</div>
					<div
						className="d-flex"
						value="keypoint"
						onClick={() => handleClick("classification")}
					>
						<img
							src={KeyPointBlue}
							alt="Key Point"
							className={"tabIcon pr-2"}
						/>
						Key Point
					</div>
					<div
						className="d-flex"
						value="point"
						onClick={() => handleClick("point")}
					>
						<img
							src={PointBlue}
							alt="point"
							className={"tabIcon pr-2"}
						/>
						Point
					</div>
					<div
						className="d-flex"
						value="segmentation"
						onClick={() => handleClick("segmentation")}
					>
						<img
							src={SegmentationBlue}
							alt="segmentation"
							className={"tabIcon pr-2"}
						/>
						Segmentation
					</div>
				</InfiniteCarousel>
			</Row>
			<div className="pt-4">{option}</div>
		</>
	);
};
