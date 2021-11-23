import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Heading from "../../../components/Heading";
import TextDetectionImage from "../../../images/annotations/transcriptio.png";
import Construction from "../../../images/construction.svg";
import tick from "../../../images/tick.svg";

const data = [
	{
		id: 1,
		itemText: "Name Entity Recognition",
		itemImage: TextDetectionImage,
	},
	{
		id: 2,
		itemText: "Classification",
		itemImage: TextDetectionImage,
	},
	{
		id: 3,
		itemText: "ML transcription",
		itemImage: TextDetectionImage,
	},
	// {
	// 	id: 4,
	// 	itemText: "Custom Workflows",
	// 	itemImage: TextDetectionImage,
	// },
];

export const TextDetection = ({ classes }) => {
	const [dataImage, setDataImage] = useState(TextDetectionImage);

	// const handleClick = (itemImage) => {
	//   setDataImage(itemImage);
	//   console.log(itemImage);
	// };

	return (
		<Row className={classes}>
			<Col xs={12} sm={12} md={4}>
				<Heading
					iconBefore
					icon={Construction}
					iconClass='iconPricingWidth'
					altText=""
					headingClass="font-weight-normal mb-0 pl-2"
					HeadingText="TEXT DETECTION"
					para
					paraText="You can extract valuable insights from any kind of enormous text data. You can easily train your AI model to automate your textual dealings, like for automated customer care. Civixa provide all kinds of text annotations. "
					paraClass="my-3"
				/>
				{/* {data.map((item) => {
					return (
						<div
							onClick={() => {
								setDataImage(item.itemImage);
								console.log(item.id);
							}}
						>
							<Heading
								iconBefore
								icon={tick}
								headingClass="text-small font-weight-normal pl-3"
								HeadingText={item.itemText}
							/>
						</div>
					);
				})} */}
			</Col>
			<Col xs={12} sm={12} md={8} className={"pt-4"}>
				<img
					src={dataImage}
					className={"upper-grid w-100 img-fluid"}
					alt="data-label-web"
				/>
			</Col>
		</Row>
	);
};
