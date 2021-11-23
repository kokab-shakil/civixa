import React, { useState } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";

import TabData from "../../../../components/CustomTabs/TabData";

// icons
import classification from "../../../../images/CarouselIcons/classification.svg";
import box from "../../../../images/CarouselIcons/box.svg";


// New Icons
import BoxBlue from "../../../../images/NewCarouselIcons/box-blue.svg";
import PointBlue from "../../../../images/NewCarouselIcons/point-blue.svg";
import PolygonsBlue from "../../../../images/NewCarouselIcons/polygons-blue.svg";
import PolylinesBlue from "../../../../images/NewCarouselIcons/polylines.svg";
import SegmentationBlue from "../../../../images/NewCarouselIcons/sementation.svg";
import Classification from "../../../../images/NewCarouselIcons/check.svg";

import Keypoint from "../../../../images/NewCarouselIcons/keypoin.svg";

// Annotation Icons

import SegmentationAnnotation from "../../../../images/annotations/segmentation.png";
import boundingBox from "../../../../images/annotations/boundingBox.png";
import pointa from "../../../../images/annotations/point.png";
import transcriptionA from "../../../../images/annotations/transcriptio.png";
import polyline from "../../../../images/annotations/polyline.png";
import classify from "../../../../images/annotations/child.png";
import papaya from "../../../../images/annotations/papayaNatural.png";
import boxSide from "../../../../images/annotations/sideBox.png";
import alvin from "../../../../images/annotations/alvin.png";
import meeting from "../../../../images/annotations/meeting.png";

import Car from "../../../../images/car.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./SizeCarousel.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

export const ServicesCarousel = () => {
	const [selected, setSelected] = useState(1);
	const [child, setChild] = useState(<AnnotationChild />);
	const handleClick = (item, key) => {
		setSelected(key + 1);
		setChild(item.child);
	};
	return (
		<>
			<Swiper
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				freeMode={true}
				className={"sizeCarousel mt-2"}
				slidesPerView={"auto"}
			>
				<div className="">
					{data.map((item, key) => {
						return (
							<SwiperSlide>
								<button
									className={`service-button ${
										selected === item.id ? "selected " : ""
									}`}
									onClick={() => handleClick(item, key)}
								>
									{item.name}
								</button>
							</SwiperSlide>
						);
					})}
				</div>
			</Swiper>
			<Container>
				<Row className=" d-flex justify-content-center">
					{child}
				</Row>
			</Container>
		</>
	);
};

const AnnotationChild = () => {
	const [childSelected, setChildSelected] = useState(0);
	const [option, selectedOption] = useState(annotationChildData[0].component);

	const handleClick = (e, selected) => {
		const optionValue = annotationChildData.find(
			(element) => element.value === e
		);
		selectedOption(optionValue.component);
		setChildSelected(selected);
		console.log(childSelected);
	};
	return (
		<>
			<div className="anotationChildDataBox  d-flex justify-content-start justify-content-md-center justify-content-lg-center justify-content-sm-center row">
			{annotationChildData.map((item, key) => {
				return (
					<div 
						key={key}
						className="service-carousel-smallIcon paddingXs col-6 col-sm-auto "
					>
						<div
							className={`d-flex py-2 pr-2 beholdNotationXs cursor-pointer ${
								childSelected === key ? "childSelected" : ""
							}`}
							value={item.value}
							onClick={() => handleClick(item.value, key)}
						>
							<img
								src={item.icon}
								alt={item.value}
								className={`tabIcon beholdIconXs pr-2 ${
									childSelected === key
										? "childSelectedIcon"
										: "notSelected"
								}`}
							/>
							{item.value}
						</div>
					</div>
				);
			})}
				</div>
			<Container className="pt-4">
				<Row className="d-flex justify-content-center align-items-center">
					<div className=" max-width-865">
						{option}
					</div>
				</Row>
			</Container>
		</>
	);
};

