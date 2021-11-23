import React from "react";
import { Col, Row,Nav } from "react-bootstrap";
import CustomButton from "../CustomButton/CustomButton";
import CustomSection from "../CustomSection";
import Heading from "../Heading";
import "./Footer.css";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin.svg";
import chile from "../../images/footer/chile.png";
import nest from "../../images/footer/io.png";
import logoFooter from "../../images/footer/logo-footer.svg";
// import nvedia from "../../images/footer/Nvidia.png";
import nvedia from "../../images/footer/Nvidia.png";
import pasha from "../../images/footer/pasha.png";
// import chile from "../../images/brandLogos/Chile.png";
// import nest from "../../images/brandLogos/nest.png"
import scw from "../../images/brandLogos/scw.png"
import ino from "../../images/brandLogos/innovert.jpg"
import { Link } from "react-router-dom";
export const UpperFooter = () => {
  const mail = (e) => {
		 window.location = "mailto:hello@civixa.com";
                          e.preventDefault();
	}
    return (
      <div className="upperFooter">
      
          <Heading
            headingClass="footer-heading xs-fontSize-boldHeading fontBig colorwhite text-center text-height-1 d-flex  flex-lg-row justify-content-center align-items-center"
            HeadingText={[
              "Get",
              
                " Started With Civixa.Ai Today",
            
                ]}
                // paraClass="colorwhite"
          />
          <CustomButton
            btnColor="green"
            btnText="Request A Demo"
            btnClasses="text-white mt-2"
            handlebtn={mail}
          />
     </div>
  );
};
