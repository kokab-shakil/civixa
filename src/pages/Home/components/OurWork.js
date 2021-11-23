import React from "react";
import { Col, Row } from "react-bootstrap";
import Heading from "../../../components/Heading";
import repeatGrid from "../../../images/RepeatGrid.svg";
import ourworkcar from "../../../images/homebanner/speakSide.png";
import { SideIcon } from "../../../components/SideIcon/SideIcon";
import sideicon from "../../../images/sideicon.svg";

// Icons
import unfit from "../Icons/unfit.png";
import unLabel from "../Icons/unLabel.png";
import missFrame from "../Icons/missFrane.png";
import handle from "../Icons/handle.png";
import overlap from "../Icons/overLap.png";
import round from "../Icons/roundObject.png";

// import WorkAccuracy from "../Icons/work-accuracy.svg";
import Excellence from "../../../images/annotations/excellence.png";
import Transparency from "../../../images/annotations/transparency.png";
import  WorkAccuracy from "../../../images/annotations/acc.png";
// import Transparency from "../Icons/transparency.svg";

export const OurWork = ({ classes }) => {
	return (
		<Row className={classes}>
			<Heading
				headingClass=" xs-fontSize-boldHeading  font-weight-900 d-flex  flex-md-row align-items-center justify-content-center"
				HeadingText={[
					<span className="position-relative pr-1 m-md-0">
						<span className=" underlined">Our Work </span>
					</span>,
					" Speaks For Itself",
				]}
				HeadingContainer="w-100"
				para
				paraClass="pt-2 w-70 text-center paddingCv  "
				paraText="All of our resources for data labeling services are in house. With our ML-assisted tools, we provide 99.99% accuracy while maintaining high-quality standards using our built-in QC workflows and tools"
			/>
			<Row className="pt-4 pb-md-5 zindex0 d-none d-md-flex">
				<Col xs={12} md={6} className={"position-relative"}>
					<img
						src={ourworkcar}
						className={"img-fluid h-100 object-cover zindex1"}
						alt="data-label-web"
					></img>
					<img
						className={"hide-grid"}
						src={repeatGrid}
						alt="data-label-web"
					/>
				</Col>
				<Col
					xs={12}
					md={6}
					className={
						"d-flex align-items-center justify-content-center"
					}
				>
					<Row>
						<Col xs={6} className="pb-4">
							<SideIcon
								alignLg="align-items-lg-center"
								iconHeading="d-flex flex-column pl-2"
								icon={unfit}
								altText="sideIcon"
								HeadingText="Incorrect fit"
								headingClass="text-normal text-center text-lg-left font-weight-600 mb-0"
								para
								// paraText="97.02%"
								paraClass="line-height-1 text-xs text-center text-lg-left font-weight-bold mb-0 text-danger"
							/>
						</Col>
						<Col xs={6} className="pb-4">
							<SideIcon
								alignLg="align-items-lg-center"
								iconHeading="d-flex flex-column pl-2"
								icon={unLabel}
								altText="sideIcon"
								HeadingText="Incorrect label"
								headingClass="text-normal text-center text-lg-left font-weight-600 mb-0"
								para
								// paraText="99.7%"
								paraClass="line-height-1 text-xs text-center text-lg-left font-weight-bold mb-0 text-danger"
							/>
						</Col>
						<Col xs={6} className="pb-4">
							<SideIcon
								alignLg="align-items-lg-center"
								iconHeading="d-flex flex-column pl-2"
								icon={round}
								altText="sideIcon"
								HeadingText="Object missed"
								headingClass="text-normal text-center text-lg-left font-weight-600 mb-0"
								para
								// paraText="93.02%"
								paraClass="line-height-1 text-xs text-center text-lg-left font-weight-bold mb-0 text-danger"
							/>
						</Col>
						<Col xs={6} className="pb-4">
							<SideIcon
								alignLg="align-items-lg-center"
								iconHeading="d-flex flex-column pl-2"
								icon={missFrame}
								altText="sideIcon"
								HeadingText="Frames missed"
								headingClass="text-normal text-center text-lg-left font-weight-600 mb-0"
								para
								// paraText="2/42"
								paraClass="line-height-1 text-xs text-center text-lg-left font-weight-bold mb-0 text-gray"
							/>
						</Col>
						<Col xs={6} className="pb-4">
							<SideIcon
								alignLg="align-items-lg-center"
								iconHeading="d-flex flex-column pl-2"
								icon={handle}
								altText="sideIcon"
								HeadingText="Occlusion handling"
								headingClass="text-normal text-center text-lg-left font-weight-600 mb-0"
								para
								// paraText="1/42"
								paraClass="line-height-1 text-xs text-center text-lg-left font-weight-bold mb-0 text-gray"
							/>
						</Col>
						<Col xs={6} className="pb-4">
							<SideIcon
								alignLg="align-items-lg-center"
								iconHeading="d-flex flex-column pl-2"
								icon={overlap}
								altText="sideIcon"
								HeadingText="Overlapping annotations"
								headingClass="text-normal text-center text-lg-left font-weight-600 mb-0"
								para
								// paraText="41/42"
								paraClass="line-height-1 text-xs text-center text-lg-left font-weight-bold mb-0 text-gray"
							/>
						</Col>
					</Row>
				</Col>
			</Row>
			<div className="container">
			<Row className="pt-5 ">
				<Col xs={12} sm={4} md={4} lg={4} >
					<SideIcon
						iconHeading="d-flex flex-column align-items-lg-start align-items-center pl-2"
						icon={Transparency}
						iconClass="mb-auto pb-3 pr-md-2"
						altText="sideIcon"
						HeadingText="TRANSPARENCY"
						headingClass="xs-fontSize-boldHeading2"
						para
						paraText="We keep our whole process transparent by keeping you involved in each step of the process."
						paraClass="text-center text-lg-left"
					/>
				</Col>
				<Col xs={12} sm={4} md={4} lg={4} >
					<SideIcon
						iconHeading="d-flex flex-column align-items-lg-start align-items-center pl-2"
						icon={WorkAccuracy}
						iconClass="mb-auto pb-3 pr-md-2"
						altText="sideIcon"
						HeadingText="ACCURACY"
						headingClass="xs-fontSize-boldHeading2"
						para
						paraText="We provide machine learning backed AI-tools quality checks for annotating huge volumes of data efficiently."
						paraClass="text-center text-lg-left"
					/>
				</Col>
				<Col xs={12} sm={4} md={4} lg={4}>
					<SideIcon
						iconHeading="d-flex flex-column align-items-lg-start align-items-center pl-2"
						icon={Excellence}
						iconClass="mb-auto pb-3 pr-md-2"
						altText="sideIcon"
						HeadingText="FLEXIBILITY"
						headingClass="xs-fontSize-boldHeading2"
						para
						paraText="We are extremely flexible as far as the file format (e.g. jpeg, png,avi,mp4) is concerned"
						paraClass="text-center text-lg-left"
					/>
				</Col>
			</Row>
			</div>
		</Row>
	);
};
