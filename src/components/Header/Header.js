import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header_wrap">
          <span>Locations</span>
          <a href="/addlocation">+ Add Location</a>
        </div>
      </header>
    );
  }
}

export default Header;
