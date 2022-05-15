import React from "react";

function Schedule() {
  return (
    <section className="schedule section-padding" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <h2 className="mb-5 text-center">
              Next <u className="text-info">Schedules</u>
            </h2>

            <nav>
              <div
                className="nav nav-tabs align-items-baseline"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link active"
                  id="nav-DayOne-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-DayOne"
                  type="button"
                  role="tab"
                  aria-controls="nav-DayOne"
                  aria-selected="true"
                >
                  <h3>
                    <span>Day One</span>
                    <small>July 12, 2022</small>
                  </h3>
                </button>

                <button
                  className="nav-link"
                  id="nav-DayTwo-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-DayTwo"
                  type="button"
                  role="tab"
                  aria-controls="nav-DayTwo"
                  aria-selected="false"
                >
                  <h3>
                    <span>Day Two</span>
                    <small>July 14, 2022</small>
                  </h3>
                </button>

                <button
                  className="nav-link"
                  id="nav-DayThree-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-DayThree"
                  type="button"
                  role="tab"
                  aria-controls="nav-DayThree"
                  aria-selected="false"
                >
                  <h3>
                    <span>Day Three</span>
                    <small>July 16, 2022</small>
                  </h3>
                </button>

                <button
                  className="nav-link"
                  id="nav-DayFour-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-DayFour"
                  type="button"
                  role="tab"
                  aria-controls="nav-DayFour"
                  aria-selected="false"
                >
                  <h3>
                    <span>Day Four</span>
                    <small>July 18, 2022</small>
                  </h3>
                </button>
              </div>
            </nav>

            <div className="tab-content mt-5" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-DayOne"
                role="tabpanel"
                aria-labelledby="nav-DayOne-tab"
              >
                <div className="row border-bottom pb-5 mb-5">
                  <div className="col-lg-4 col-12">
                    <img
                      src="images/schedule/fabian-friedrich-JDUVM9_VaZE-unsplash.jpg"
                      className="schedule-image img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-8 col-12 mt-3 mt-lg-0">
                    <h4 className="mb-2">Startup Development Ideas</h4>

                    <p>
                      You are free to download any HTML CSS template from
                      TemplateMo website. You can use any template for business
                      purposes. You are not allowed to redistribute the
                      downloadable ZIP file on any other template website. Thank
                      you.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <div className="avatar-group d-flex">
                        <img
                          src="images/avatar/happy-asian-man-standing-with-arms-crossed-grey-wall.jpg"
                          className="img-fluid avatar-image"
                          alt=""
                        />

                        <div className="ms-3">
                          Logan Wilson
                          <p className="speakers-text mb-0">CEO / Founder</p>
                        </div>
                      </div>

                      <span className="mx-3 mx-lg-5">
                        <i className="bi-clock me-2"></i>
                        9:00 - 9:45 AM
                      </span>

                      <span className="mx-1 mx-lg-5">
                        <i className="bi-layout-sidebar me-2"></i>
                        Conference Hall 3
                      </span>
                    </div>
                  </div>
                </div>

                <div className="row border-bottom pb-5 mb-5">
                  <div className="col-lg-4 col-12">
                    <img
                      src="images/schedule/clayton-cardinalli-JMoFpdqL3XM-unsplash.jpg"
                      className="schedule-image img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-8 col-12 mt-3 mt-lg-0">
                    <h4 className="mb-2">Introduction to Online Businesses</h4>

                    <p>
                      Quisque mollis, ante non semper ultricies, nulla sapien
                      sollicitudin augue, id scelerisque nunc turpis nec urna.
                      Class aptent taciti sociosqu ad litora.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <div className="avatar-group d-flex">
                        <img
                          src="images/avatar/portrait-good-looking-brunette-young-asian-woman.jpg"
                          className="img-fluid avatar-image"
                          alt=""
                        />

                        <div className="ms-3">
                          Natalie
                          <p className="speakers-text mb-0">Event Planner</p>
                        </div>
                      </div>

                      <span className="mx-3 mx-lg-5">
                        <i className="bi-clock me-2"></i>
                        10:00 - 10:45 AM
                      </span>

                      <span className="mx-1 mx-lg-5">
                        <i className="bi-layout-sidebar me-2"></i>
                        100-D Room
                      </span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-12">
                    <img
                      src="images/schedule/business-woman-making-presentation-office.jpg"
                      className="schedule-image img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-8 col-12 mt-3 mt-lg-0">
                    <h4 className="mb-2">Bootstrapping Startup</h4>

                    <p>
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Ut consequat purus
                      posuere tortor efficitur, sit amet dignissim libero
                      aliquam.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <div className="avatar-group d-flex">
                        <img
                          src="images/avatar/senior-man-white-sweater-eyeglasses.jpg"
                          className="img-fluid avatar-image"
                          alt=""
                        />

                        <div className="ms-3">
                          Thomas
                          <p className="speakers-text mb-0">Startup Coach</p>
                        </div>
                      </div>

                      <span className="mx-3 mx-lg-5">
                        <i className="bi-clock me-2"></i>
                        11:00 - 11:45 AM
                      </span>

                      <span className="mx-1 mx-lg-5">
                        <i className="bi-layout-sidebar me-2"></i>
                        100-B Room
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-DayTwo"
                role="tabpanel"
                aria-labelledby="nav-DayTwo-tab"
              >
                <div className="row border-bottom pb-5 mb-5">
                  <div className="col-lg-4 col-12">
                    <img
                      src="images/schedule/people-smiling-while-conference-room.jpg"
                      className="schedule-image img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-8 col-12 mt-3 mt-lg-0">
                    <h4 className="mb-2">Building a famous company</h4>

                    <p>
                      Quisque mollis, ante non semper ultricies, nulla sapien
                      sollicitudin augue, id scelerisque nunc turpis nec urna.
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <div className="avatar-group d-flex">
                        <img
                          src="images/avatar/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg"
                          className="img-fluid avatar-image"
                          alt=""
                        />

                        <div className="ms-3">
                          Isabella
                          <p className="speakers-text mb-0">Event Manager</p>
                        </div>
                      </div>

                      <span className="mx-3 mx-lg-5">
                        <i className="bi-clock me-2"></i>
                        9:00 - 9:45 AM
                      </span>

                      <span className="mx-1 mx-lg-5">
                        <i className="bi-layout-sidebar me-2"></i>
                        Conference Hall 2
                      </span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-12">
                    <img
                      src="images/schedule/jason-goodman-bzqU01v-G54-unsplash.jpg"
                      className="schedule-image img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-8 col-12 mt-3 mt-lg-0">
                    <h4 className="mb-2">Dev Ops life in corporate</h4>

                    <p>
                      Quisque mollis, ante non semper ultricies, nulla sapien
                      sollicitudin augue, id scelerisque nunc turpis nec urna.
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <div className="avatar-group d-flex">
                        <img
                          src="images/avatar/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university.jpg"
                          className="img-fluid avatar-image"
                          alt=""
                        />

                        <div className="ms-3">
                          Samantha
                          <p className="speakers-text mb-0">
                            Top Level Speaker
                          </p>
                        </div>
                      </div>

                      <span className="mx-3 mx-lg-5">
                        <i className="bi-clock me-2"></i>
                        10:00 - 10:45 AM
                      </span>

                      <span className="mx-1 mx-lg-5">
                        <i className="bi-layout-sidebar me-2"></i>
                        100-A Room
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-DayThree"
                role="tabpanel"
                aria-labelledby="nav-DayThree-tab"
              >
                <div className="row border-bottom pb-5 mb-5">
                  <div className="col-lg-4 col-12">
                    <img
                      src="images/schedule/people-smiling-while-conference-room.jpg"
                      className="schedule-image img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-8 col-12 mt-3 mt-lg-0">
                    <h4 className="mb-2">Maintaining a successful business</h4>

                    <p>
                      Quisque mollis, ante non semper ultricies, nulla sapien
                      sollicitudin augue, id scelerisque nunc turpis nec urna.
                      Class aptent taciti sociosqu.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <div className="avatar-group d-flex">
                        <img
                          src="images/avatar/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg"
                          className="img-fluid avatar-image"
                          alt=""
                        />

                        <div className="ms-3">
                          Isabella
                          <p className="speakers-text mb-0">Event Manager</p>
                        </div>
                      </div>

                      <span className="mx-3 mx-lg-5">
                        <i className="bi-clock me-2"></i>
                        9:00 - 9:45 AM
                      </span>

                      <span className="mx-1 mx-lg-5">
                        <i className="bi-layout-sidebar me-2"></i>
                        Conference Hall 1
                      </span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-12">
                    <img
                      src="images/schedule/jason-goodman-bzqU01v-G54-unsplash.jpg"
                      className="schedule-image img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-8 col-12 mt-3 mt-lg-0">
                    <h4 className="mb-2">
                      Working Life in Corporate Environment
                    </h4>

                    <p>
                      Quisque mollis, ante non semper ultricies, nulla sapien
                      sollicitudin augue, id scelerisque nunc turpis nec urna.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <div className="avatar-group d-flex">
                        <img
                          src="images/avatar/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university.jpg"
                          className="img-fluid avatar-image"
                          alt=""
                        />

                        <div className="ms-3">
                          Samantha
                          <p className="speakers-text mb-0">
                            Top Level Speaker
                          </p>
                        </div>
                      </div>

                      <span className="mx-3 mx-lg-5">
                        <i className="bi-clock me-2"></i>
                        10:00 - 10:45 AM
                      </span>

                      <span className="mx-1 mx-lg-5">
                        <i className="bi-layout-sidebar me-2"></i>
                        100-C Room
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-DayFour"
                role="tabpanel"
                aria-labelledby="nav-DayFour-tab"
              >
                <div className="row">
                  <div className="col-lg-4 col-12">
                    <img
                      src="images/schedule/jeshoots-com-TWRCH-GaKr4-unsplash.jpg"
                      className="schedule-image img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-8 col-12 mt-3 mt-lg-0">
                    <h4 className="mb-2">After Party at the fullest</h4>

                    <p>
                      There is a plenty of great HTML CSS templates available at
                      TemplateMo.com website for your businesses. You can
                      download, edit and use any template for any purpose.
                      Please let us know{" "}
                      <a
                        rel="nofollow"
                        href="https://templatemo.com/contact"
                        target="_parent"
                      >
                        <u>your feedback via Email</u>
                      </a>
                      . Thank you.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <span>
                        <i className="bi-clock me-2"></i>
                        8:00 - 9:00 AM
                      </span>

                      <span className="mx-1 mx-lg-5">
                        <i className="bi-layout-sidebar me-2"></i>
                        Conference Hall 2
                      </span>
                    </div>
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

export default Schedule;
