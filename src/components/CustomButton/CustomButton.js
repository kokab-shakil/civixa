import React from "react";
import { Button } from "react-bootstrap";
import "./CustomButton.css";

export default function CustomButton({
	btnColor,
	btnSize,
	btnText,
	btnClasses,
	handlebtn,
	marginBottom,
	border,
	btnTextColor
}) {
	return (
		<Button
			variant={btnColor}
			size={`${btnSize ? btnSize : "small"}`}
			className={`customButton text-uppercase font-weight-900 btnSize ${
				marginBottom ? marginBottom : "mb-2"
			}  btn-lg px-4 px-lg-5 py-2 ${border} ${btnTextColor}  ${btnClasses}`}
			onClick={handlebtn}
		>
			{btnText}
		</Button>
	);
}
