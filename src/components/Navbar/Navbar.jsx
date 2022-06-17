import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {

  handleLogout = () => {
    localStorage.removeItem('token')
    this.props.setUserInState(null)
  }

  render() {
    return (
      <nav className="NavbarItems">
      <h2 className="logo">Cryto Club</h2>
        {/* <h4 className="navbar-logo title">Crypto Club</h4> */}
        <ul className="nav-menu">
          <li><Link to="/" className="nav-links">Hub</Link></li>
          <li><Link to="/news"  className="nav-links">News</Link></li>
          <li><Link to="/rates" className="nav-links">Exchange Rates</Link></li>
          <li><Link to="/post/new" className="nav-links">Create Post</Link></li>
          <li><Link to="/" className="btn-signup" onClick={this.handleLogout}>Log Out</Link></li>
        </ul>
        
      </nav>
    );
  }
}

export default Navbar;
