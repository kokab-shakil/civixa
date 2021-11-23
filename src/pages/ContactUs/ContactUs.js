import React from "react";
import CustomSection from "../../components/CustomSection";
import useWindowSize from "../../WindowSize";
import { ContactBanner } from "./components/ContactBanner";
import { ContactDetails } from "./components/ContactDetails";
import "./ContactUs.css";

const ContactUs = ({ handleHeaderColor }) => {
	const [width] = useWindowSize();
	handleHeaderColor("white");
	const commonClasses =
		"d-flex align-items-center justify-content-center h-100";
	return (
		<>
			<CustomSection height="h-auto" bgColor="white" classes="">
				<ContactBanner
					classes={`${commonClasses} flex-column padding-pricing`}
				/>
			</CustomSection>
			<CustomSection height="h-auto" bgColor="white" classes="">
				<ContactDetails
					classes={`${commonClasses} postion-relative padding-y-contact ${
						width > 991 ? "padding-right" : ""
					}`}
				/>
			</CustomSection>
		</>
	);
};

export default ContactUs;
