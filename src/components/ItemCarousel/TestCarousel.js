import React, { Component } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import { Button } from "bootstrap";
import Udemy from "../../images/CarouselImages/udemy.svg";

export default class TestCarousel extends Component {
  myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? "👈" : "👉";
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }
  render() {
    return (
      <div>
        <Carousel renderArrow={this.myArrow}>
          <div>Hello</div>
          <div>Hello10</div>
          <div>Hello22</div>
          <div>Hello33</div>
          <div>Hello44</div>
          <div>Hello55</div>
          <div>Hello66</div>
        </Carousel>
      </div>
    );
  }
}
