import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomCard from "../../../components/CustomCard/CustomCard";
import Accuracy from "../../../images/accuracy.png";
import manPower from "../../../images/manPower.png";
import assited from "../../../images/assisted.png";

const data = [
	{
		icon: assited,
		HeadingText: "Precision in Annotation",
		paraText:
			"We understand that pixel-perfect data annotation services are the foundation of any efficiently trained AI model. We make sure that the resources working on your data are well trained.",
	},
	{
		icon: manPower,
		HeadingText: "50% less manpower",
		paraText:
			"Due to our intelligent AI-tools and algorithms, we provide both semi-automated and fully-automated annotations. We are one of the data labeling companies who can reduce the required manpower to 50%.",
	},
	{
		icon: Accuracy,
		HeadingText: "99.99% accuracy",
		paraText:
			"We maintain high-quality standards for our AI algorithms. Once a data set is processed, it is validated by domain experts through random sampling to weed out any imperfections.With our dedicated efforts, we increase efficiency by up to 99.99%.",
	},
];

export const ServiceCard = ({ classes }) => {
	return (
		<Row className={classes}>
			<Col
				xs={12}
				sm={12}
				className="d-flex flex-wrap justify-content-center px-xs-0"
			>
				{data.map((item) => {
					return (
						<CustomCard
							CardClasses="serviceCard d-flex flex-column align-items-start justify-content-around mr-md-3 mb-4 px-3 px-md-4 py-3"
							icon={item.icon}
							iconClass="pt-4  iconWidth"
							HeadingText={item.HeadingText}
							headingClass="mt-2 serviceCardHeading"
							para
							paraText={item.paraText}
							paraClass="heightpara"
						/>
					);
				})}
			</Col>
		</Row>
	);
};
