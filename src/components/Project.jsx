import React, { useState } from "react";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFolderOpen, faTimesCircle, faWindowMinimize, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import data from "../data.js";

const Project = ({ type, favorite, name }) => {
  const [icone, setIcone] = useState(faFolder);
  const [active, setActive] = useState(false);

  const openFolder = () => {
    setIcone(faFolderOpen);
    setActive(true);
  }

  const closeFolder = () => {
    setIcone(faFolder);
    setActive(false);
  }

  const showWindow = () => {
    const { projects } = data;
    let hold = projects;
    if (type) hold = projects.filter((project) => project.type === type);
    if (favorite) hold = projects.filter((project) => project.favorite === true);
    const elementos = hold.map(({ name, img, link }) => {
      return (
        <a href={link} rel="noreferrer" target="_blank" className="projeto">
          <img src={img} alt="imagem" />
          <h3>{ name }</h3>
        </a>
      );
    })
    return (
      <Draggable handle="#handle">
        <div className="pasta-aberta">
          <div className="pasta-header">
            <div id="handle" className="folder-name">
              <h3>{ name }</h3>
            </div>
            <div className="icons">
              <FontAwesomeIcon icon={ faWindowMinimize } />
              <FontAwesomeIcon icon={ faWindowMaximize } />
              <FontAwesomeIcon onClick={ closeFolder } icon={ faTimesCircle } />
            </div>
          </div>
          <div className="pasta-container">
            { elementos }
          </div>
        </div>
      </Draggable>
    );
  }


  return (
    <>
      <div className="pasta-projetos" onClick={ openFolder }>
        <FontAwesomeIcon icon={ icone } />
        <h2>{ name }</h2>
      </div>
      { active && showWindow() }
    </>
  );
}

export default Project;
