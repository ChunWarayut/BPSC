import React, { Component } from "react";

import styled from "styled-components";

export const IntroBackground = styled.div`
  display: table;
  width: 100%;
  padding: 0;
  background: url(../img/header/header.svg) center center no-repeat;
  background-color: #e5e5e5;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
`;
export const BlogContent = styled.div`
  position: absolute;
  left: 0%;
  right: 66.56%;
  top: 2.25%;
  bottom: 86.78%;

  background: rgba(39, 180, 162, 0.65);

  height: 469px;
  width: 600px;
  left: 0px;
  top: 80px;
  border-radius: 0px;
`;
export const HeaderTitle = styled.p`
  padding: 38px;
  position: absolute;
  left: 5%;
  right: 70.73%;
  top: 25%;
  bottom: 93.88%;
  width: fit-content;

  font-family: "Kanit";
  font-weight: 500;
  font-size: 48px;
  line-height: 46px;
  /* or 50% */

  letter-spacing: 1px;
  text-transform: uppercase;

  color: #000000;
`;
export const SubTitle = styled.p`
  padding: 38px;
  position: absolute;
  left: 5%;
  right: 70.73%;
  top: 45%;
  bottom: 93.88%;
  width: fit-content;

  font-family: "Kanit";
  font-weight: 500;
  font-size: 24px;
  line-height: 25px;
  /* or 50% */

  letter-spacing: 1px;
  text-transform: uppercase;

  color: #000000;
`;

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <IntroBackground>
          <div className="overlay">
            <div className="container">
              <div className="row">
                <BlogContent>

                  <div
                    class="card"
                    style={{
                      padding: "130px",
                    }}
                  >
                    <div class="card-body">
                      <h1 style={{color: '#000000'}}>ภาพระบบสาธารณะสุขที่เราวาดฝัน</h1>
                      <p style={{color: '#000000'}}>
                        เป็นระบบสาธารณะสุขที่ทั้งบุคลากรและผู้รับบริการ
                        ได้ช่วยรักษากันและกัน มากกว่าเพียงแค่การจ่ายยา...
                      </p>
                      <center>
                      <button type="button" class="btn btn-success" style={{background: "#56B889"}}>More about us
BPSC </button>

                      </center>


                    </div>
                  </div>
                </BlogContent>
                <div className="col-md-8 col-md-offset-2 intro-text"></div>
              </div>
            </div>
          </div>
        </IntroBackground>
      </header>
    );
  }
}

export default Header;
