import React from "react";
import { Col, Row } from "react-bootstrap";
import Heading from "../../../components/Heading";
import SquareIcon from "../../../components/SquareIcon/SquareIcon";
import CivixaAi from "../../../images/home/CivixaAi.svg";
import Engineers from "../../../images/home/Engineers.png";
import RawData from "../../../images/home/RawData.png";

export default function SectionFour({ classes }) {
  return (
    <Row className={classes}>
      <Col>
        <Heading
          headingClass="font-weight-900 d-flex align-items-center xs-fontSize-boldHeading justify-content-center  flex-md-row"
          HeadingText={[
            "A",
            <span className="position-relative">
              <span className="mx-2 underlined">RESOURCEFUL</span>
            </span>,
            "AI PARTNER",
          ]}
          para
          paraClass=" text-center m-auto"
          paraText="At Civixa, you can expect a comprehensive package that will incorporate AI in your business from scratch. "
        />
        <Row className="data-square-icon d-flex align-items-center flex-column flex-xl-row flex-lg-row w-70 m-auto">
          <SquareIcon
            className={"icon-size"}
            titleOne="Raw Data"
            Icon={RawData}
            arrowAfter
          />
          <SquareIcon
            className={"icon-size"}
            titleOne="Civixa.ai"
            Icon={CivixaAi}
            arrowAfter
            paddingMidIcon ='paddingMidIcon'
          />
          <SquareIcon
            className={"icon-size"}
            titleOne="Annotated Data"
            Icon={Engineers}
          />
        </Row>
        <Row className="pt-5 d-flex justify-content-lg-start justify-content-center">
          <Col xs={4} md={4} className="p-1">
            <Heading
              headingClass={"data-heading text-center text-xlg"}
              HeadingText={"1M+"}
              para
              paraClass={"text-center paraMedia text-prussian-blue font-weight-600"}
              paraText={"Data Generated"}
            />
          </Col>
          <Col xs={4} md={4}  className="p-1">
            <Heading
              headingClass={"data-heading text-center text-xlg"}
              HeadingText={"7.2M+"}
              para
              paraClass={"text-center paraMedia text-prussian-blue font-weight-600"}
              paraText={"Images annotated"}
            />
          </Col>
          <Col xs={4} md={4}  className="p-1">
            <Heading
              headingClass={"data-heading text-center text-xlg"}
              HeadingText={"06+"}
              para
              paraClass={"text-center paraMedia text-prussian-blue font-weight-600"}
              paraText={"Deployed"}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
