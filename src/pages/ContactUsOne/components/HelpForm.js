import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../../components/Heading";
import teamcore from "../../../images/home/teamcore.png";

const data = [
  {
    headingText: "Book a demo",
    paraText: "We love supporting you. Any way you choose.",
  },
  {
    headingText: "Contact Sales",
    paraText: "We love supporting you. Any way you choose.",
  },
  {
    headingText: "Become an annotation partner",
    paraText: "We love supporting you. Any way you choose.",
  },
];

export const HelpForm = () => {
  return (
    <>
      <Heading
        headingClass="text-prussian-blue"
        HeadingText="How can we help?"
        para
        paraClass="text-prussian-blue w-70 text-center text-md-left"
        paraText="We love supporting you. Any way you choose. Please select a topic below related to your inquiry. If you don’t find what you need, fill out our contact form."
      />
      {data.map((item) => {
        return (
          <Link>
            <div className="helpFormLink w-70">
              <Heading
                headingClass="text-prussian-blue pt-2 text-small font-weight-900"
                HeadingText={item.headingText}
                para
                paraClass="text-prussian-blue pr-2 "
                paraText={item.paraText}
              />
            </div>
          </Link>
        );
      })}
      <div className="pt-5">
        <h6 className="text-gray text-uppercase">Trusted by:</h6>
        <div className="d-flex flex-wrap justify-content-center justify-content-lg-start pt-2">
          <img src={teamcore} className="pr-2" alt="TeamCore" />
          <img src={teamcore} className="pr-2" alt="Twitter Logo" />
          <img src={teamcore} className="pr-2" alt="LinkedIn Logo" />
        </div>
      </div>
    </>
  );
};
