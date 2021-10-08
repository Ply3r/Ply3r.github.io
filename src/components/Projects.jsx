import React, { Component } from "react";
import Project from "./Project";
import '../css/projects.css'
import data from "../data";

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <Project projetos={data} name="Meus Projetos Favoritos" />
      </div>
    )
  }
}

export default Projects;
