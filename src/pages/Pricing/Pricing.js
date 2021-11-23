import React from "react";
import CustomSection from "../../components/CustomSection";
import useWindowSize from "../../WindowSize";
import { Packages } from "./components/Packages";
import { PricingBanner } from "./components/PricingBanner";
import { SpecialServices } from "./components/SpecialServices";
import "./Pricing.css";

const Pricing = ({ handleHeaderColor }) => {
	handleHeaderColor("prussian-blue");
	const commonClasses = "d-flex align-items-center justify-content-center";

	const [width] = useWindowSize();

	return (
		<>
			<CustomSection
				height="pricingBanner"
				bgColor="bg-prussian-blue"
				classes=""
			>
				<PricingBanner
					classes={`${commonClasses} flex-column padding-pricing `}
				/>
			</CustomSection>
			<CustomSection
				height="h-auto"
				bgColor="white"
				classes="pricingServiceCard"
			>
				<SpecialServices classes={`${commonClasses} padding-service`} />
			</CustomSection>
			<CustomSection height="h-auto" bgColor="white" classes="">
				<Packages classes={`${commonClasses}  padding-service`} />
			</CustomSection>
		</>
	);
};

export default Pricing;