const DGenerationChild = () => {
	const [childSelected, setChildSelected] = useState(0);
	const [option, selectedOption] = useState(
		dataGenerationChildData[0].component
	);

	const handleClick = (e, selected) => {
		const optionValue = dataGenerationChildData.find(
			(element) => element.value === e
		);
		selectedOption(optionValue.component);
		setChildSelected(selected);
	};
	return (
		<>
			{dataGenerationChildData.map((item, key) => {
				return (
					<div
						key={key}
						className="service-carousel-smallIcon paddingXs col-6 col-sm-auto "
					>
						<div
							className={`d-flex py-2 pr-2 beholdNotationXs cursor-pointer  ${
								childSelected === key ? "childSelected" : ""
							}`}
							value={item.value}
							onClick={() => handleClick(item.value, key)}
						>
							<img
								src={item.icon}
								alt={item.value}
								className={`tabIcon beholdIconXs pr-2  ${
									childSelected === key
										? "childSelectedIcon"
										: ""
								}`}
							/>
							{item.value}
						</div>
					</div>
				);
			})}
			<Container className="pt-4">
				<Row className="d-flex justify-content-center align-items-center">
					<div className="padding-right-sm max-width-865">
						{option}
					</div>
				</Row>
			</Container>
		</>
	);
};

const DResourcesChild = () => {
	const [childSelected, setChildSelected] = useState(0);
	const [option, selectedOption] = useState(
		dedicatedResourcesChildData[0].component
	);

	const handleClick = (e, selected) => {
		const optionValue = dedicatedResourcesChildData.find(
			(element) => element.value === e
		);
		selectedOption(optionValue.component);
		setChildSelected(selected);
	};
	return (
		<>
			<div className="anotationChildDataBox  d-flex justify-content-start justify-content-md-center justify-content-lg-center justify-content-sm-center row">
			{dedicatedResourcesChildData.map((item, key) => {
				return (
					<div
						key={key}
						className="service-carousel-smallIcon paddingXs col-auto col-sm-auto pr-3 pr-lg-4"
					>
						<div
							className={`d-flex pr-3 py-2 beholdNotationXs cursor-pointer ${
								childSelected === key ? "childSelected" : ""
							}`}
							value={item.value}
							onClick={() => handleClick(item.value, key)}
						>
							<img
								src={item.icon}
								alt={item.value}
								className={`tabIcon pr-2 beholdIconXs ${
									childSelected === key
										? "childSelectedIcon"
										: ""
								}`}
							/>
							{item.value}
						</div>
					</div>
				);
			})}
				</div>
			<Container className="pt-4">
				<Row className="d-flex justify-content-center align-items-center">
					<div className="padding-right-sm max-width-865">
						{option}
					</div>
				</Row>
			</Container>
		</>
	);
};

const data = [
	{
		id: 1,
		name: "Annotation",
		child: <AnnotationChild />,
	},
	{
		id: 2,
		name: "Data Genenration",
		child: <DGenerationChild />,
	},
	{
		id: 3,
		name: "Dedicated Resources",
		child: <DResourcesChild />,
	},
];

