import React from "react";
import { Col } from "react-bootstrap";
import CustomCard from "../../../../components/CustomCard/CustomCard";
import RepeatGrid from "../../../../images/RepeatGrid.svg";

export const DetailInfo = ({ cardCol, imageCol, cardData, children }) => {
	const data = cardData;
	return (
		<>
			<Col xs={12} md={6} className={`${cardCol} position-relative`}>
				{data.map((item) => {
					return (
						<CustomCard
							CardClasses={`${item.CardClass} covidCardClass d-flex flex-column zindex1 mb-4`}
							HeadingText={item.headingText}
							headingClass={`covidCardHeading ${item.headingClass}`}
							para
							paraText={item.paraText}
							paraClass={` ${item.paraClass} `}
						/>
					);
				})}
				<img src={RepeatGrid} alt="Dots" className="bottomLeftDots" />
				<img src={RepeatGrid} alt="Dots" className="topRightDots" />
			</Col>
			<Col
				xs={12}
				md={6}
				className={`${imageCol} d-flex align-items-center px-lg-5`}
			>
				{children}
			</Col>
		</>
	);
};
