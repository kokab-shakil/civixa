import React from "react";
import { Col, Row ,Container,Card} from "react-bootstrap";
import Heading from "../../../components/Heading";
import car from "../../../images/car.svg";
import "./TabData.css";


export default function TabData({
	cardImage,
	headingText,
	paraText,
	founded,
	lead,
    experience,
	cardClass,
	twoButton,
	list
}) {
	const mail = (e) => {
		 window.location = "mailto:hello@civixa.com";
                          e.preventDefault();
	}
	const Classes = "d-flex align-items-center justify-content-center";
	return (
		<Row className={`${Classes} pricingServices`}>
				<Container>
					<Row className="p-xl-0 p-lg-3 justify-content-between">
				
								<Col
									xs={12}
									md={6}
									lg={'auto'}
									className="p-0"
								>
									<Card.Body className="p-0">
										<Heading
											icon={cardImage}
											iconClass="pb-0"
											iconBefore
											iconBeforeClass="align-items-center"
											top
											headingClass="text-small font-weight-900 text-center text-md-left mb-0"
											HeadingText={headingText}
											para
											paraClass="text-prussian-blue text-center mb-0 "
											paraText={paraText}
											infoClass='mb-0 text-center'
											founded={founded}
                                            experience={experience}
											lead={lead}
										/>
									</Card.Body>
								</Col>
							
					</Row>
				</Container>
		</Row>
		
		// <Row className={"d-flex justify-content-center m-0"}>
		// 	<div
		// 		className={`card p-0 d-flex flex-wrap flex-row mb-3 ${
		// 			cardClass && cardClass
		// 		}`}
		// 	>
		// 		<Col xs={12} md={6} className="p-0">
		// 			<img
		// 				src={cardImage ? cardImage : car}
		// 				className="w-100 image-fit"
		// 				alt="car"
		// 			/>
		// 		</Col>
		// 		<Col xs={12} md={6} className="tab-data-content-container">
		// 			<Heading
		// 				subHeading
		// 				headingClass="sub-heading"
		// 				HeadingText={headingText}
		// 				para
		// 				paraText={paraText}
		// 				paraClass="mb-0"
		// 			/>
				
		// 		</Col>
		// 	</div>
			
		// </Row>
	);
}
