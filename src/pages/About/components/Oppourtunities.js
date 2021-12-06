import React from "react";
import { Row } from "react-bootstrap";
import Heading from "../../../components/Heading";
import aboutMap from "../images/aboutMap.png";
import "../components/about.css"
export const Oppoutunity = ({ classes }) => {
	const mail = (e) => {
		 window.location = "mailto:hello@civixa.com";
                          e.preventDefault();
	}
	return (
		<Row className={classes}>
			<Heading
				headingClass="text-center pb-2 font-weight-900 about-heading"
				HeadingText="Providing opportunities to the females and differently abled around the world"
				para
				paraText="Our mission is to empower women, students, and all such people who are looking for an earning opportunity. We have trained them using proper initiatives so they can find their interest in AI as well. Our resources are well-equipped to provide training as well as work with businesses to maneuver AI into the local industry. "
				paraClass=" text-center w-70"
			>
                <div className="mappadding">
                    <img src={aboutMap} alt="google-Map" className="w-100" />
                </div>
            
			</Heading>
		</Row>
	);
};
