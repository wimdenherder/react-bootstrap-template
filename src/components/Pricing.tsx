import React from "react";

function Pricing() {
  return (
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
                <h4 className="pricing-title text-white mb-0">Early Bird</h4>

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
                  <i className="bi-chat-square me-2"></i> 24/7 Support + Instant
                  Chats
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
                  <i className="bi-boombox me-2"></i> Private Meetings + After
                  Party
                </p>

                <p>
                  <i className="bi-chat-square me-2"></i> 24/7 Support + Instant
                  Chats
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
  );
}

export default Pricing;
