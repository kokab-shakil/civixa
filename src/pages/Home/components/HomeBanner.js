import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Heading from "../../../components/Heading";
import HomeBannerImage from "../../../images/home/HomeBanner.png";
// import Teamcore from "../../../images/home/teamcore.png";
// import Forcast from "../../../images/home/Forcast.png";
// import Tars from "../../../images/home/Tars.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// Logos
import Agunsa from "../../../images/homebanner/agunsa.svg";
import brandLogo from "../../../images/homebanner/brandLog.png";
import Ddindustries from "../../../images/homebanner/ddindustries.svg";
import Forcast from "../../../images/homebanner/forcast.svg";
import Ignous from "../../../images/homebanner/ignous.svg";
import Tars from "../../../images/homebanner/tars.svg";
import Teamcore from "../../../images/homebanner/teamcore.svg";

export default function HomeBanner({ classes }) {
	const history = useHistory();
	return (
		<Row className={classes}>
			<Col xs={12} md={12} lg={6} className={"z-1 py-3 pl-0"}>
				<Heading
					headingClass={
						"text-lg font-weight-900 d-flex flex-wrap homebanner-heading"
					}
					HeadingText={[
						<span >
							Enabling AI
						</span>,
						
						<span className="text-lg font-weight-900 ml-0 ml-md-2 ml-lg-0 homebanner-heading">
							Transformations
						</span>,
					]}
					para
					paraClass={'w-70'}
					paraText={
						"Civixa.ai empowers organisations by providing a combination of pre-requisite services for the training of any AI-model."
					}
				/>
				<Row className="d-flex align-items-start container">
					<CustomButton
						btnSize="md"
						btnColor="green"
						btnText="GET your quote"
						btnClasses=" mb-3 mr-3"
						border="btnBorder"
						btnTextColor="btnTextColor"
						handlebtn={() => history.push("/contact")}
						
					/>
					<div
						className={
							// ""
							"banner-contact-details px-sm-4 px-lg-2 px-md-2 line-height-05"
						}
					>
						<p className={"m-0 line-height-1"}>
							Start annotations with Civixa.ai
						</p>
						<p className="m-0 question">
							Questions?
							<Link className="question-underlined ml-1">
								Contact  sales 
							</Link>
						</p>
					</div>
				</Row>
				<Row className="pt-3 pt-md-5 d-flex flex-column">
					<Col>
						{/* <p className="mb-0 header-banner-logo-text">LOVED BY</p> */}
						<p className="header-banner-logo-text1">
							YOU ARE IN A LOVED COMPANY
						</p>
					</Col>
					<Col >
						<img
									src={brandLogo}
									// alt={item.name}
									className="homebanner-logo img-fluid mr-2 mb-2"
								/>
						{/* {logos.map((item, key) => {
							return (
								<img
									key={key}
									src={item.image}
									alt={item.name}
									className="homebanner-logo img-fluid mr-2 mb-2"
								/>
							);
						})} */}
					</Col>
				</Row>
			</Col>
			<Col xs={12} md={6} className={"p-0 d-none d-lg-block"}>
				<img
					src={HomeBannerImage}
					alt="Home Banner"
					className={"w-100 h-100"}
				/>
			</Col>
		</Row>
	);
}

const logos = [
	{
		name: "Ddindustries",
		image: Ddindustries,
	},
	{
		name: "Agunsa",
		image: Agunsa,
	},
	{
		name: "Forcast",
		image: Forcast,
	},
	{
		name: "Ignous",
		image: Ignous,
	},
	{
		name: "Tars",
		image: Tars,
	},
	{
		name: "Teamcore",
		image: Teamcore,
	},
];
