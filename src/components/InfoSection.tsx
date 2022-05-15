import React from "react";

function InfoSection() {
  return (
    <section className="about section-padding" id="section_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12">
            <h2 className="mb-4">
              Our <u className="text-info">Story</u>
            </h2>
          </div>

          <div className="col-lg-6 col-12">
            <h3 className="mb-3">
              The importance of Leadership Conference in 2022
            </h3>

            <p>
              Leadership Event is one-page Bootstrap v5.1.3 CSS layout for your
              website. Thank you for choosing TemplateMo website where you can
              instantly download free CSS templates at no cost.
            </p>

            <a
              className="custom-btn custom-border-btn btn custom-link mt-3 me-3"
              href="#section_3"
            >
              Meet Speakers
            </a>

            <a className="custom-btn btn custom-link mt-3" href="#section_4">
              Check out Schedule
            </a>
          </div>

          <div className="col-lg-6 col-12 mt-5 mt-lg-0">
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut dolore
            </h4>

            <div className="avatar-group border-top py-5 mt-5">
              <img
                src="images/avatar/portrait-good-looking-brunette-young-asian-woman.jpg"
                className="img-fluid avatar-image"
                alt=""
              />

              <img
                src="images/avatar/happy-asian-man-standing-with-arms-crossed-grey-wall.jpg"
                className="img-fluid avatar-image avatar-image-left"
                alt=""
              />

              <img
                src="images/avatar/senior-man-white-sweater-eyeglasses.jpg"
                className="img-fluid avatar-image avatar-image-left"
                alt=""
              />

              <img
                src="images/avatar/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg"
                className="img-fluid avatar-image avatar-image-left"
                alt=""
              />

              <p className="d-inline">120+ People are attending with us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
