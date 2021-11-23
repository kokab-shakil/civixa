import React from "react";
import Heading from "../Heading";

export const SideIcon = ({
	icon,
	altText,
	HeadingText,
	headingClass,
	para,
	paraText,
	paraClass,
	iconClass,
	iconHeading,
	sideIconClass,
	alignLeft,
	children,
	alignLg,
}) => {
	return (
		<div
			className={`d-flex flex-column flex-lg-row ${
				alignLeft ? alignLeft : "align-items-center"
			} ${alignLg ? alignLg : "align-items-lg-start"}  ${sideIconClass}`}
		>
			<img src={icon} alt={altText} className={iconClass} />
			<div className={iconHeading}>
				<Heading
					HeadingText={HeadingText}
					headingClass={headingClass}
					para={para}
					paraClass={paraClass}
					paraText={paraText}
				/>
				{children}
			</div>
		</div>
	);
};
