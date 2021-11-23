import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import civixaWhite from "./images/civixaWhite.svg";
import civixa from "./images/civixa.svg";
import { useHistory } from "react-router-dom";

import "./Header.css";
import { Link } from "react-router-dom";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import useWindowSize from "../../WindowSize";
import CustomButton from "../CustomButton/CustomButton";

export default function Header({ headercolor }) {
	const [headersticky, setHeaderSticky] = useState(false);
	const [expanded, setExpanded] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [logoColor, setLogoColor] = useState(
		headercolor == "prussian-blue" ? civixaWhite : civixa
	);
	const [color, setColor] = useState(headercolor);
	const history = useHistory();
	const [width] = useWindowSize();

	useEffect(() => {
		const scrollCallBack = window.addEventListener("scroll", () => {
			if (window.pageYOffset > 0) {
				setHeaderSticky(true);
			} else {
				setHeaderSticky(false);
			}
		});
		return () => {
			window.removeEventListener("scroll", scrollCallBack);
		};
	}, []);

	useEffect(() => {
		if (headersticky || headercolor === "prussian-blue") {
			setLogoColor(civixa);
			setColor("white");
		} else {
			setLogoColor(civixa);
			setColor("white");
		}
	}, [headersticky, headercolor]);

	const hanldeInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleEmailSubmit = () => {
		setTimeout(() => {
			history.push("/contact");
			setInputValue("");
			alert("Email Submited");
		}, 200);
	};

	return (
		<Navbar
			// fixed="top"
			sticky="top"
			collapseOnSelect={true}
			expand="lg"
			// bg={headercolor}
			variant="light"
			expanded={expanded}
			className={`header py-2 container-fluid w-100 px-0 px-md-auto ${
				color === "white" ? "bg-color-white" : "bg-prussian-blue"
			} ${headersticky ? "sticky" : ""}`}
		>
			<div className="container-lg p-0 container-fluid">
				<Navbar.Brand
					className={`${width >= 320 ? "padding-left" : "pl-3"} pl-lg-0`}
				>
					<Link
						to="/"
						onClick={() =>
							setTimeout(() => {
								setExpanded(false);
							}, 200)
						}
						className="d-flex align-items-center  navbar-brand"
					>
						<img
							alt="Civixa"
							src={logoColor}
							width="46"
							height="50"
							className="d-inline-block align-top icon-white"
						/>
						<span
							className={`pl-4 logo-heading text-uppercase ${
								color === "white"
									? "text-prussian-blue"
									: "text-color-white"
							}`}
						>
							Civixa
						</span>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle
					onClick={() => setExpanded(!expanded)}
					aria-controls="responsive-navbar-nav "
					className="mr-4 mr-lg-0"
				>
					<span
						className={`navbar-toggler-icon ${
							color === "prussian-blue"
								? "icon-prussian-blue"
								: "icon-white"
						}`}
					></span>
				</Navbar.Toggle>
				<Navbar.Collapse
					id="responsive-navbar-nav"
					className={`${
						color === "prussian-blue" ? "prussian-blue" : "white"
					} ${width <= 991 ? "mobile-version pl" : "desktop-version"}`}
				>
					{width <= 991 ? (
						<MobileVersion setExpanded={setExpanded} />
					) : (
						<>
							<Nav
								className={`mr-auto pl-5 align-items-lg-center`}
							>
								{/* <Link
									eventKey="1"
									to="/"
									onClick={() => setExpanded(false)}
									className="px-3 nav-link"
								>
									Home
								</Link> */}
										{/* <Link
									onClick={() => setExpanded(false)}
									eventKey="5"
									to="/covid"
									className="px-3 nav-link"
								>
									Covid
								</Link> */}
								<Link
									onClick={() => setExpanded(false)}
									eventKey="2"
									to="/pricing"
									className="px-3 nav-link"
								>
									Pricing
								</Link>
								<Link
									onClick={() => setExpanded(false)}
									eventKey="3"
									to="/service"
									className="px-3 nav-link"
								>
									Services
								</Link>
							
								<Link
									onClick={() => setExpanded(false)}
									eventKey="4"
									to="/contact"
									className="px-3 nav-link"
								>
									Contact Us
								</Link>
							</Nav>
							<Nav className="d-flex pl-lg-0 pl-5 align-items-lg-center">
								<input
									type="email"
									className="inputReqDemo pl-3 d-none d-lg-block"
									placeholder="hello@civixa.com"
									value={inputValue}
									onChange={hanldeInputChange}
								/>
								<button
									className="btnReqDemo py-2 px-4 mx-3 mx-md-0 my-4 text-white"
									onClick={handleEmailSubmit}
								>
									Request Demo
								</button>
							</Nav>
						</>
					)}
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}

const MobileVersion = ({ setExpanded }) => {
	const history = useHistory();
	const handleMobileRequestBtn = e  => {
		history.push("/contact")
		setTimeout(() => {
								setExpanded(false);
							}, 200)
	}
	return (
		<>
			<Nav className="mr-auto align-items-lg-center ">
				<Nav className="d-flex pl-lg-0 pl-3 align-items-lg-center">
					<h3 className="heading">Civixa.ai empowers organisations by providing a combination
                   of pre-requisite services for the training of any AI-model.
					</h3>
					<h3 className="headingWork">
						OUR WORK
					</h3>
				</Nav>
				<Link
					eventKey="1"
					to="/"
					onClick={() =>
						setTimeout(() => {
							setExpanded(false);
						}, 200)
					}
					className="mx-3 pb-1 mb-4 mobile-nav-link"
				>
					Home
				</Link>
				<Link
					onClick={() =>
						setTimeout(() => {
							setExpanded(false);
						}, 200)
					}
					eventKey="2"
					to="/pricing"
					className="mx-3 pb-1 mb-4 mobile-nav-link"
				>
					Pricing
				</Link>
				<Link
					onClick={() =>
						setTimeout(() => {
							setExpanded(false);
						}, 200)
					}
					eventKey="3"
					to="/service"
					className="mx-3 pb-1 mb-4 mobile-nav-link"
				>
					Services
				</Link>
				{/* <Link
					onClick={() =>
						setTimeout(() => {
							setExpanded(false);
						}, 200)
					}
					eventKey="5"
					to="/covid"
					className="px-3 mobile-nav-link"
				>
					Covid
				</Link> */}
				<Link
					onClick={() =>
						setTimeout(() => {
							setExpanded(false);
						}, 200)
					}
					eventKey="4"
					to="/contact"
					className="mx-3 pb-1 mb-4 mobile-nav-link"
				>
					Contact Us
				</Link>
			</Nav>
			<Nav className="d-flex  ml-3 align-items-lg-center">
			
				<CustomButton
								btnText="GET IN TOUCH"
								btnClasses="text-prussian-blue package-btn"
								btnColor="green"
								handlebtn={handleMobileRequestBtn}
							/>
				
			</Nav>
		</>
	);
};
