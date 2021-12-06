import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CustomCard from "../../../components/CustomCard/CustomCard";
import Heading from "../../../components/Heading";
import Process from "../images/process.svg";
import Payment from "../images/payment.svg";
import Target from "../images/target.svg";
import technicalSupport from "../images/technical-support.svg";

const data = [
	{
		HeadingText: "Females employed",
		paraText: "We love supporting you. Any way you choose.",
		icon: Process,
	},
	{
		HeadingText: "Differently abled",
		paraText: "We love supporting you. Any way you choose.",
		icon: technicalSupport ,
	},
	{
		HeadingText: "Resources trained",
		paraText: "We love supporting you. Any way you choose.",
		icon: Payment ,
	},
	{
		HeadingText: "Hours training",
		paraText: "We love supporting you. Any way you choose.",
		icon: Target,
	},
];

export const SpecialServices = ({ classes }) => {
	return (
		<Row className={`${classes} pricingServices`}>
			<Card CardClasses="w-auto">
				<Container>
					<Row className="p-xl-3 p-lg-3">
						{data.map((item) => {
							return (
								<Col
									xs={12}
									md={6}
									lg={3}
									// className="p-0 p-md-4"
								>
									<Card.Body>
										<Heading
											icon={item.icon}
											iconClass="pb-4"
											iconBefore
											iconBeforeClass="align-items-md-start"
											top
											headingClass="text-small font-weight-900 text-center text-md-left mb-0"
											HeadingText={item.HeadingText}
											para
											paraClass="text-prussian-blue text-center text-md-left"
											paraText={item.paraText}
										/>
									</Card.Body>
								</Col>
							);
						})}
					</Row>
				</Container>
			</Card>
		</Row>
	);
};
