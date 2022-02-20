import React from "react";
import '../css/contact.css'
import images from "../images/images";

const Contact = () => {
  return (
    <>
      <h1 className="hero-title">Contact</h1>
      <div className="projects-container" style={ { 'flexWrap': "nowrap" } }>
        <div className="contact-container github">
          <a target="_blank" rel="noreferrer" href="https://github.com/Ply3r"><img src={images.imgGithubLogo} alt="git-hub" /></a>
        </div>
        <div className="contact-container linkedin">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leandro-henrique-soares-resende/"><img src={images.imgLinkedinLogo} alt="linkedin" /></a>
        </div>
      </div>
    </>
  );
}

export default Contact;