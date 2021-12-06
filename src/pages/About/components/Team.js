import React from "react";
import { Row } from "react-bootstrap";
import ParentTab from "../../../components/CustomTabs/ParentTab";
import Heading from "../../../components/Heading";

import { TeamCarousel } from "./TeamCarousel";

export default function Team({ classes }) {
	return (
		<Row className={classes}>
			<Heading
				headingClass="font-weight-900 xs-fontSize-boldHeading d-flex align-items-center justify-content-center  flex-md-row "
				HeadingText={[
					"Our Team",
					
				]}
				para
				paraClass="w-ms-50 w-lg-50 w-xlg-50 text-center "
				paraText="We have pre developed models which you can plug in your system. Reach out to us 
for more details."

			/>
		<TeamCarousel/>
			{/* {width > 768 ? <ParentTab /> : <ServiceCarousel />} */}
		</Row>
	);
}
