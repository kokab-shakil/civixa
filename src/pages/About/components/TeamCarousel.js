import React, { useState } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";

// import TabData from "../../../components/CustomTabs/TabData";

// icons
import box from "../../../images/CarouselIcons/box.svg";
import alveena from "../images/alveena.png";
import talha from "../images/talha.png";
import hassan from "../images/hassan.png";


// New Icons

import SegmentationBlue from "../../../images/NewCarouselIcons/sementation.svg";

// Annotation Icons

import SegmentationAnnotation from "../../../images/annotations/segmentation.png";

import papaya from "../../../images/annotations/papayaNatural.png";
import boxSide from "../../../images/annotations/sideBox.png";



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./Team.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";
import TabData from "./TabData";

// install Swiper modules
SwiperCore.use([Navigation]);

export const TeamCarousel = () => {
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
			
				</div>
			<Container className="pt-4">
                <Row className="p-xl-0 p-lg-3 justify-content-between">
                   {annotationChildData.map(data => <Col
						xs={12}
						md={6}
						lg={3}
                    >
                         {data.component}
                    </Col> )}
					
                    
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
		name: "Meet the founders",
		child: <AnnotationChild />,
	},
	{
		id: 2,
		name: "Meet our advisors ",
		child: <DGenerationChild />,
	},
	{
		id: 3,
		name: "Meet our Phds",
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
				cardImage={alveena}
				cardClass="serice-carousel-card"
				headingText="Alveena Sohail"
				paraText="CEO & Co-Founder"
                experience="7 years experience in Product Development"
                founded='Founded Codenvoi'
                
				/>
			 
			</>
		),
		icon: SegmentationBlue,
	},
	{
		value: "Segmentation",
		component: (
			<>
			<TabData
				twoButton
				cardImage={talha}
				cardClass="serice-carousel-card"
				headingText="Talha Yasin"
               paraText="CMO & Co-Founder"
                experience="7 years experience in Product Development"
                founded='CEO at Vortechs'
                lead='Ex-Co-Founder at Botsify'
				/>
			 
			</>
		),
		icon: SegmentationBlue,
    },
    {
		value: "Segmentation",
		component: (
			<>
			<TabData
				twoButton
				cardImage={hassan}
				cardClass="serice-carousel-card"
				headingText="Hassan Kamal"
                paraText="CTO & Co-Founder"
                experience="7 years experience in Product Development"
                founded='Founded Jobs Square'
                lead='Tech lead Team Core SPA'
				/>
			 
			</>
		),
		icon: SegmentationBlue,
	},
	
	
];

const dedicatedResourcesChildData = [
	{
		value: "Data Gathering",
		component: (
			<TabData
				twoButton
				cardImage={alveena}
				cardClass="serice-carousel-card"
                headingText="Data Gathering"
                paraText="There are computer vision organisations that produce thousands of images on a weekly basis and need them annotated on the go. For these clients, we provide dedicated resources who are trained and assigned to their projects only."
			/>
		),
		icon: box,
    },
    {
		value: "Data Gathering",
		component: (
			<TabData
				twoButton
				cardImage={alveena}
				cardClass="serice-carousel-card"
                headingText="Data Gathering"
                paraText="There are computer vision organisations that produce thousands of images on a weekly basis and need them annotated on the go. For these clients, we provide dedicated resources who are trained and assigned to their projects only."
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
				cardImage={alveena}
				cardClass="serice-carousel-card"
				headingText="Data Gathering"
				paraText="Our highly trained staff gathers standard quality datasets according to the data annotation needs of your AI-model.
                The type of data can be different images, large videos, or contextual data, depending upon your business operation.
                 Our team members gather real-life data from the required source point. 
                 We ensure that you receive a top-notch dataset that strengthens the foundation of your AI-model.
                "
			/>
		),
		icon: box,
	},
	
];
