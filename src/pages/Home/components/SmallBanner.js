import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import useWindowSize from "../../../WindowSize";
import { useHistory } from "react-router-dom";

export default function SmallBanner({ classes }) {
	const [width] = useWindowSize();
	const history = useHistory();
	const mail = (e) => {
		 window.location = "mailto:hello@civixa.com";
                          e.preventDefault();
	}
	return (
		<Row className={classes}>
			<Col xs={12} md={7} className="p-0">
				{width >= 1165 ? (
					<h1 className="d-flex text-white font-weight-900 text-medium text-center text-md-left">
						<span>Make</span>
						<span className="position-relative pl-2">
							<span className="pr-2 underlined">Civixa</span>
						</span>
						<span>your competitive advantage</span>
					</h1>
				) : (
					<h1 className="d-flex text-white font-weight-900 xs-fontSize-boldHeading text-medium text-center text-md-left">
						Make Civixa your competative advantage
					</h1>
				)}
				<p className="text-white w-70 line-height1-1 text-center text-md-left">
					It’s easy to get started. Reachout to us and our
					representative will get in touch with you.
				</p>
				{/* <Heading
					headingClass="text-white font-weight-900 text-medium text-left"
					HeadingText={[
						<span className="position-relative">
							<span className="pr-2 underlined-bottom">
								Make Civixa
							</span>
						</span>,
						"your competitive advantage",
					]}
					para
					paraClass="text-white w-70"
					paraText="It’s easy to get started. Reachout to us and our representative will get in touch with you."
				/> */}
			</Col>
			<Col
				xs={12}
				md={5}
				className={
					"p-md-0 d-flex justify-content-start justify-content-md-center"
				}
			>
				<Row>
					<Col className="px-md-1 text-center text-md-center p-0">
						<CustomButton
							btnColor="green"
							btnClasses="text-white mr-1 "
							btnText="Get A Quote"
							handlebtn={() => history.push("/contact")}
						/>
					</Col>
					<Col className="px-md-1 text-center text-md-center p-0">
						<CustomButton
							btnColor="white"
							btnClasses="text-prussian-blue"
							btnText="Request A Demo"
							handlebtn={mail}
						/>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}
