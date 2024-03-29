import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">FitNFine</h1>
                <p className="lead">
                  Build your mental peace with a community who care for you
                </p>
                <hr />
                <div className=" gap-2 d-md-flex justify-content-md-center">
                  <div className="registerBtn">
                    <Link to="/register" className="btn btn-lg btn-dark">
                      Sign Up
                    </Link>
                  </div>
                  <div className="loginBtn">
                    <Link to="/login" className="btn btn-lg btn-light">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
