import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header_wrap">
          <Link to="/">Locations</Link>
          <Link to="/addlocation">+ Add Location</Link>
        </div>
      </header>
    );
  }
}

export default Header;
