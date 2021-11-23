import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../../components/Heading";
import { SideIcon } from "../../../components/SideIcon/SideIcon";
import Enterprise from "../images/Enterprise.svg";
import tick from "../../../images/tick.svg";
import CustomButton from "../../../components/CustomButton/CustomButton";

import box from "../TabIcons/box.svg";
import classification from "../TabIcons/classification.svg";
import Cuboid from "../TabIcons/Cuboid.svg";
import point from "../TabIcons/point.svg";
import Polygons from "../TabIcons/Polygons.svg";
import polylines from "../TabIcons/polylines.svg";
import segmentation from "../TabIcons/segmentation.svg";
import Transcription from "../TabIcons/Transcription.svg";
import { useHistory } from "react-router-dom";
const data = [
	"Custom pricing for high volumes",
	"Dedicated account managers",
	"24/7 support",
	"Custom workflows",
];

const packagesDetails = [
	{
		bg: "bg-lightgray",
		icon: classification,
		headingText: "Classification",
		package: "$0.01/annotation",
	},
	{
		bg: "bg-white",
		icon: box,
		headingText: "Bounding Box",
		package: "$0.05/annotation",
	},
	{
		bg: "bg-lightgray",
		icon: segmentation,
		headingText: "Segmentation",
		package: "Custom pricing",
	},
	{
		bg: "bg-white",
		icon: point,
		headingText: "Point",
		package: "$0.03/annotation",
	},
	// {
	// 	bg: "bg-lightgray",
	// 	icon: Cuboid,
	// 	headingText: "Cuboid",
	// 	package: "$0.05/Image + $0.05/Point",
	// },
	{
		bg: "bg-white",
		icon: polylines,
		headingText: "Polylines",
		package: "$0.03/annotation",
	},
	{
		bg: "bg-lightgray",
		icon: Polygons,
		headingText: "Polygons",
		package: "$0.1/annotation",
	},
	// {
	// 	bg: "bg-white",
	// 	icon: Transcription,
	// 	headingText: "Transcription",
	// 	package: "$0.05/Invoice",
	// },
];

export const Packages = ({ classes }) => {
	const history = useHistory();
	return (
		<Row className={`pricing ${classes}`}>
			<Container className="bg-prussian-blue m-0 py-2">
				<Row className="px-2">
					<Col xs={12} md={6} className="bg-white pricing-table ">
						<Row className="align-items-center justify-content-center">
							<Col xs={12} className="px-0 mb-3">
								<Heading
									HeadingContainer="pricing-table-heading-container w-100 text-center py-3"
									headingClass="pricing-table-heading"
									HeadingText="INTEGRATED"
									para
									paraClass="w-60 text-center pt-2 m-auto"
									paraText="Protect your workers so you can maintain business operations"
								/>
							</Col>
							{packagesDetails.map((items) => {
								return (
									<Container fluid className={items.bg}>
										<Row className="justify-content-center align-items-center py-3">
											<Col xs={6} md={5}>
												<Heading
													// HeadingContainer="justify-content-md-start"
													iconBefore
													iconBeforeClass="justify-content-md-start ml-0 ml-xl-5"
													icon={items.icon}
													headingClass="text-small font-weight-600 mb-0 pl-2"
													HeadingText={
														items.headingText
													}
												/>
											</Col>
											<Col xs={6} md={7}>
												<Heading
													headingClass="text-small font-weight-600 mb-0 text-break"
													HeadingText={items.package}
												/>
											</Col>
										</Row>
									</Container>
								);
							})}
							<CustomButton
								btnText="GET STARTED IN MINUTES"
								btnColor="green"
								btnClasses="d-flex align-items-center justify-content-center text-prussian-blue py-4 pricing-package-button mt-4 w-100"
								btnSize="lg btn-block"
								marginBottom="mb-0"
								handlebtn={() => history.push("/contact")}
							/>
						</Row>
					</Col>
					<Col
						xs={12}
						md={6}
						className="d-flex flex-column justify-content-sm-between package-details-container px-0"
					>
						<div className="package-details d-flex flex-column">
							<SideIcon
								icon={Enterprise}
								iconClass="pr-3"
								// sideIconClass=""
								iconHeading=""
								alignLg="align-items-lg-center"
								sideIconClass="justify-content-center py-3 package-details-heading"
								HeadingText="Enterprise"
								headingClass="text-white mb-0 package-heading text-uppercase"
							/>
							<div className="m-auto pt-5 px-3 px-sm-0">
								{data.map((item) => {
									return (
										<Heading
											iconBefore
											icon={tick}
											headingClass="text-small font-weight-normal pl-3 text-white"
											iconBeforeClass="pb-3"
											HeadingText={item}
										/>
									);
								})}
							</div>
						</div>
						<div className="d-flex justify-content-center pt-5">
							<CustomButton
								btnText="GET IN TOUCH"
								btnClasses="text-prussian-blue package-btn"
								btnColor="green"
								handlebtn={() => history.push("/contact")}
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</Row>
	);
};
