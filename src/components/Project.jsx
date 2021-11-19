import React, { Component } from "react";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFolderOpen, faTimesCircle, faWindowMinimize, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import data from "../data";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icone: faFolder,
      active: false,
    }
  }

  showWindow = () => {
    const { type, favorite, name } = this.props;
    let hold = data;
    if (type) hold = data.filter((project) => project.type === type);
    if (favorite) hold = data.filter((project) => project.favorite === true);
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
          <div id="handle" className="pasta-header">
            <div className="folder-name">
              <h3>{ name }</h3>
            </div>
            <div className="icons">
              <FontAwesomeIcon icon={faWindowMinimize} />
              <FontAwesomeIcon icon={faWindowMaximize} />
              <FontAwesomeIcon onClick={this.closeFolder} icon={faTimesCircle} />
            </div>
          </div>
          <div className="pasta-container">
            { elementos }
          </div>
        </div>
      </Draggable>
    );
  }

  openFolder = () => {
    this.setState({ icone: faFolderOpen, active: true })
  }

  closeFolder = () => {
    this.setState({ icone: faFolder, active: false })
  }

  render() {
    const { active , icone} = this.state;
    const { name } = this.props;
    return (
      <>
        <div className="pasta-projetos" onClick={this.openFolder}>
          <FontAwesomeIcon icon={ icone } />
          <h2>{ name }</h2>
        </div>
        { active ? this.showWindow() : '' }
      </>
    );
  }
}

export default Project;
