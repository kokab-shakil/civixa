import React from "react";
import { Col, Row } from "react-bootstrap";
import { ContactForm } from "./ContactForm";
import { HelpForm } from "./HelpForm";

export const Contact = ({ classes }) => {
  return (
    <Row className={`${classes} align-items-lg-start`}>
      <Col md={6} xs={12}>
        <ContactForm />
      </Col>
      <Col md={6} xs={12} className="pl-5 pt-5">
        <HelpForm />
      </Col>
    </Row>
  );
};
