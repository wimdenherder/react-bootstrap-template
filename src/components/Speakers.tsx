import React from "react";

function Speakers() {
  return (
    <section className="speakers section-padding" id="section_3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="speakers-text-info">
              <h2 className="mb-4">
                Our <u className="text-info">Speakers</u>
              </h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut dolore
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="speakers-thumb">
              <img
                src="images/avatar/happy-asian-man-standing-with-arms-crossed-grey-wall.jpg"
                className="img-fluid speakers-image"
                alt=""
              />

              <small className="speakers-featured-text">Featured</small>

              <div className="speakers-info">
                <h5 className="speakers-title mb-0">Logan Wilson</h5>

                <p className="speakers-text mb-0">CEO / Founder</p>

                <ul className="social-icon">
                  <li>
                    <a href="#" className="social-icon-link bi-facebook"></a>
                  </li>

                  <li>
                    <a href="#" className="social-icon-link bi-instagram"></a>
                  </li>

                  <li>
                    <a href="#" className="social-icon-link bi-google"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-12">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="speakers-thumb speakers-thumb-small">
                  <img
                    src="images/avatar/portrait-good-looking-brunette-young-asian-woman.jpg"
                    className="img-fluid speakers-image"
                    alt=""
                  />

                  <div className="speakers-info">
                    <h5 className="speakers-title mb-0">Natalie</h5>

                    <p className="speakers-text mb-0">Event Planner</p>

                    <ul className="social-icon">
                      <li>
                        <a
                          href="#"
                          className="social-icon-link bi-facebook"
                        ></a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="social-icon-link bi-instagram"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="speakers-thumb speakers-thumb-small">
                  <img
                    src="images/avatar/senior-man-white-sweater-eyeglasses.jpg"
                    className="img-fluid speakers-image"
                    alt=""
                  />

                  <div className="speakers-info">
                    <h5 className="speakers-title mb-0">Thomas</h5>

                    <p className="speakers-text mb-0">Startup Coach</p>

                    <ul className="social-icon">
                      <li>
                        <a
                          href="#"
                          className="social-icon-link bi-instagram"
                        ></a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="social-icon-link bi-whatsapp"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="speakers-thumb speakers-thumb-small">
                  <img
                    src="images/avatar/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg"
                    className="img-fluid speakers-image"
                    alt=""
                  />

                  <div className="speakers-info">
                    <h5 className="speakers-title mb-0">Isabella</h5>

                    <p className="speakers-text mb-0">Event Manager</p>

                    <ul className="social-icon">
                      <li>
                        <a
                          href="#"
                          className="social-icon-link bi-facebook"
                        ></a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="social-icon-link bi-instagram"
                        ></a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="social-icon-link bi-whatsapp"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="speakers-thumb speakers-thumb-small">
                  <img
                    src="images/avatar/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university.jpg"
                    className="img-fluid speakers-image"
                    alt=""
                  />

                  <div className="speakers-info">
                    <h5 className="speakers-title mb-0">Samantha</h5>

                    <p className="speakers-text mb-0">Top Level Speaker</p>

                    <ul className="social-icon">
                      <li>
                        <a
                          href="#"
                          className="social-icon-link bi-instagram"
                        ></a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="social-icon-link bi-whatsapp"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Speakers;
