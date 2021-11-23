import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import Heading from "../../../components/Heading";
import { CovidCarrousel } from "./common/CovidCarrousel";
import { CovidDemoCarousel } from "./common/CovidDemoCarousel";

export const CovidDemo = ({ classes }) => {
	return (
		<Row className={classes}>
			<Col xs={12} md={12}>
				<Heading
					HeadingText="VIEW DEMO"
					headingClass="text-center"
					para
					paraText="Protect your workers so you can maintain business operations"
					paraClass="text-center"
				/>
			</Col>
			<Col xs={12} md={12} className="covidTab">
				<CovidDemoCarousel />
				{/*Carousel Change*/}
				
			</Col>
		</Row>
	);
};
