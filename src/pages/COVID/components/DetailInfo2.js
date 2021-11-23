import React from "react";
import { Row } from "react-bootstrap";
import { DetailInfo } from "./common/DetailInfo";
import DetainInfoImage from "../../../images/deatailinfo-image-01.png";

const cardData = [
	{
		CardClass: "px-4 py-4 px-md-5 py-md-5 ml-auto",
		headingText: "EFFICIENCY & ACCURACY",
		headingClass: "font-weight-900 text-green",
		paraText:
			"Autonomous checking offthe SOPs enables the staff with a boost of 100% efficiency with less effort. We provide accuracy of the SOP detection above 89%, as of date making us best-in- class.",
		paraClass: "",
	},
	{
		CardClass: "px-4 py-4 px-md-5 py-md-5 ml-auto",
		headingText: "ON-TIME AI-MODEL",
		headingClass: "font-weight-900 text-green",
		paraText:
			"You can also track people not following the rules instantly on your screens using your live CCTV footage.",
		paraClass: "",
	},
];

export const DetailInfo2 = ({ classes }) => {
	return (
		<Row className={classes}>
			<DetailInfo cardData={cardData} cardCol="order-lg-last" imageCol="">
				<img
					src={DetainInfoImage}
					alt="Detail Info Image 02"
					className="img-fluid"
				/>
			</DetailInfo>
		</Row>
	);
};
