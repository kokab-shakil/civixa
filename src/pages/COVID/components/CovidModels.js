import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomCard from "../../../components/CustomCard/CustomCard";
import Heading from "../../../components/Heading";
import { SideIcon } from "../../../components/SideIcon/SideIcon";
import FaceMask from "../../../images/face-mask-3.png";
import KeepDistance from "../../../images/keep-distance.png";

import RepeatGrid from "../../../images/RepeatGrid.svg";

const data = [
	{
		headingText: "Social distancing",
		paraText:
			"With the help of our AI-model, we detect if visitors are maintaining the social distance on a particular site. We deploy our model on your on-site systems so you can track if SOPs are being followed at a particular location. We provide an insightful dashboard of informative",
		icon: KeepDistance,
	},
	{
		headingText: "Mask detection",
		paraText:
			"Mask detection is the most significant SOP. People are still not used to wearing masks and often take it off or wear it incorrectly. With the help of our AI-model, we provide insights of such cases for the management. With our detailed dashboard, companies can track individual location and improve the management",
		icon: FaceMask,
	},
];

export const CovidModels = ({ classes }) => {
	return (
		<Row className={classes}>
			<Col xs={12} md={12}>
				<Heading
					headingClass="text-center font-weight-900 text-uppercase mb-0"
					HeadingText="Our COVID19 Models"
					para
					paraText="Protect your workers so you can maintain business operations"
					paraClass="w-100 text-center"
				/>
			</Col>
			<Row className="position-relative mt-5">
				<img src={RepeatGrid} alt="dots" className="bottomLeftDots" />
				<img src={RepeatGrid} alt="dots" className="topRightDots" />
				{data.map((item) => {
					return (
						<Col xs={12} md={6} className="pb-4">
							<CustomCard CardClasses="pl-3 pr-2 py-3 covidModelsCard">
								<SideIcon
									iconHeading="d-flex flex-column px-2"
									icon={item.icon}
									iconClass="img-fluid icon mx-3"
									altText="sideIcon"
									HeadingText={item.headingText}
									headingClass="mt-2 mt-lg-0 line-height-7"
									para
									paraText={item.paraText}
									paraClass=""
									alignLeft="align-items-start"
								>
									<CustomButton
										btnText="View Demo"
										btnSize="small"
										btnClasses="mt-2 text-prussian-blue font-weight-700"
										btnColor="green"
									/>
								</SideIcon>
							</CustomCard>
						</Col>
					);
				})}
			</Row>
		</Row>
	);
};
