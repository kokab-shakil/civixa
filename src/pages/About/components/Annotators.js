import React from "react";
import { Row } from "react-bootstrap";
import ParentTab from "../../../components/CustomTabs/ParentTab";
import Heading from "../../../components/Heading";

import { TeamCarousel } from "./TeamCarousel";

export default function Annotators({ classes }) {
    //  const humbleImages=[nividia,nest,chile,pasha]
	return (
		<Row className={classes}>
			<Heading
				headingClass="font-weight-900 xs-fontSize-boldHeading d-flex align-items-center justify-content-center  flex-md-row "
				HeadingText={[
					"Meet Our Army Of Annotators",
					
				]}
				para
				paraClass="w-md-50 w-lg-50 w-xlg-60 text-center "
				paraText="We’ve also earned a few accolades. Sure, rewards and recognition are nice, but we don’t do it for the bragging rights."

            />
            
			{/* {width > 768 ? <ParentTab /> : <ServiceCarousel />} */}
		</Row>
	);
}
