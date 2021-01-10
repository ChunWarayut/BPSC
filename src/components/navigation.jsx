import React, { Component } from "react";

import styled from "styled-components";

export const ImgLogo = styled.img`
  height: 173.5638885498047px;
  width: 150px;
  left: 155px;
  top: 0px;
  border-radius: 0px;
  position: absolute;
  left: 8.07%;
  right: 78.44%;
  top: -55%;
  bottom: 97.29%;
`;
export const LoginButton = styled.a`
  background: #56b889 !important;
  color: #fff !important;
  padding: 8px 20px !important;
`;

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <ImgLogo src="img/logo/BPSC.SVG" />
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#home" className="page-scroll">
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  SHARING
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  E - LEARNING
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  DOCTOR
                </a>
              </li>
              <li>
                <LoginButton href="#contact" className="page-scroll">
                  LOGIN
                </LoginButton>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
