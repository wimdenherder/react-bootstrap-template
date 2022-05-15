import React from "react";

function CallToAction() {
  return (
    <section className="call-to-action section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-12">
            <h2 className="text-white mb-4">
              Become an <u className="text-info">event speaker?</u>
            </h2>

            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut dolore
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
  );
}

export default CallToAction;
