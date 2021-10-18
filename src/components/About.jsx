import React, { Component } from "react";
import '../css/about.css'
import images from "../images/images";

class About extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="image-main-container">
          <img src={ images.secondImg } alt="" />
        </div>
        <div className="information-about-container">
          <div className="information">
            <h1>About</h1>
            <p>My name is Leandro Henrique, I'm a Web Development student at Trybe, I always try to learn new things, always taking courses to improve myself, I really like programming.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About