import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Heading from "../../../components/Heading";
import tool from "../../../images/tool.png";

export const ServiceBanner = ({ classes }) => {
	return (
		<Row className={classes}>
			<Col md={4} sm={4} xs={3} className="text-md-center p-0">
				<img src={tool} alt="Tool" className='serviceSideBanner' />
			</Col>
			<Col md={8} sm={8} xs={9}>
				<Heading
					headingClass="text-green text-lg text-sm font-weight-bold top-heading"
					HeadingText="Annotations"
					para
					paraClass="text-white"
					paraText="One platform for all sort of annotation"
					topHeading
					topHeadingText="CIVIXA"
					topHeadingClass="text-green-dark top-heading-bottom"
				>
					<div>
						<CustomButton
							btnClasses="text-white"
							btnColor="green mr-2"
							btnText="REQUEST DEMO"
						/>
						<CustomButton
							btnClasses="text-prussian-blue"
							btnColor="white"
							btnText="REQUEST DEMO"
						/>
					</div>
				</Heading>
			</Col>
		</Row>
	);
};
