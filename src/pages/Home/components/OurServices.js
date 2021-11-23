import React from "react";
import { Row } from "react-bootstrap";
import ParentTab from "../../../components/CustomTabs/ParentTab";
import Heading from "../../../components/Heading";
import { ServiceCarousel } from "../../../components/ItemCarousel/ServiceCarousel";
import { ServicesCarousel } from "./newcomponents/ServicesCarousel";

export default function SectionTwo({ classes }) {
	return (
		<Row className={classes}>
			<Heading
				headingClass="font-weight-900 xs-fontSize-boldHeading d-flex align-items-center justify-content-center  flex-md-row "
				HeadingText={[
					"Behold Our",
					<span className="position-relative">
						<span className="ml-2 underlined">Services</span>
					</span>,
				]}
				para
				paraClass="w-lg-80 text-center "
				paraText="Our annotation services are personalised with your business needs to help you gain a competitive edge."

			/>
			<ServicesCarousel />
			{/* {width > 768 ? <ParentTab /> : <ServiceCarousel />} */}
		</Row>
	);
}
