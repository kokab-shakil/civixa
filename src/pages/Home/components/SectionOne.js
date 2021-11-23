import React, { useState, Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import SquareIcon from "../../../components/SquareIcon/SquareIcon";
import dataLabelImage from "../../../images/datalabel.svg";
import group24 from "../../../images/home/group24.svg";
import group69 from "../../../images/home/group69.svg";
import group2640 from "../../../images/home/Group2640.svg";
import repeatGrid from "../../../images/RepeatGrid.svg";
import Heading from "../../../components/Heading";

import Video1 from "../../../videos/video1.mp4";
import Video1Thumbnail from "../../../videos/video1.png";
import ReactPlayer from "react-player/lazy";

// Icons
import Accuracy from "../Icons/accuracy.svg";
import Customer from "../Icons/customer.svg";
import Data from "../Icons/data.svg";

export default function SectionOne({ classes }) {
	const [ready, setReady] = useState(false);
	return (
		<Row className={classes}>
			<Col
				xs={12}
				md={6}
				className={"position-relative p-0 d-none d-md-block"}
			>
				{ready === false && (
					<img
						src={Video1Thumbnail}
						alt="vide-Thumbnail"
						className="thumbnail-image position-absolute"
					/>
				)}
				<ReactPlayer
					url={Video1}
					playing={true}
					width={"100%"}
					height={"100%"}
					muted={true}
					loop={true}
					onStart={() => setReady(true)}
					className={"video-tag"}
					// style={{borderRadius: 10}}
				/>
				<img
					className={"hide-grid"}
					src={repeatGrid}
					alt="data-label-web"
				/>
			</Col>
			<Col xs={12} md={6} className={"pt-4 paddingPartner"}>
				<div className="">
					<h1 className="data-heading ">
						<div className="d-flex xs-fontSize-boldHeading justify-content-md-start justify-content-center text-center text-md-left text-lg-left">
							Your Partner In 
							<div className="d-flex justify-content-center justify-content-md-start text-center">
								<span className="ml-2 underlined">Automation</span>
							</div>
						</div>
					</h1>
					<p className=" text-center text-md-left" >
                        Civixa.ai is a trustable partner for all your computer vision and ai annotation needs. We will help your organisation in automating your business processes. From data generation to the deployment of trained AI models. Only so you can invest your time where it is needed the most


					</p>
				</div>
				<Row className="data-square-icon  d-flex justify-content-between align-items-center pr-md-0 pr-lg-5 pt-4 m-0">
					{data.map((item, key) => {
						return (
							<div
								key={key}
								className="d-flex flex-column align-items-center data-square-icon-container"
							>
								<img
									src={item.img}
									alt=""
									className="icon-img-xs"
								/>
								<p className="mb-0 data-square-icon-heading pt-3">
									{item.heading}
								</p>
								<p className="mb-0 data-square-icon-heading">
									{item.para}
								</p>
							</div>
						);
					})}
					{/* <SquareIcon
						className={"icon-size mb-2 "}
						titleOne="99%"
						titleTwo="Accurate"
						Icon={group24}
						xs="4"
					/>
					<SquareIcon
						className={"icon-size mb-2"}
						Icon={group69}
						titleOne="Premium customer"
						titleTwo="support"
						xs="4"
					/>
					<SquareIcon
						className={"icon-size mb-2"}
						Icon={group2640}
						titleOne="Assisted data"
						titleTwo="labeling"
						xs="4"
					/> */}
				</Row>
			</Col>
			<Col className={"position-relative d-block d-md-none"}>
				{/* <ReactPlayer
					url={Video1}
					playing={true}
					width={"100%"}
					height={"100%"}
					muted={true}
					loop={true}
				/> */}
			</Col>
		</Row>
	);
}

const data = [
	{
		heading: "99.9%",
		para: "Accuracy",
		img: Accuracy,
	},
	{
		heading: "Premium customer",
		para: "Support",
		img: Customer,
	},
	,
	{
		heading: "Assisted data",
		para: "labeling",
		img: Data,
	},
];
