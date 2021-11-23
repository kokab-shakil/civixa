import React from "react";
import { Col } from "react-bootstrap";
import "./SquareIcon.css";

export default function SquareIcon({
	Icon,
	className,
	titleOne,
	titleTwo,
	arrowAfter,
	xs,
	paddingMidIcon
}) {
	return (
		<>
			<Col
				xs={xs ? xs : 6}
				md={4}
				className={`d-flex align-items-center justify-content-center justify-content-md-start mb-4 ${
					arrowAfter
						? "arrow-after flex-column flex-xl-row flex-lg-row"
						: ""
				}`}
			>
				<div
					className={"sq-icon d-flex flex-column align-items-center"}
				>
					<img
						className={paddingMidIcon}
						src={Icon}
						alt="data-label-web"
					/>
					<p className={"mt-0 mt-md-2  text-center mb-0 text-prussian-blue"}>
						{titleOne}
					</p>
					<p
						className={
							"lineHeight text-center my-0 pt-1 text-prussian-blue"
						}
					>
						{titleTwo}
					</p>
				</div>
			</Col>
		</>
	);
}
