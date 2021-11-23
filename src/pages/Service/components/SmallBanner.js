import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Heading from "../../../components/Heading";
import Civixa from "../../../images/civixa.svg";

export const SmallBanner = ({ classes }) => {
	return (
		<Row className={classes}>
			<Col className='d-none d-md-flex'  md={4} sm={12} xs={12}>
				<Heading
					iconBefore
					icon={Civixa}
					top
					iconClass="w-86"
					headingClass="font-weight-bold text-center py-2 w-70"
					HeadingText="Annotation platform for videos"
				/>
			</Col>
			<Col md={8} sm={12} xs={12}>
				<Heading
					headingClass="font-weight-900 text-left"
					HeadingText="Accelerate the Development of AI Applications"
					para
					paraText="Develop highly accurate AI models with the help of our data collection and data annotation services. Request a demo now for a complete tour of our processes."
				>
					<CustomButton
						btnText="REQUEST DEMO"
						btnColor="green"
						btnClasses="text-white"
					/>
				</Heading>
			</Col>
		</Row>
	);
};
