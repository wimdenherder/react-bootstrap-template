import "./style.css";
import { Link } from "react-router-dom";
import VideoHeader from "../../components/VideoHeader";
import VideoGallery from "../../components/VideoGallery";
import InfoSection from "../../components/InfoSection";

export function Home() {
  return (
    <div className="App">
      <main>
        <VideoHeader youtubeId="qRFcLHo58eQ" />

        <VideoGallery />

        <InfoSection />

        <section className="speakers section-padding" id="section_3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center">
                <div className="speakers-text-info">
                  <h2 className="mb-4">
                    Our <u className="text-info">Speakers</u>
                  </h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut dolore
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
                          TemplateMo website. You can use any template for
                          business purposes. You are not allowed to redistribute
                          the downloadable ZIP file on any other template
                          website. Thank you.
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
                              <p className="speakers-text mb-0">
                                CEO / Founder
                              </p>
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
                        <h4 className="mb-2">
                          Introduction to Online Businesses
                        </h4>

                        <p>
                          Quisque mollis, ante non semper ultricies, nulla
                          sapien sollicitudin augue, id scelerisque nunc turpis
                          nec urna. Class aptent taciti sociosqu ad litora.
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
                              <p className="speakers-text mb-0">
                                Event Planner
                              </p>
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
                          conubia nostra, per inceptos himenaeos. Ut consequat
                          purus posuere tortor efficitur, sit amet dignissim
                          libero aliquam.
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
                              <p className="speakers-text mb-0">
                                Startup Coach
                              </p>
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
                          Quisque mollis, ante non semper ultricies, nulla
                          sapien sollicitudin augue, id scelerisque nunc turpis
                          nec urna. Class aptent taciti sociosqu ad litora
                          torquent per conubia.
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
                              <p className="speakers-text mb-0">
                                Event Manager
                              </p>
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
                          Quisque mollis, ante non semper ultricies, nulla
                          sapien sollicitudin augue, id scelerisque nunc turpis
                          nec urna. Class aptent taciti sociosqu ad litora
                          torquent per conubia nostra.
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
                        <h4 className="mb-2">
                          Maintaining a successful business
                        </h4>

                        <p>
                          Quisque mollis, ante non semper ultricies, nulla
                          sapien sollicitudin augue, id scelerisque nunc turpis
                          nec urna. Class aptent taciti sociosqu.
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
                              <p className="speakers-text mb-0">
                                Event Manager
                              </p>
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
                          Quisque mollis, ante non semper ultricies, nulla
                          sapien sollicitudin augue, id scelerisque nunc turpis
                          nec urna.
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
                          There is a plenty of great HTML CSS templates
                          available at TemplateMo.com website for your
                          businesses. You can download, edit and use any
                          template for any purpose. Please let us know{" "}
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

        <section className="call-to-action section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-12">
                <h2 className="text-white mb-4">
                  Become an <u className="text-info">event speaker?</u>
                </h2>

                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut dolore
                </p>
              </div>

              <div className="col-lg-3 col-12 ms-lg-auto mt-4 mt-lg-0">
                <a href="#section_5" className="custom-btn btn">
                  Register Today
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing section-padding" id="section_5">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-12 text-center mx-auto mb-5">
                <h2>
                  Get Your <u className="text-info">Tickets</u>
                </h2>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mb-5 mb-lg-0">
                <div className="pricing-thumb bg-white shadow-lg">
                  <div className="pricing-title-wrap d-flex align-items-center">
                    <h4 className="pricing-title text-white mb-0">
                      Early Bird
                    </h4>

                    <h5 className="pricing-small-title text-white mb-0 ms-auto">
                      $640
                    </h5>
                  </div>

                  <div className="pricing-body">
                    <p>
                      <i className="bi-cup me-2"></i> All-Day Coffee + Snacks
                    </p>

                    <p>
                      <i className="bi-controller me-2"></i> After Party
                    </p>

                    <p>
                      <i className="bi-chat-square me-2"></i> 24/7 Support
                    </p>

                    <div className="border-bottom pb-3 mb-4"></div>

                    <p>Quick group meetings for multiple teams</p>

                    <a className="custom-btn btn mt-3" href="#">
                      Buy Tickets
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mb-5 mb-lg-0">
                <div className="pricing-thumb bg-white shadow-lg">
                  <div className="pricing-title-wrap d-flex align-items-center">
                    <h4 className="pricing-title text-white mb-0">Gold</h4>

                    <h5 className="pricing-small-title text-white mb-0 ms-auto">
                      $840
                    </h5>
                  </div>

                  <div className="pricing-body">
                    <p>
                      <i className="bi-cup me-2"></i> All-Day Coffee + Snacks
                    </p>

                    <p>
                      <i className="bi-boombox me-2"></i> Group Meetings + After
                      Party
                    </p>

                    <p>
                      <i className="bi-chat-square me-2"></i> 24/7 Support +
                      Instant Chats
                    </p>

                    <div className="border-bottom pb-3 mb-4"></div>

                    <p>Quick group meetings for multiple teams</p>

                    <a className="custom-btn btn mt-3" href="#">
                      Buy Tickets
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="pricing-thumb bg-white shadow-lg">
                  <div className="pricing-title-wrap d-flex align-items-center">
                    <h4 className="pricing-title text-white mb-0">Platinum</h4>

                    <h5 className="pricing-small-title text-white mb-0 ms-auto">
                      $1,240
                    </h5>
                  </div>

                  <div className="pricing-body">
                    <p>
                      <i className="bi-cash me-2"></i> Cashback $200
                    </p>

                    <p>
                      <i className="bi-boombox me-2"></i> Private Meetings +
                      After Party
                    </p>

                    <p>
                      <i className="bi-chat-square me-2"></i> 24/7 Support +
                      Instant Chats
                    </p>

                    <div className="border-bottom pb-3 mb-4"></div>

                    <p>group talks and private chats for multiple teams</p>

                    <a className="custom-btn btn mt-3" href="#">
                      Buy Tickets
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="venue section-padding" id="section_6">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <h2 className="mb-5">
                  Here you go <u className="text-info">Venue</u>
                </h2>
              </div>

              <div className="col-lg-6 col-12">
                <iframe
                  title="unique"
                  className="google-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511.091461689997!2d-73.9866630916883!3d40.758001294831736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855a96da09d%3A0x860bf5a5e1a00a68!2sTimes%20Square%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e0!3m2!1sen!2ssg!4v1643035529098!5m2!1sen!2ssg"
                  width="100%"
                  height="371.59"
                  loading="lazy"
                ></iframe>
              </div>

              <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <div className="venue-thumb bg-white shadow-lg">
                  <div className="venue-info-title">
                    <h2 className="text-white mb-0">Times Square</h2>
                  </div>

                  <div className="venue-info-body">
                    <h4 className="d-flex">
                      <i className="bi-geo-alt me-2"></i>
                      <span>
                        102 South. 7th Street, New York, NY 10036, USA
                      </span>
                    </h4>

                    <h5 className="mt-4 mb-3">
                      <a href="mailto:hello@yourgmail.com">
                        <i className="bi-envelope me-2"></i>
                        hi@company.com
                      </a>
                    </h5>

                    <h5 className="mb-0">
                      <a href="tel: 305-240-9671">
                        <i className="bi-telephone me-2"></i>
                        010-020-0340
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-padding" id="section_7">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 mx-auto">
                <form
                  className="custom-form contact-form bg-white shadow-lg"
                  action="#"
                  method="post"
                  role="form"
                >
                  <h2>Please Say Hi</h2>

                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>

                    <div className="col-lg-4 col-md-4 col-12">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>

                    <div className="col-lg-4 col-md-4 col-12">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows={5}
                        id="message"
                        name="message"
                        placeholder="Message"
                      ></textarea>

                      <button type="submit" className="form-control">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
