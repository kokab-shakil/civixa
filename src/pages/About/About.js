import React from "react";
import CustomSection from "../../components/CustomSection";
import useWindowSize from "../../WindowSize";
import { AboutBanner } from "./components/AboutUsBanner";
// import { Packages } from "./components/Packages";
// import { PricingBanner } from "./components/PricingBanner";
import { SpecialServices } from "./components/SpecialServices";
import "./components/about.css";
import { Oppoutunity } from "./components/Oppourtunities";
import { GirlColumn } from "./components/GirlColumn";
import Team from "./components/Team";
import Humble from "./components/humble";
import Annotators from "./components/Annotators";

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
				<AboutBanner
					classes={`${commonClasses} flex-column padding-about `}
				/>
			</CustomSection>
			<CustomSection
				height="h-auto"
				bgColor="white"
				classes="pricingServiceCard"
			>
				<SpecialServices classes={`${commonClasses} padding-about`} />
			</CustomSection>
			<CustomSection height="h-auto" bgColor="white" classes="">
				<Oppoutunity 	classes={`${commonClasses} flex-column padding-about py-0 `}/>
			</CustomSection>
			<CustomSection height="h-auto" bgColor="white" classes="">
				<GirlColumn  classes={`${commonClasses} padding-about`}/>
			</CustomSection>
			<CustomSection height="h-auto" bgColor="white" classes="">
				<Team classes={`${commonClasses} padding-about flex-wrap flex-column`}
				/>
			</CustomSection>
			<CustomSection height="h-auto" bgColor="white" classes="">
				
				<Humble classes={`${commonClasses} padding-about pb-0 flex-wrap flex-column`}
				/>
			</CustomSection>
			<CustomSection height="h-auto" bgColor="white" classes="">
				
				<Annotators classes={`${commonClasses} padding-about pt-0 flex-wrap flex-column`}
				/>
			</CustomSection>
		</>
	);
};

export default Pricing;
