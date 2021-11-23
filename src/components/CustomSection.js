import React from "react";
import { Container } from "react-bootstrap";

export default function CustomSection({ bgColor, height, classes, children }) {
  return (
    <Container
      fluid
      className={`${bgColor} ${
        height === "" || height === undefined ? "height-770 vh-100" : height
      } ${classes === "" || classes === undefined ? "" : classes} `}
    >
      {children}
    </Container>
  );
}
