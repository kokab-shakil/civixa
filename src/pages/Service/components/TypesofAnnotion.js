import React, { useEffect, useState } from "react";
import { Container, Row ,Col} from "react-bootstrap";
import ChildTab from "../../../components/CustomTabs/ChildTab";
import { ResponsiveCarousel } from "../../../components/CustomTabs/ResponsiveCarousel";

// Icons
import BoxBlue from "../../../images/NewCarouselIcons/box-blue.svg";
import ClassificationBlue from "../../../images/NewCarouselIcons/classification-blue.svg";
import KeyPointBlue from "../../../images/NewCarouselIcons/keypoin.svg";
import PointBlue from "../../../images/NewCarouselIcons/point-blue.svg";
import PolygonsBlue from "../../../images/NewCarouselIcons/polygons-blue.svg";
import PolylinesBlue from "../../../images/NewCarouselIcons/polylines.svg";
import SegmentationBlue from "../../../images/NewCarouselIcons/sementation.svg";

// import classification from "../../../images/CarouselIcons/classification.svg";
// import box from "../../../images/CarouselIcons/box.svg";
// import cuboid from "../../../images/CarouselIcons/Cuboid.svg";
// import point from "../../../images/CarouselIcons/point.svg";
// import polygons from "../../../images/CarouselIcons/Polygons.svg";
// import polylines from "../../../images/CarouselIcons/polylines.svg";
// import segmentation from "../../../images/CarouselIcons/segmentation.svg";
// import transcription from "../../../images/CarouselIcons/Transcription.svg";

import TabData from "../../../components/CustomTabs/TabData";
import useWindowSize from "../../../WindowSize";
// import TypeOfService from "../../../images/typeofservice.png";

import segmentation from "../../../images/bigAnnotation/segmentation.png";
import box from "../../../images/bigAnnotation/box.png";
import polylines from "../../../images/bigAnnotation/polylines.png";
import point from "../../../images/bigAnnotation/point.png";
import classification from "../../../images/bigAnnotation/classification.png";
import polygons from "../../../images/bigAnnotation/polygons.png";
import transcription from "../../../images/annotations/bigTranscription.png";

const ResponsiveItem = () => {
	const [selected, setSelected] = useState(1);
	const [childSelected, setChildSelected] = useState(1);
	const [option, selectedOption] = useState(box);

	const handleClick = (e, selected) => {
		const optionValue = childData.find((element) => element.value === e);
		selectedOption(optionValue.img);
		setChildSelected(selected);
	};
	return (
		<>
			<Container>
				<Row className="py-3 d-flex justify-content-start justify-content-sm-center justify-content-md-center">
					{childData.map((item, key) => {
						return (
							<Col xs={4} sm={'auto'}
								key={key}
								className="service-carousel-smallIcon"
							>
								<div
									className={`d-flex fontSize-Annotate py-2 cursor-pointer ${
										childSelected === key
											? "childSelected"
											: "notSelected"
									}`}
									value="box"
									onClick={() => handleClick(item.value, key)}
								>
									<img
										src={item.icon}
										alt="box"
										className={`tabIcon iconAnotate-xs pr-2 ${
											childSelected === key
												? "childSelectedIcon"
												: "notSelectedIcon"
										}`}
									/>
									{item.value}
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
			<div className=" max-width-md">
				<img src={option} className="img-fluid" />
			</div>
		</>
	);
};

export const TypesofAnnotion = ({ classes }) => {
	const width = useWindowSize();
	return (
		<Row className={classes}>
			{width > 992 ? (
				<>
					<ChildTab left />
				</>
			) : (
				<ResponsiveItem />
			)}
		</Row>
	);
};

const childData = [
	{
		value: "Segmentation",
		img: segmentation,
		icon: SegmentationBlue,
	},
	{
		value: "bounding box ",
		img:  box,
		icon: BoxBlue,
	},
	{
		value: "Polylines",
		img: polylines,
		icon: PolylinesBlue,
	},
	{
		value: "Point",
		img: point,
		icon: PointBlue,
	},
	{
		value: "Classification",
		img: classification,
		icon: ClassificationBlue,
	},
	{
		value: "Polygons",
		img: polygons,
		icon: PolygonsBlue,
	},
	
	{
		value: "Transcription",
		img:transcription,
		icon: KeyPointBlue,
	},
	
	
	
];
