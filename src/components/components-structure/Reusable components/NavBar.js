import React, { useState, useEffect } from "react";
import { Button } from "../Reusable components/Button";
import { Link } from "react-router-dom";
import "../../components-style/NavBar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/dashboard"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            HPOS <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Dashboard{" "}

              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/product"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Items
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/catagories"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Categories

              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-links" onClick={closeMobileMenu}>
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pos" className="nav-links" onClick={closeMobileMenu}>
                Make Order
              </Link>
            </li>
          </ul>
          {/* <Link to="/">
            <Button
              text="Log Out"
              buttonStyle="btn--primary log-out"
              buttonSize="btn--medium"
              onClick={closeMobileMenu}
              icon=<i className="fa-solid fa-right-from-bracket"></i>
            />
          </Link> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
