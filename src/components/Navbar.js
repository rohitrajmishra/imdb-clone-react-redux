import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="search-container">
          <input />
          <button id="search-button">Search</button>
        </div>
        <h1>Navbar</h1>
      </div>
    );
  }
}

export default Navbar;
