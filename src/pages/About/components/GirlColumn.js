import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CustomCard from "../../../components/CustomCard/CustomCard";
import Heading from "../../../components/Heading";
import houseWife from "../images/housewife.png";
import bound from "../images/bound.png";
import low from "../images/lowWage.png";
import disable from "../images/disable.png";
import student from "../images/student.png";

const data = [
	{
		paraText: "We love supporting",
		icon: houseWife,
	},
	{
		paraText: "We love supporting",
		icon: bound ,
	},
	{
		paraText: "We love supporting",
		icon: low ,
	},
	{
		paraText: "We love supporting",
		icon: disable,
	},
	{
		paraText: "We love supporting",
		icon: student,
	},
];

export const GirlColumn = ({ classes }) => {
	return (
		<Row className={`${classes} pricingServices`}>
				<Container>
					<Row className="p-xl-0 p-lg-3 justify-content-center justify-content-lg-between">
						{data.map((item) => {
							return (
								<Col
									xs={6}
									sm={6}
									md={4}
									lg={'auto'}
									className="p-0"
								>
									<Card.Body className="p-0 px-md-2">
										<Heading
											icon={item.icon}
											iconClass="pb-0"
											iconBefore
											iconBeforeClass="align-items-center"
											top
											// headingClass="text-small font-weight-900 text-center text-md-left mb-0"
											// HeadingText={item.HeadingText}
											para
											paraClass="text-prussian-blue text-center "
											paraText={item.paraText}
										/>
									</Card.Body>
								</Col>
							);
						})}
					</Row>
				</Container>
		</Row>
	);
};
