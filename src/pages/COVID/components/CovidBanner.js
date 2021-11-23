import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Heading from "../../../components/Heading";
import covid from "../../../images/covid.png";

export const CovidBanner = ({ classes }) => {
	return (
		<Row className={classes}>
			<Col md={4} xs={12} className="text-left text-lg-right pr-5">
				<img src={covid} alt="Covid" />
			</Col>
			<Col md={8} xs={12}>
				<Heading
					headingClass="text-atomic-tangerine text-lg mt-2 mt-md-0 line-height-7 mb-4"
					HeadingText="FOR COMPANIES"
					para
					paraClass="text-white"
					paraText="COVID-19 spreads when an infected individual talks, sneezes, or coughs in close vicinity of people. Wearing a mask and maintaining social distance is the only solution found and implemented all around the globe. The governments have imposed certain SOPs for business around the globe, we are providing COVID-19 Kit to assist the organization in controlling this life-threatening situation and protect their users and workers with the help of computer vision."
				>
					<div>
						<CustomButton
							btnText="Request Demo"
							btnClasses="mr-3 text-white"
							btnColor="atomic-tangerine"
						/>
						<CustomButton
							btnText="Request Demo"
							btnClasses="text-prussian-blue"
							btnColor="white"
						/>
					</div>
				</Heading>
			</Col>
		</Row>
	);
};
