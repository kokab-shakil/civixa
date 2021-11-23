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
import fb from "../../images/footer/facebook.png";
import tw from "../../images/footer/twitter.png";
import ln from "../../images/footer/linkedin.png";
// import chile from "../../images/brandLogos/Chile.png";
// import nest from "../../images/brandLogos/nest.png"
import scw from "../../images/brandLogos/scw.png"
import ino from "../../images/brandLogos/innovert.jpg"
import { Link } from "react-router-dom";
export const Footer = () => {
  const mail = (e) => {
		 window.location = "mailto:hello@civixa.com";
                          e.preventDefault();
	}
  return (
    <CustomSection height="h-auto" classes="">
     
      <Row className="padding-Footer">
        
        {/* <Col xs={12} className="pt-4 pb-3">
          <Row className="d-flex justify-content-between px-5">
            <Col xs={12} md={8} className="d-flex flex-wrap ">
              <div className="pb-3">
                <h1 className="text-xs font-weight-bold pr-5">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
              </div>
              <div className="pb-3">
                <h1 className="text-xs font-weight-bold pr-5">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
              </div>
              <div className="pb-3">
                <h1 className="text-xs font-weight-bold pr-5">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
              </div>
            </Col>
            <Col
              xs={8}
              sm={4}
              md={4}
              lg={2}
              className="text-right pt-3 pt-lg-0"
            >
              <h1 className="footer-follow text-xs underline-green text-left font-weight-600">
                Follow Us
              </h1>
              <div className="d-flex justify-content-lg-between justify-content-around">
                <img src={facebook} alt="Facebook Logo" />
                <img src={twitter} alt="Twitter Logo" />
                <img src={linkedin} alt="LinkedIn Logo" />
              </div>
            </Col>
          </Row>
        </Col> */}
        <Col xs={12}>
          <Row className="d-flex pBtm align-items-end justify-content-center justify-content-md-between ">
            <Col xs={4} sm={6} md={4} className=" d-flex pl-2 pt-2 order-md-first  ">
              <img src={logoFooter} className='logoFooter' alt="Logo Footer" />
              <Heading
                HeadingText="CIVIXA"
                headingClass="font-weight-normal logoFontxs mb-0 text-left"
                para
                flex="d-flex align-items-center"
                // paraText="Enabling AI Transformation "
                paraClass="font-weigt-bold text-xxs w-max  mb-0  pb-3"
                pl=" pl-1 pl-md-3 pl-sm-3  pl-lg-3"
              />
            </Col>
            <Col xs={8} sm={6} md={6}  className={`p-0 `}>
            <Nav	className={`mr-auto pl-1 pl-md-5 align-items-lg-center d-flex justify-content-end`}>
							
								<Link
									to="/pricing"
									className="px-1 py-0  px-md-3 px-sm-3 px-lg-3 xsFontFooterNav nav-link"
								>
									Pricing
								</Link>
								<Link
									
									to="/service"
									className="px-1 py-0  px-md-3 px-sm-3 px-lg-3 xsFontFooterNav nav-link"
								>
									Services
								</Link>
							
								<Link
								
									to="/contact"
									className="px-1 py-0  px-md-3 px-sm-3 px-lg-3 xsFontFooterNav nav-link"
								>
									Contact Us
								</Link>
							</Nav>
            </Col>
          </Row>
          <div className='d-flex row align-items-end' >
          <div className='borderleft' ></div>
          <div className='borderRight '></div>
          </div>
         <Col 
              xs={12}
              md={12}
              lg={12}
              className="d-flex flex-wrap flex-column marginLeftFooter pt-1 pt-md-4 pt-sm-4 pt-lg-4 justify-content-lg-start p-0"
          >
            <div className="d-flex flex-wrap row justify-content-between ">
              
             </div>
              <h6 className="text-prussian-blue text-uppercase">
                Proudly supported by
              </h6>
             <div className="d-flex flex-wrap row justify-content-between ">
                <div className="d-flex flex-wrap logo-con-xs ">
                <img className='footerLogo' src={nvedia} alt="Facebook Logo" />
                <img className='footerLogo' src={chile} alt="LinkedIn Logo" />
                <img className='footerLogo' src={pasha} alt="LinkedIn Logo" />
                <img className='footerLogo' src={nest} alt="LinkedIn Logo" />
              </div>
              <div className="d-flex align-items-center flex-wrap pb-2 col-lg-auto col-md-auto col-sm-auto col-12 ">
                <a style={{textDecoration: 'none' }} href="https://www.facebook.com/civixaai" target="_blank"> <img className='footerSocialLogo' src={fb} alt="Facebook Logo" /> </a>
                <a style={{textDecoration: 'none' }} href="http://twitter.com/CivixaAI" target="_blank"> <img className='footerSocialLogo' src={tw} alt="twitter" /> </a>
                <a style={{textDecoration: 'none' }} href="https://www.linkedin.com/company/civixa/" target="_blank"> <img className='footerSocialLogo' src={ln} alt="LinkedIn Logo" /></a>
               
                
                
                </div>
              </div>
            </Col>
        </Col>
      </Row>
    </CustomSection>
  );
};
