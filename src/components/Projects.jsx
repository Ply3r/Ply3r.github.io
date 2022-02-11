import React from "react";
import Project from "./Project";
import '../css/projects.css'

const Projects = () => (
  <>
    <h1 className="hero-title">Projects</h1>
    <div className="projects-container">
      <Project favorite={ true } name="Favoritos" />
      <Project type="fundamentos" name="Fundamentos" />
      <Project type="front" name="FrontEnd" />
      <Project type="back" name="BackEnd" />
    </div>
  </>
)

export default Projects;
