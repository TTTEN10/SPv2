import React from "react";
import "./style.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="overlap-group">
        <img
          className="rectangle"
          alt="Rectangle"
          src="https://c.animaapp.com/gz3oTBma/img/rectangle-1432-3@2x.png"
        />

        <div className="navigation">
          <div className="group">
            <div className="logo">
              <div className="safe-psy">{""}</div>
            </div>
          </div>
        </div>

        <div className="text-wrapper-2">SafePsy</div>

        <img
          className="rectangle"
          alt="Rectangle"
          src="https://c.animaapp.com/gz3oTBma/img/rectangle-1432-3@2x.png"
        />
      </div>

      <div className="overlap">
        <div className="section-wrapper">
          <div className="div-wrapper">
            <div className="container-2">
              <div className="section-2">
                <div className="content-4">
                  <div className="heading-and">
                    <div className="heading-and-badge">
                      <p className="heading-3">
                        Innovative technology to service your privacy
                      </p>
                    </div>

                    <p className="supporting-text-2">
                      Our mission is to bring solutions to enable safe
                      telepsychology with AI and decentralization.
                    </p>
                  </div>

                  <div className="input-field-wrapper">
                    <div className="input-field-2">
                      <div className="input-field-base">
                        <div className="div-2">
                          <div className="input-2">
                            <div className="content-2">
                              <input
                                className="text-2"
                                placeholder="Name"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="input-with-label">
                        <div className="input-3">
                          <div className="content-2">
                            <input
                              className="text-2"
                              placeholder="Enter your email"
                              type="email"
                            />
                          </div>
                        </div>
                      </div>

                      <p className="hint-text">
                        <span className="text-wrapper-3">
                          We care about your data in our{" "}
                        </span>

                        <span className="text-wrapper-4">privacy policy</span>
                      </p>

                      <button className="button">
                        <div className="button-base-2">
                          <div className="text-3">Join our waitlist</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="content-digital"
          alt="Content digital"
          src="https://c.animaapp.com/gz3oTBma/img/content-digital-2-1.png"
        />
      </div>

      <img
        className="img"
        alt="Content digital"
        src="https://c.animaapp.com/gz3oTBma/img/content-digital-1-1.png"
      />

      <div className="tagline-section">
        <div className="tagline">
          <p className="p">
            Enabling great mental health services on a safe data management
            environment
          </p>
        </div>
      </div>

      <footer className="footer">
        <div className="container-wrapper">
          <div className="content-wrapper">
            <div className="content-3">
              <div className="logo-and-supporting" />

              <div className="links">
                <div className="div">
                  <div className="footer-links-column">
                    <div className="heading-2">Contact</div>

                    <div className="footer-links">
                      <div className="footer-link">
                        <div className="button-base-wrapper">
                          <div className="flexcontainer-wrapper">
                            <div className="flexcontainer">
                              <p className="text-i">
                                <span className="span">
                                  contact@safepsy.com
                                  <br />
                                </span>
                              </p>

                              <p className="text-i">
                                <span className="span">
                                  Instagram <br />
                                </span>
                              </p>

                              <p className="text-i">
                                <span className="span">LinkedIn</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
