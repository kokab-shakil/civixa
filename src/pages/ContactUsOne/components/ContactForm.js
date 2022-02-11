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
    <Container className="bg-lightgray ">
      <Row className="justify-content-center p-4 p-md-5">
        <FormInput />
      </Row>
      <Row className="pt-5 pl-0 pl-md-4">
        <Col>
          <Heading
            headingClass="text-small font-weight-bold pb-4"
            HeadingText="Contact information"
          >
            {/* <SideIcon
              sideIconClass="mb-3"
              HeadingText="San Sebastian 2957, Las Condes, Santiago"
              headingClass="text-normal w-70 pl-4 "
              iconClass="pt-2"
              icon={work}
            /> */}
            <SideIcon flexRow='flex-row' alignLeft="align-items-start " sideIconClass="mb-3" iconClass="pt-2" icon={work}>
              <a
                className="text-prussian-blue text-normal w-70 pl-4 pr-5"
                target="_top"
                href="mailto:hello@civixa.com"
              >
                San Sebastian 2957,<br/>
                <span className="pl-4"> Las Condes, Santiago</span>
              </a>
            </SideIcon>
            <SideIcon flexRow='flex-row' alignLeft="align-items-start " sideIconClass="mb-3" iconClass="pt-2" icon={email}>
              <a
                className="text-prussian-blue text-normal w-70 pl-4"
                target="_top"
                href="mailto:hello@civixa.com"
              >
                hello@civixa.com
              </a>
            </SideIcon>
            <SideIcon flexRow='flex-row' alignLeft="align-items-start " sideIconClass="mb-3" iconClass="pt-2" icon={phone}>
              <a
                className=" text-prussian-blue text-normal w-70 pl-4"
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
