import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Heading from "../../../components/Heading";

import InfiniteCarousel from "react-leaf-carousel";
import { CustomCarousel } from "../../../components/CustomCarousel/CustomCarousel";
import car2 from "../../../images/car2.png";
import CustomCard from "../../../components/CustomCard/CustomCard";
import Manychat from "../../../images/Manychat.svg";
import facebook from "../../../images/facebook.svg";
import { LogoCarousel } from "../../../components/ItemCarousel/LogoCarousel";
import TestCarousel from "../../../components/ItemCarousel/TestCarousel";
// import { LogoCarousel } from "./newcomponents/LogoCarousel";

export const HappyClient = ({ classes }) => {
	return (
		<Row className={classes}>
			<Col xs={12}>
				<Heading
					headingClass="xs-fontSize-boldHeading d-flex justify-content-center"
					HeadingText={[
						"Our",
						<span className="position-relative">
							<span className="px-2 underlined">Happy</span>
						</span>,
						"Clients",
					]}
					para
					paraText="We are trusted by leading machine learning teams for the training of their AI-models"
					paraClass="text-center"
				/>
			</Col>
			<Col xs={12} className="py-3">
				<LogoCarousel />
				{/* <LogoCarousel /> */}
			</Col>
		</Row>
	);
};
