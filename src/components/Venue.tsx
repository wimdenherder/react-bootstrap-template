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
              title="uniqueMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.8524710049046!2d4.8909125658019965!3d52.37309502978659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c73b4b14ef%3A0x7e86dfc7e2ced272!2sDam%2C%20Amsterdam!5e0!3m2!1snl!2snl!4v1652611575860!5m2!1snl!2snl"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="venue-thumb bg-white shadow-lg">
              <div className="venue-info-title">
                <h2 className="text-white mb-0">Our Office</h2>
              </div>

              <div className="venue-info-body">
                <h4 className="d-flex">
                  <i className="bi-geo-alt me-2"></i>
                  <span>De Dam, Amsterdam, Netherlands</span>
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
