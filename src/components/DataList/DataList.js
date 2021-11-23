import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import TabData from "../CustomTabs/TabData";
import "./DataList.css";
import transcription from "../CustomTabs/TabIcons/Transcription.svg";

const data = [
  {
    value: "1",
    component: TabData,
  },
  {
    value: "2",
    component: "",
  },
  {
    value: "3",
    component: TabData,
  },
];

export const DataList = () => {
  const [option, selectedOption] = useState(TabData);

  const handleChange = (e) => {
    const optionValue = data.find((element) => element.value == e.target.value);
    selectedOption(optionValue.component);
    console.log(optionValue);
  };
  return (
    <>
      <Container>
        <Row>
          <select
            class="DataList"
            aria-label="Default select example"
            onChange={handleChange}
          >
            <option value="1">
              <span className="datalist-icon">asd</span>
            </option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </Row>
        <Row>
          <div>{option}</div>
        </Row>
      </Container>
    </>
  );
};
