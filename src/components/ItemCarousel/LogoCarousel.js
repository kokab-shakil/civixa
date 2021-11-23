import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Carousel, { consts } from "react-elastic-carousel";
// import payscale from "../../../images/CarouselImages/payscale.png";
// import page from "../../../images/CarouselImages/Page-1.png";
// import mask from "../../../images/CarouselImages/mask.png";
// import download from "../../../images/CarouselImages/download.png";
import Udemy from "../../images/CarouselImages/udemy.svg";
// import ForwardArrow from "../../images/ForwardArrow.svg";
import "./LogoCarousel.css";

// Icons
import Manychat from "../../images/Manychat.svg";
import Car from "../../images/car2.png";
import Facebook from "../../images/facebook.svg";
import useWindowSize from "../../WindowSize";
import ForwardArrow from "./forwardarrow.svg";

export const LogoCarousel = () => {
	const [selected, setSelected] = useState(0);
	const [selectedItem, setselectedItem] = useState(data[0]);

	const handleClick = (key, item) => {
		setSelected(key);
		setselectedItem(item);
	};

	const [width] = useWindowSize();

	const myArrow = ({ type, onClick, isEdge }) => {
		// type === consts.PREV;
		// console.log(consts);
		const pointer =
			type === consts.PREV ? (
				<img
					src={ForwardArrow}
					alt=""
					className="logo-carousel-icon left"
				/>
			) : (
				<img src={ForwardArrow} alt="" className="logo-carousel-icon" />
			);
		return (
			<button
				className="logo-carousel-button mt-2"
				onClick={onClick}
				disabled={isEdge}
			>
				{pointer}
			</button>
		);
	};
	return (
		<>
			<Row className="d-flex align-items-center justify-content-center">
				<Col xs={12} lg={12}>
					<div className="logo-carousel">
						<Carousel
							renderArrow={myArrow}
							pagination={false}
							breakPoints={[
								{ width: 1, itemsToShow: 1 },
								{
									width: 550,
									itemsToShow: 2,
									itemsToScroll: 2,
								},
								{ width: 850, itemsToShow: 4 },
								{
									width: 1150,
									itemsToShow: 5,
									itemsToScroll: 2,
								},
								{ width: 1450, itemsToShow: 5 },
								{ width: 1750, itemsToShow: 6 },
							]}
						>
							{data.map((item, key) => {
								return (
									<div
										key={key}
										className={`logoCarousel-items ${
											selected === key ? "selected" : ""
										}`}
									>
										<img
											src={item.icon}
											alt={item.name}
											className={"tabIcon logo"}
											onClick={() =>
												handleClick(key, item)
											}
										/>
									</div>
								);
							})}
						</Carousel>
					</div>
				</Col>
				{width <= 800 ? null : <Col xs={12} md={6} lg={6}>
					<img
						src={Car}
						alt=""
						className={`${width >= 800 ? "width-50vw" : "w-100"}`}
						// style={`{width: ${width >= 992 ? "50vw" : "100%"}}`}
					></img>
				</Col>}
				<Col xs={12} md={6} lg={6}>
					<Card className="happyclients-card">
						<Card.Body className="p-4">
							<Card.Title>
								<img src={selectedItem.image} alt="" />
							</Card.Title>
							<Card.Text className={"border-bottom pb-3"}>
								{selectedItem.cardText}
							</Card.Text>
							<Card.Link href="#">
								<img src={selectedItem.linkImage} alt="" />
								<h1 className="text-xs">
									{selectedItem.linkImageTitle}
								</h1>
							</Card.Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

const data = [
	{
		name: "Udemy",
		icon: Udemy,
		image: Manychat,
		linkImage: Facebook,
		linkImageTitle: "Larry Page",
		cardText:
			"1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis d minim veniam, quis",
	},
	{
		name: "Udemy",
		icon: Udemy,
		image: Manychat,
		linkImage: Facebook,
		linkImageTitle: "Larry Page",
		cardText:
			"2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis d minim veniam, quis",
	},
	{
		name: "Udemy",
		icon: Udemy,
		image: Manychat,
		linkImage: Facebook,
		linkImageTitle: "Larry Page",
		cardText:
			"3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis d minim veniam, quis",
	},
	{
		name: "Udemy",
		icon: Udemy,
		image: Manychat,
		linkImage: Facebook,
		linkImageTitle: "Larry Page",
		cardText:
			"4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis d minim veniam, quis",
	},
	{
		name: "Udemy",
		icon: Udemy,
		image: Manychat,
		linkImage: Facebook,
		linkImageTitle: "Larry Page",
		cardText:
			"5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis d minim veniam, quis",
	},
	{
		name: "Udemy",
		icon: Udemy,
		image: Manychat,
		linkImage: Facebook,
		linkImageTitle: "Larry Page",
		cardText:
			"6 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis d minim veniam, quis",
	},
	{
		name: "Udemy",
		icon: Udemy,
		image: Manychat,
		linkImage: Facebook,
		linkImageTitle: "Larry Page",
		cardText:
			"7 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis d minim veniam, quis",
	},
];
