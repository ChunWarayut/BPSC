import React, { Component } from "react";

export class features extends Component {
  render() {
    return (
      <div id="home">
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <img
              src="img/หมอ.png"
              className="img-responsive"
              style={{ height: "100%" }}
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-8">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  our Innovation
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  href="#pills-contact"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                  style={{ background: "#56B889" }}
                >
                  our Mission
                </a>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                ...
              </div>
            </div>

            <div class="row">
              <div class="col-6">
                <div class="col-sm-4">
                  <div style={{ color: "black" }}>
                    <h1>Innovations in BPSC</h1>
                    <h3>Short describtion about innovation ......</h3>
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div class="col-sm-8">
                  <div class="col-6">
                    <div class="col-sm-6">
                      <div
                        class="col-sm-6"
                        style={{
                          background: "#E5E5E5",
                          width: "50%",
                          height: "18%",
                        }}
                      >
                        <center>
                          <img
                            src="img/advice.png"
                            style={{
                              width: "60%",
                              height: "60%",
                              padding: "10%",
                            }}
                            className="img-responsive"
                            alt=""
                          />{" "}
                          <p style={{ color: "black" }}>Brief Advice (BA)</p>
                        </center>
                      </div>
                      <br></br>
                      <div class="col-sm-6">
                        <p style={{ color: "black" }}>
                          Short describtion about Brief advice ......
                        </p>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div
                        class="col-sm-6"
                        style={{
                          background: "#E5E5E5",
                          width: "50%",
                          height: "18%",
                        }}
                      >
                        <center>
                          <img
                            src="img/patches.png"
                            style={{
                              width: "60%",
                              height: "60%",
                              padding: "10%",
                            }}
                            className="img-responsive"
                            alt=""
                          />{" "}
                          <p style={{ color: "black" }}>MBBI</p>
                        </center>
                      </div>
                      <div class="col-sm-6">
                        <p style={{ color: "black" }}>
                          Short describtion about MBBI ......
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-6">
                    <p style={{ color: "white" }}>
                      Short describtion about Brief advice ......
                    </p>
                    <div class="col-sm-6">
                      <div
                        class="col-sm-6"
                        style={{
                          background: "#E5E5E5",
                          width: "50%",
                          height: "18%",
                        }}
                      >
                        <center>
                          <img
                            src="img/together.png"
                            style={{
                              width: "60%",
                              height: "60%",
                              padding: "10%",
                            }}
                            className="img-responsive"
                            alt=""
                          />{" "}
                          <p style={{ color: "black" }}>
                            Brief Intervention (Bi)
                          </p>
                        </center>
                      </div>
                      <div class="col-sm-6">
                        <p style={{ color: "black" }}>
                          Short describtion about Brief intervention ......
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="col-sm-6">
                      <div
                        class="col-sm-6"
                        style={{
                          background: "#E5E5E5",
                          width: "50%",
                          height: "18%",
                        }}
                      >
                        <center>
                          <img
                            src="img/medical-report.png"
                            style={{
                              width: "60%",
                              height: "60%",
                              padding: "10%",
                            }}
                            className="img-responsive"
                            alt=""
                          />{" "}
                          <p style={{ color: "black" }}>MBTC</p>
                        </center>
                      </div>
                      <div class="col-sm-6">
                        <p style={{ color: "black" }}>
                          Short describtion about MBTc ......
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-6"></div>

            <div class="card">
              <div class="card-body">
                <center>
                  <img
                    src="img/ooo.svg"
                    style={{ width: "100%", height: "50%" }}
                    className="img-responsive"
                    alt=""
                  />{" "}
                  <div style={{ color: "black" }}>
                    <h1>Hope Sharing</h1>
                    <h3>แบ่งปันประสบการณ์</h3>
                    <h6>Short describtion about Hope Sharing .......</h6>
                  </div>
                </center>






                <div class="row">
                  <div class="col-sm-4">
                    <div class="card " >
                      <img
                        src="img/image7.png"
                        class="card-img-top"
                        alt="..."
                       width="90%"
                       height="25%"
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          How to Ba คนไข้ที่มีพฤติกรรมดื่มสุราหนัก
                        </h5>
                        <p class="card-text">Lorem ipsum</p>
                      </div>
                      <div class="card-footer">
                        <small class="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </div>
                    </div>
                   
                  </div>
                  <div class="col-sm-4">
                    <div class="card">
                      <img
                        src="img/image8.png"
                        class="card-img-top"
                        alt="..."
                        width="90%"
                       height="25%"
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          How to Ba คนไข้ที่มีพฤติกรรมดื่มสุราหนัก
                        </h5>
                        <p class="card-text">
                          Tal content. This content is a little bit longer.
                        </p>
                      </div>
                      <div class="card-footer">
                        <small class="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card ">
                      <img
                        src="img/image6.png"
                        class="card-img-top"
                        alt="..."
                        width="90%"
                       height="25%"
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          How to Ba คนไข้ที่มีพฤติกรรมดื่มสุราหนัก
                        </h5>
                        <p class="card-text">
                          Tal content. This content is a little bit longer.
                        </p>
                      </div>
                      <div class="card-footer">
                        <small class="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </div>
                    </div>
                  </div>
                </div>





                
              </div>
            </div>
          </div>
        </div>

        {/* 

        <div className="row">
        <div className="col-xs-12 col-md-4">
            
          </div>

          <div className="col-xs-12 col-md-8">
          
          </div>

        </div> */}
        <div
          class="card"
          style={{ width: "100%", height: "30%", background: "#26BEB4" }}
        >
          <div class="card-body">
            <center>
              <div style={{ fontSize: "60px", color: "black" }}>
                E - Learning
              </div>
              <p style={{ fontSize: "25px", color: "black" }}>
                Short describtion about E-learning .......
              </p>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default features;
