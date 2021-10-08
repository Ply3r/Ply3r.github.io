import React, { Component } from "react";
import '../css/about.css'

class About extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="image-main-container">
          <img src="https://ply3r.github.io/imagens/imagem2.png" alt="" />
        </div>
        <div className="information-about-container">
          <div className="information">
            <h1>About</h1>
            <p>Meu nome é Leandro Henrique, sou estudante de Web Development na Trybe, sou muito esforçado tento sempre aprender coisas novas, sempre fazendo cursos para me aperfeiçoar, gosto muito de programação.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About