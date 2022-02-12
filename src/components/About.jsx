import React from "react";
import images from "../images/images";
import '../css/about.css'
import SkillsCards from "./SkillsCards";

const About = () => {

  return (
    <>
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
      <div className="skill-container">
        <h1 className="hero-title">Skills</h1>
        <SkillsCards />
      </div>
    </>
  )
}

export default About