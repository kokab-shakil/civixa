import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Heading from "../../../components/Heading";
import Civixa from "../../../images/civixa.svg";

export const SmallBanner = ({ classes }) => {
	return (
		<Row className={classes}>
			<Col md={4} sm={12} xs={12}>
				<Heading
					iconBefore
					icon={Civixa}
					top
					iconClass="w-86"
					headingClass="font-weight-600 text-center py-2 w-100 w-md-50"
					HeadingText="How we help"
				/>
			</Col>
			<Col md={8} sm={12} xs={12}>
				<Heading
					headingClass="font-weight-900"
					HeadingText="Protect your workers and maintain business operations"
					para
					paraText="We provide assisted data collection, labeling and, model training with the help of our AI tools and ML algorithms. We have a rich interface of APIs for our clients to push huge volumes of data to our system and integrate results back to their systems."
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
