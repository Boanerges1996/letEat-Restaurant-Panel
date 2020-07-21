import React, { Component } from "react";
import Slideshow from "./imageSlider";
import Header from "./appBar";
import Services from "./services.jsx";
import Footer from "./footer";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <Services />
        <Slideshow />
        <Footer />
      </div>
    );
  }
}
