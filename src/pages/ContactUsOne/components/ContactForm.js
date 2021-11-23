import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FormInput } from "../../../components/FormInput/FormInput";
import Heading from "../../../components/Heading";
import { SideIcon } from "../../../components/SideIcon/SideIcon";
import work from "./../images/work.svg";
import phone from "./../images/phone.svg";
import email from "./../images/email.svg";

export const ContactForm = () => {
  return (
    <Container className="bg-lightgray p-3 p-md-5">
      <Row>
        <FormInput />
      </Row>
      <Row className="pt-5 pl-0 pl-md-4">
        <Col>
          <Heading
            headingClass="text-small font-weight-bold pb-4"
            HeadingText="Contact information"
          >
            <SideIcon
              sideIconClass="mb-3"
              HeadingText="San Sebastian 2957, Las Condes, Santiago"
              headingClass="text-normal w-70 pl-4"
              iconClass="pt-2"
              icon={work}
            />
            <SideIcon sideIconClass="mb-3" iconClass="pt-2" icon={email}>
              <a
                className="data-heading text-prussian-blue text-normal w-70 pl-4"
                target="_top"
                href="mailto:hello@civixa.com"
              >
                hello@civixa.com
              </a>
            </SideIcon>
            <SideIcon sideIconClass="mb-3" iconClass="pt-2" icon={phone}>
              <a
                className="data-heading text-prussian-blue text-normal w-70 pl-4"
                target="_top"
                href="tel:+56988938875"
              >
                Tel: +56988938875
              </a>
            </SideIcon>
          </Heading>
        </Col>
      </Row>
    </Container>
  );
};
