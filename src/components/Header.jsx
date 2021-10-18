import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false
    }
  }

  activeButton = () => {
    this.setState((after) => ({ menuActive: !after.menuActive }))
  }

  render() {
    const { menuActive } = this.state;
    return (
      <>
      <header className={`${ menuActive ? 'active' : 'header'}`}>
        <nav>
          <Link to="/"><h1>Home</h1></Link>
          <Link to="/about"><h1>About</h1></Link>
          <Link to="/contact"><h1>Contact</h1></Link>
          <Link to="/projects"><h1>Projects</h1></Link>
        </nav>
      </header>
      <div onClick={ this.activeButton } className="menu">
        <FontAwesomeIcon icon={ faBars } />
      </div>
      </>
    );
  }
}

export default Header