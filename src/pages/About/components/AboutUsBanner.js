import React from "react";
import { Row } from "react-bootstrap";
import Heading from "../../../components/Heading";

export const AboutBanner = ({ classes }) => {
	const mail = (e) => {
		 window.location = "mailto:hello@civixa.com";
                          e.preventDefault();
	}
	return (
		<Row className={classes}>
			<Heading
				headingClass="text-white font-weight-900"
				HeadingText="Who we are?"
				para
				paraText="Our mission is to empower women, students, and all such people who are looking for an earning opportunity. We have trained them using proper initiatives so they can find their interest in AI as well. Our resources are well-equipped to provide training as well as work with businesses to maneuver AI into the local industry. "
				paraClass="text-white text-center w-70"
			>
			
			</Heading>
		</Row>
	);
};
