import React from 'react';
// The component used in all the views is called on the router 

import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      {/* navbar */}
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          {/* TODO inserire ester egg */}
          <a className="navbar-brand">
            <i className="bi bi-code"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link"
                // use for close collapse on click
                data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                onClick={() => navigate("/home")}  
                 >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" 
                data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                onClick={() => navigate("/experience")}>
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" 
                data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                onClick={() => navigate("/projects")}>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" 
                data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                onClick={() => navigate("/aboutme")}>AboutMe</a>
              </li>
            </ul>
            <i className="bi bi-code-slash"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
