import React from "react";
import Banner from "../../components/Banner";
import CustomSection from "../../components/CustomSection";
import HomeBanner from "./components/HomeBanner";
import PreTrainedModels from "./components/PreTrainedModels";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SmallBanner from "./components/SmallBanner";
import OurServices from "./components/OurServices";
import { OurWork } from "./components/OurWork";
import { HappyClient } from "./components/HappyClient";
import "./Home.css";
import useWindowSize from "../../WindowSize";
// import { ServicesCarousel } from "./components/newcomponents/ServicesCarousel";

export default function Home({ handleHeaderColor }) {
	const [width] = useWindowSize();

	handleHeaderColor("");
	const commonClasses =
		"d-flex align-items-center justify-content-center h-100";
	return (
		<>
			<CustomSection height="h-auto " bgColor="white" classes={"p-0"}>
				<HomeBanner
					classes={`${commonClasses} m-0 paddingStop pb-0`}
				/>
			</CustomSection>
			<CustomSection
				height="h-auto"
				bgColor="bg-lightgreen"
				// classes={""}
			>
				<SectionOne
					classes={`d-flex align-items-stretch justify-content-center h-100 padding-all`}
				/>
			</CustomSection>
			<CustomSection height="h-auto" bgColor="white" classes="">
				<OurServices
					classes={`${commonClasses} ${
						width < 740 ? "paddingStop padding-y" : "padding-all"
					} flex-wrap flex-column`}
				/>
			</CustomSection>
			<CustomSection
				height="h-auto"
				bgColor="bg-lightgreen"
				classes={"paddingCv"}
			>
				<SectionFour classes={`${commonClasses} padding-all`} />
			</CustomSection>
			<CustomSection height="h-auto" bgColor="white" classes="">
				<PreTrainedModels
					classes={`d-flex align-items-stretch justify-content-between h-100 padding-all`}
				/>
			</CustomSection>
			<CustomSection
				height="h-auto"
				bgColor="bg-prussian-blue"
				classes="small-banner"
			>
				<SmallBanner classes={`${commonClasses} padding-x py-4`} />
			</CustomSection>
			<CustomSection height="h-auto" bgColor="bg-lightgreen" classes="">
				<OurWork classes={`${commonClasses} padding-all`} />
			</CustomSection>
			{/* <CustomSection height="h-auto" bgColor="white" classes="">
				<HappyClient classes={`${commonClasses} padding-all`} />
			</CustomSection> */}
		</>
	);
}
