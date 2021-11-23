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
		HeadingText: "Large volumes of data:",
		paraText: "We process large volumes of data efficiently with the help our AI tools and algorithms.",
		icon: Process,
	},
	{
		HeadingText: "24/7 Support",
		paraText: "We love supporting you round the clock. For any query, we are only a message away.",
		icon: technicalSupport ,
	},
	{
		HeadingText: "Pay as you go",
		paraText: "We do not charge any advance fees. Our AI-suite charges you as per your usage.",
		icon: Payment ,
	},
	{
		HeadingText: "Dedicated resources",
		paraText: "If you have a tool of your own and need resources to annotate your dataset, we provide dedicated resources to work only on your project.",
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
