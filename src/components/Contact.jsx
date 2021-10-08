import React, { Component } from "react";
import '../css/contact.css'

class Contact extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="contact-container github">
          <a target="_blank" rel="noreferrer" href="https://github.com/Ply3r"><img src="https://ply3r.github.io/imagens/25231.png" alt="git-hub" /></a>
        </div>
        <div className="contact-container linkedin">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leandro-henrique-soares-resende/"><img src="https://ply3r.github.io/imagens/linkedin-logo.png" alt="linkedin" /></a>
        </div>
        <div className="contact-container trybe">
          <a target="_blank" rel="noreferrer" href="https://www.betrybe.com/"><img src="https://ply3r.github.io/imagens/trybe%20-logo.jpeg" alt="trybe" /></a>
        </div>
      </div>
    );
  }
}

export default Contact;