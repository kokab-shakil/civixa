import React from "react";
import { Row } from "react-bootstrap";
import { DetailInfo } from "./common/DetailInfo";
import DetainInfoImage from "../../../images/deatailinfo-image-01.png";

const cardData = [
	{
		CardClass: "px-4 py-4 px-md-5 py-md-5",
		headingText: "MULTIPLE LOCATIONS",
		headingClass: "font-weight-900",
		paraText:
			"You can add multiple locations of your retail store or offices and can compare the analytics of which location is obeying the most SOPs, which location is at high risk etc.",
		paraClass: "",
	},
	{
		CardClass: "px-4 py-4 px-md-5 py-md-5",
		headingText: "DETAILED INSIGHTS",
		headingClass: "font-weight-900",
		paraText:
			"Get the day to day analytics of your organization through a rich dashboard. Analytics includes, statistics of shifts obeying most of the rules, footfall, daily analysis of highest and lowest SOP followed, etc.",
		paraClass: "",
	},
];

export const DetailInfo1 = ({ classes }) => {
	return (
		<Row className={classes}>
			<DetailInfo cardData={cardData}>
				<img
					src={DetainInfoImage}
					alt="Detail Info"
					className="img-fluid"
				/>
			</DetailInfo>
		</Row>
	);
};
