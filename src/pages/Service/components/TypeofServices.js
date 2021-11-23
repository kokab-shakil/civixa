import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import Typeofserviceimage from "../../../images/typeofservice.png";

import { ServiceServicesCarousel } from "../newComponents/ServiceServicesCarousel";

export const TypeofServices = ({ classes }) => {
	return (
		<Row className={classes}>
			<Col md={12} sm={12} xs={12} className="p-0">
				<ServiceServicesCarousel />
			</Col>
		</Row>
	);
};
