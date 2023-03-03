import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            FitNFine
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Connect
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Exercises
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Profile
                </a>
              </li>
            </ul>
            <span className="navbar-text">Navbar text with an inline element</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
