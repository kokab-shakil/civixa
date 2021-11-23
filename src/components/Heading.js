import React from "react";

export default function Heading({
	headingClass,
	HeadingText,
	paraClass,
	paraText,
	para,
	topHeading,
	topHeadingClass,
	topHeadingText,
	iconBefore,
	icon,
	altText,
	top,
	iconClass,
	iconBeforeClass,
	HeadingContainer,
	subHeading,
	children,
	flex,
	pl
}) {
	return (
		<>
			<div
				className={`${iconBefore ? "d-flex align-items-center" : ""} ${
					top ? "flex-column" : ""
				} ${iconBeforeClass ? iconBeforeClass : ""} ${
					HeadingContainer ? HeadingContainer : ""
				} ${flex} ${pl}   `    }
			>
				{topHeading && (
					<h1 className={`data-heading ${topHeadingClass}`}>
						{topHeadingText}
					</h1>
				)}
				{iconBefore && (
					<img src={icon} alt={altText} className={iconClass} />
				)}
				{subHeading ? (
					<h1 className={`${headingClass}`}>{HeadingText}</h1>
				) : (
					<h1 className={`data-heading ${headingClass}`}>
						{HeadingText}
					</h1>
				)}
			</div>
			{para ? <p className={paraClass}>{paraText}</p> : null}
			{children}
		</>
	);
}
