import React from "react";
import CustomSection from "../../components/CustomSection";
import { ItemCarousel } from "../../components/ItemCarousel/ItemCarousel";
import { ServiceCarousel } from "../../components/ItemCarousel/ServiceCarousel";
import { Test } from "./components/Test";

export default function About({ handleHeaderColor }) {
  handleHeaderColor("white");
  return (
    <>
      <CustomSection
        height=""
        bgColor=""
        classes="d-flex align-items-center justify-content-center w-100 h-100"
      >
        <Test />
      </CustomSection>
    </>
  );
}
