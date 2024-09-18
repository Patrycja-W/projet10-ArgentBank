import React from "react";
import Logo from "../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

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

      <LoginButton />
    </nav>
  );
}

export default Header;
