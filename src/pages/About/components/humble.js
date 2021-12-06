import React from "react";
import { Row ,Col, Container} from "react-bootstrap";
import ParentTab from "../../../components/CustomTabs/ParentTab";
import Heading from "../../../components/Heading";
import chile from "../images/supported/chile.png";
import nest from "../images/supported/nest.png";
import nividia from "../images/supported/Nvidia.png";
import pasha from "../images/supported/pasha.png";
import { TeamCarousel } from "./TeamCarousel";

export default function Humble({ classes }) {
    const humbleImages=[nividia,nest,chile,pasha]
	return (
		<Row className={classes}>
			<Heading
				headingClass="font-weight-900 xs-fontSize-boldHeading d-flex align-items-center justify-content-center  flex-md-row "
				HeadingText={[
					"HUMBLE, YET HONORED",
					
				]}
				para
				paraClass="w-ms-50 w-lg-50 w-xlg-50 text-center "
				paraText="We’ve also earned a few accolades. Sure, rewards and recognition are nice, but we don’t do it for the bragging rights."

			/>
		<Container>
		<Row className="p-xl-0 p-lg-3 justify-content-between align-items-center">
						{humbleImages.map((item) => {
							return (
								<Col
									xs={3}
									sm={3}
									md={'auto'}
									lg={3}
									xl={3}
									className="p-0"
								>
									<img src={item} className='w-100 w-sm-auto' alt={ 'logos'}/>
								</Col>
							);
						})}
					</Row>
					</Container>
		</Row>
	);
}
