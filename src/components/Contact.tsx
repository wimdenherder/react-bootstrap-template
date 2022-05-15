import React from "react";

function Contact() {
  return (
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
  );
}

export default Contact;
