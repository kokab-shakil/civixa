import React from "react";
import { Col, Row } from "react-bootstrap";
import Heading from "../../../components/Heading";
import Dashboard from "../../../images/dashboard.png";
import RepeatGrid from "../../../images/RepeatGrid.svg";

export const DetailDashboard = ({ classes }) => {
	return (
		<Row className={`${classes}`}>
			<Col
				md={12}
				xs={12}
				className="d-flex flex-column justify-content-center postion-relative"
			>
				<Heading
					HeadingText="Detailed Dashboard"
					headingClass="text-center text-uppercase font-weight-900"
				/>
				<img
					src={Dashboard}
					alt="Dashboard"
					className="img-fluid pt-5"
				/>
				<img
					src={RepeatGrid}
					alt="Dots"
					className="detaildashboarddots"
				/>
			</Col>
		</Row>
	);
};
