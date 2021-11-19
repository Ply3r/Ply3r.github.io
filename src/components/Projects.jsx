import React, { Component } from "react";
import Project from "./Project";
import '../css/projects.css'

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <Project favorite={ true } name="Favoritos" />
        <Project type="fundamentos" name="Fundamentos" />
        <Project type="front" name="FrontEnd" />
      </div>
    )
  }
}

export default Projects;
