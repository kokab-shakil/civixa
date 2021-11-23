import React from "react";
import { Row } from "react-bootstrap";
import Heading from "../../../components/Heading";

export const ContactBanner = ({ classes }) => {
  return (
    <Row className={classes}>
      <Heading
        headingClass="w-100 text-lg text-sm font-weight-900 text-prussian-blue"
        HeadingText="Book Your Personalized Demo"
        para
        paraClass="w-70 text-center text-prussian-blue"
        paraText="Tell us what you want to achieve with Sleeknote and we’ll show you how. Book a free live demo below to get your tailored introduction to Sleeknote."
      />
    </Row>
  );
};
