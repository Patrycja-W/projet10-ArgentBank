import React from "react";
import Logo from "../assets/argentBankLogo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="main-nav">
      <Link to="/">
        <div className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
        </div>
      </Link>
      <Link to="SignIn">
        <div className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </div>
      </Link>
    </nav>
  );
}

export default Header;
