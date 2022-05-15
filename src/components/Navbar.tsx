import React from "react";
import { Link } from "react-router-dom";

function Navbar(props: { config: any }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a href="index.html" className="navbar-brand mx-auto mx-lg-0">
          <i className="bi-bullseye brand-logo"></i>
          <span className="brand-text">
            Leadership <br /> Event
          </span>
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {props.config.links.map((link: any) => (
              <li className="nav-item">
                <Link to={link.to} className="nav-link click-scroll">
                  {link.text}
                </Link>
              </li>
            ))}

            <li className="nav-item">
              <a className="nav-link custom-btn btn d-none d-lg-block" href="#">
                Log in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
