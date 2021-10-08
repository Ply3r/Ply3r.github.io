import React, { Component } from "react";
import '../css/contact.css'
import images from "../images/images";

class Contact extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="contact-container github">
          <a target="_blank" rel="noreferrer" href="https://github.com/Ply3r"><img src={images.imgGithubLogo} alt="git-hub" /></a>
        </div>
        <div className="contact-container linkedin">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leandro-henrique-soares-resende/"><img src={images.imgLinkedinLogo} alt="linkedin" /></a>
        </div>
        <div className="contact-container trybe">
          <a target="_blank" rel="noreferrer" href="https://www.betrybe.com/"><img src={ images.imgTrybeLogo } alt="trybe" /></a>
        </div>
      </div>
    );
  }
}

export default Contact;