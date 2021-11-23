import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header/Header";

export default function Banner({
  bannerColor,
  height,
  bannerImage,
  pageName,
  headercolor,
}) {
  return (
    <Container fluid className={`${bannerColor}  ${height}`}>
      <Header headercolor={headercolor} />
    </Container>
  );
}
