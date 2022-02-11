import React from "react";
import images from "../images/images";
import '../css/about.css'

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
        <div className="skill-cards-container">
          <div>
            <h3>Front-end</h3>
            <div className="skills-icons">
              <img alt="Icon html" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
              <img alt="Icon css" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
              <img alt="Icon javascript" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
              <img alt="Icon react" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
              <img alt="Icon jest" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo.png" />
              <img alt="Icon redux" src="https://img.icons8.com/color/48/000000/redux.png" />
              <img alt="Icon bootstrap" src="https://img.icons8.com/color/48/000000/bootstrap.png" />
            </div>
          </div>
          <div>
            <h3>Back-end</h3>
            <div className="skills-icons">
              <img alt="icon" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
              <img alt="icon" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" />
              <img alt="icon" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" />
              <img alt="icon" src="https://user-images.githubusercontent.com/68698781/148557525-ac893d52-85e2-49a7-b7fc-8bd6c0464612.png" />
              <img alt="icon" src="https://user-images.githubusercontent.com/68698781/152196540-efaf5119-67de-43f1-b955-55ed2b086796.png" />
              <img alt="icon" src="https://user-images.githubusercontent.com/68698781/152196431-6032d26a-545a-414d-a10c-6deddfe52f90.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About