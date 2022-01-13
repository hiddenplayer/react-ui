import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="navbar-container">
          <p>
            <a>Home</a>
          </p>
          <p>
            <a>React JS</a>
          </p>
          <p>
            <a>React Native</a>
          </p>
          <p>
            <a>About</a>
          </p>
        </div>
      </div>
      <div className="navbar-sign">
        <p>
          <a>Sign in</a>
        </p>
        <button type="button">Sign up</button>
      </div>

      <div className="navbar-menu-showcase">
        {toggleMenu ? (
          <RiCloseLine onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="navbar-menu">
            <div className="navbar-container2">
              <p>
                <a>Home</a>
              </p>
              <p>
                <a>React JS</a>
              </p>
              <p>
                <a>React Native</a>
              </p>
              <p>
                <a>About</a>
              </p>
            </div>
            <div className="navbar-sign2">
              <p>
                <a>Sign in</a>
              </p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
