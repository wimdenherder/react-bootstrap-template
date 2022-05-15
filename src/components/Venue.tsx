import React from "react";

function Venue() {
  return (
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
                  <span>102 South. 7th Street, New York, NY 10036, USA</span>
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
  );
}

export default Venue;
