import React from "react";
import { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomCard from "../../../components/CustomCard/CustomCard";
import Heading from "../../../components/Heading";
import tick from "../../../images/tick.svg";
import useWindowSize from "../../../WindowSize";
import { Link, useHistory } from "react-router-dom";
import "./ContactDetails.css";
const axios = require("axios");



const data = [
	{
		headingText: "Know how Civixa can be beneficial for your business.",
		paraText:
			" We will share our insights such as which type of annotation is suitable for your data. We will guide you through the whole process of how to share your data on our portal.",
	},
	{
		headingText: "See Our Products in Action",
		paraText:
			"We will give you a complete tour of our tool, our annotation process and our QA process.",
	},
	{
		headingText: "Get Insights From Insiders",
		paraText:
			"We have happy customers in over 11 countries. Some of them are just like you. We will be sharing their thoughts and feedback of our work so that you could be at peace regarding data privacy and quality standards.😉",
	},
];


export const ContactDetails = ({ classes }) => {
	const history = useHistory();
	const [UserEmail, setEmail] = useState("");
     const [msgs, setMsg] = useState('');
	const [width] = useWindowSize();

	const handleEmailInput = (e) => {
		setEmail(e.target.value)
	}
	const handleSubmit = (e) => {
    e.preventDefault();

   
    let email = UserEmail;
    let msg = msgs
    axios
		.post("http://localhost:5000/register", {
		 
			email: email,
			message: msg,
      })
		.then(function (response) {
        history.push("/");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
	return (
		<Row
			className={`${classes} position-relative justify-content-lg-start`}
		>
			<Col
				xs={12}
				md={12}
				lg={8}
				className={`bg-prussian-blue d-flex flex-column align-items-center justify-content-center padding-all img-fluid mb-md-0 mb-4 contactDetails left-0 ${
					width <= 992 && "contactusinfo"
				}`}
			>
				<Heading
					HeadingText="In 30 Minutes You Will…"
					headingClass="text-white text-center w-100"
				/>

				<Row className={`justify-content-center py-3 px-3 px-md-4 `}>
					{data.map((item) => {
						return (
							<Col
								lg={7}
								md={12}
								xs={12}
								className="d-flex flex-nowrap align-items-start pb-3 "
							>
								<img
									src={tick}
									alt="Tick"
									className="contactIcon align-items-start pt-1"
								/>
								<div className="pl-3">
									<h3 className="data-heading text-small font-weight-normal text-white text-left">
										{item.headingText}
									</h3>
									<p className="text-white">
										{item.paraText}
									</p>
								</div>
							</Col>
						);
					})}
				</Row>
			</Col>
			<Col
				xs={12}
				md={12}
				lg={4}
				className={`contactDetails-card ${
					width <= 992 && "contactusinfo-form"
				}`}
			>
				<CustomCard
					CardClasses="px-5 padding-y my-3 contactCard "
					HeadingText="Let's meet"
					headingClass="font-weight-900 text-center"
					icon=""
					iconClass=""
					para
					paraClass="text-center text-prussian-blue"
					paraText="Enter your email address and we’ll connect you with the right person."
				>
					<input
						class="form-control form-control-lg my-4"
						type="text"
						placeholder=""
						value={UserEmail}
						onChange={handleEmailInput}
					></input>
					<CustomButton
						btnColor="prussian-blue"
						btnClasses="text-white m-auto"
						btnText="Get Started"
						handlebtn={handleSubmit}
						// btnSize="small"
					/>
				</CustomCard>
			</Col>
			{/* <Col sm={12} md={7} className="bg-prussian-blue">
        {" "}
        Col 1
      </Col>
      <Col sm={12} md={5}>
        {" "}
        Col 1
      </Col> */}
		</Row>
	);
};
