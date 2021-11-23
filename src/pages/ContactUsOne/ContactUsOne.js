import React from "react";
import CustomSection from "../../components/CustomSection";
import { Contact } from "./components/Contact";
import { ContactOneBanner } from "./components/ContactOneBanner";
import "./ContactUsOne.css";

const ContactUsOne = ({ handleHeaderColor }) => {
  handleHeaderColor("prussian-blue");
  const commonClasses =
    "d-flex align-items-center justify-content-center h-100";
  return (
    <>
      <CustomSection height="h-auto" bgColor="bg-prussian-blue" classes="">
        <ContactOneBanner
          classes={`${commonClasses} flex-column padding-all`}
        />
      </CustomSection>
      <CustomSection height="h-auto" bgColor="bg-white" classes="">
        <Contact classes={`${commonClasses} padding-all`} />
      </CustomSection>
    </>
  );
};

export default ContactUsOne;
