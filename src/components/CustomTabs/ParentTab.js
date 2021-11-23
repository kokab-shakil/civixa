import React, { useEffect } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { ItemCarousel } from "../ItemCarousel/ItemCarousel";
import ChildTab from "./ChildTab";
import "./CustomTabs.css";
import { ResponsiveCarousel } from "./ResponsiveCarousel";

export default function ParentTab() {
	let width = window.innerWidth;

	return (
		<Tab.Container id="Tabs" defaultActiveKey="annotation">
			<Row className="customTabs d-flex justify-content-center w-100">
				<Col sm={12} md="auto" className="d-flex flex-column">
					<Nav
						variant="pills"
						className="d-flex ourServiceParentTab justify-content-lg-start justify-content-center"
					>
						<Nav.Item>
							<Nav.Link eventKey="annotation">
								Annotation
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="datageneration">
								Data Generation
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="aiservices">
								Ai as a Service
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>
				<Col sm={12} className="py-2">
					<Tab.Content className="w-100">
						<Tab.Pane eventKey="annotation">
							{width > 768 ? <ChildTab /> : <ItemCarousel />}
						</Tab.Pane>
						<Tab.Pane eventKey="datageneration">
							{width > 768 ? <ChildTab /> : <ItemCarousel />}
						</Tab.Pane>
						<Tab.Pane eventKey="aiservices">
							{width > 768 ? <ChildTab /> : <ItemCarousel />}
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
		// <Tabs
		//   id="Tabs"
		//   className="CustomTabs"
		//   activeKey={key}
		//   onSelect={(k) => setKey(k)}
		// >
		//   <Tab eventKey="home" title="Home" type="button" className="btn">
		//     <h1>Tab 1</h1>
		//   </Tab>
		//   <Tab eventKey="profile" title="Profile">
		//     <h1>Tab 2</h1>
		//   </Tab>
		//   <Tab eventKey="contact" title="Contact">
		//     <h1>Tab 3</h1>
		//   </Tab>
		// </Tabs>
	);
}
