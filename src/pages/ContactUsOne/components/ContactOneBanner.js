import React from "react";
import { Row } from "react-bootstrap";
import Heading from "../../../components/Heading";

export const ContactOneBanner = ({ classes }) => {
  return (
    <Row className={classes}>
      <Heading
        topHeading
        topHeadingText="GOT A QUESTION?"
        topHeadingClass="text-white text-normal text-center"
        headingClass="text-white"
        HeadingText="Let’s talk. Or chat. Or…"
        para
        paraText="We love supporting you. Any way you choose."
        paraClass="text-white"
      />
    </Row>
  );
};