const annotationChildData = [
	{
		value: "Segmentation",
		component: (
			<>
			<TabData
				twoButton
				cardImage={SegmentationAnnotation}
				cardClass="serice-carousel-card"
				headingText="Semantic segmentation"
				paraText={["If you have a pixel in your image or video frame, we have our eyes on it. With simple and focused ai annotation handling, we will offer Semantic segmentation.", <br />, <span style={{ color: "#12356a" }}> Use cases:</span>, <br />, ]}
				list={['Geo-sensing for land usage', 'Precision agriculture', 'Industrial inspection', 'Medical imaging analysis']}	
				/>
			 
			</>
		),
		icon: SegmentationBlue,
	},
	{
		value: "bounding box",
		component: (
			<TabData
				twoButton
				cardImage={boundingBox}
				cardClass="serice-carousel-card"
				headingText="Bouding Box"
				paraText={["With our bounding box technique, you can detect any small or large defect in your dataset. Our data annotation specialist can distinguish the tiniest of objects from each other. It is a simple process where we follow every step towards precision.", <br />, <span style={{ color: "#12356a" }}> Use cases:</span>]}
				list={['Defect detection', 'Object detection for eCommerce', 'Drone training', 'Robot training']}	
				
			/>
		),
		icon: BoxBlue,
	},
	{
		value: "Polylines",
		component: (
			<TabData
				twoButton
				cardImage={polyline}
				cardClass="serice-carousel-card"
				headingText="Polylines"
				paraText={["Lines may be boring but we will spend our dedicated time in getting them recognised for your model. With our immaculate data labeling services for polyline methods, you can expect all the boundaries and lines to be distinguished from each other.", , <br />, <span style={{ color: "#12356a" }}> Use cases:</span>,]}
				list={[ 'Sidewalks',  'Railroads',  'Coastal lines',  'Air strips']}	
			/>
		),
		icon: PolylinesBlue,
	},
	{
		value: "Point",
		component: (
			<TabData
				twoButton
				cardImage={pointa}
				cardClass="serice-carousel-card"
				headingText="Point Annotation"
				paraText={["Our experts can help you quantify a large number of dataset using point annotation technique. With our perfectly balanced hands combined with professional data labeling services, you can detect the desired objects needed for your specific AI model.", <br />, <span style={{ color: "#12356a" }}> Use cases:</span>,]}
				list={[  'Quantifying objects',  'Landmark detection']}	
			/>
		),
		icon: PointBlue,
	},
	
	{
		value: "Classification",
		component: (
			<TabData
				twoButton
				cardImage={classify}
				cardClass="serice-carousel-card"
				headingText="Image Classification"
				paraText={["Image classification is a technique where we don't compromise. We will help your model to be trained such that it doesn't leave any object behind. Any error in image annotation service will be removed by our team of experts. ", <br />, <span style={{ color: "#12356a" }}> Use cases:</span>,]}
				list={[  'Human behaviour prediction',  'Improving medical imagery', 'Iris recognition']}	
			/>
		),
		icon: Classification,
	},
	
	
	{
		value: "Polygons",
		component: (
			<TabData
				twoButton
				cardImage={Car}
				cardClass="serice-carousel-card"
				headingText="Polygons"
				paraText={["With our precise polygons, you can easily identify the small-sized objects, even from space. Our labeled data in machine learning is immaculate. We use this technique for training highly precise application models.", <br />, <span style={{ color: "#12356a" }}> Use cases:</span>]}
				list={[ 'Satellite imagery',  'Drone imagery',  'Autonomous mobility']}	
			/>
		),
		icon: PolygonsBlue,
	},
	
	{
		value: "Transcription",
		component: (
			<TabData
				twoButton
				cardImage={transcriptionA}
				cardClass="serice-carousel-card"
				headingText="Transcription"
				paraText={["Bring all the used documents to our service because we will help you extract all possible data from it. We understand that labeled data in machine learning needs to be translated easily. Hence, any margin of error will be avoided.", <br />, <span style={{ color: "#12356a" }}> Use cases:</span>,]}
				list={[  "Creating notes through images",  "Identifying printing mistakes"]}	
			/>
		),
			icon: Keypoint,
	},
	
];

const dedicatedResourcesChildData = [
	{
		value: "Data Gathering",
		component: (
			<TabData
				twoButton
				cardImage={boxSide}
				cardClass="serice-carousel-card"
				headingText="Data Gathering"
				paraText="There are use-cases where custom datasets are required and the customers want dedicated resources. They need data annotation specialists who will be producing datasets just for their AI models on a regular basis. We are one of the best data labeling companies to offer such resources. "
				list={[ ]}
			/>
		),
		icon: box,
	},
	{
		value: "Data Annotation",
		component: (
			<TabData
				twoButton
				cardImage={meeting}
				cardClass="serice-carousel-card"
				headingText="Data Annotation"
				paraText="There are computer vision organisations that produce thousands of images on a weekly basis and need them annotated on the go. For these clients, we provide dedicated resources who are trained and assigned to their projects only."
				list={[ ]}
			/>
		),
		icon: box,
	},
];

const dataGenerationChildData = [
	{
		value: "Data Gathering",
		component: (
			<TabData
				twoButton
				cardImage={papaya}
				cardClass="serice-carousel-card"
				headingText="Data Gathering"
				paraText="Our highly trained staff gathers standard quality datasets according to the data annotation needs of your AI-model.
                The type of data can be different images, large videos, or contextual data, depending upon your business operation.
                 Our team members gather real-life data from the required source point. 
                 We ensure that you receive a top-notch dataset that strengthens the foundation of your AI-model.
                "
				list={[ ]}
			/>
		),
		icon: box,
	},
	{
		value: "Synthetic Data Generation",
		component: (
			<TabData
				twoButton
				cardImage={alvin}
				cardClass="serice-carousel-card"
				headingText="Synthetic Data Generation"
				paraText="In several edge cases, it is impossible to generate an adequate amount of real-life datasets. For example, over the past 100 years, 25 hurricanes have hit the states of Florida. 
                 This isn't enough to generate a sufficient amount of dataset to train a model accurately. In data annotation cases like these, we generate synthetic datasets which mimic real-life datasets."
				list={[]}
			/>
		),
		icon: box,
	},
];
