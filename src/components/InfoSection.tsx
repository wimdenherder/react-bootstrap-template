import React from "react";

interface InfoSectionProps {
  title?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  button1?: string;
  button2?: string;
}

function InfoSection(props: InfoSectionProps) {
  function layoutTitle(text: string = "Title missing") {
    const words = text.split(" ");
    return (
      <>
        {words[0]} <u className="text-info">{words[1]}</u>{" "}
        {words.slice(2).join(" ")}
      </>
    );
  }
  return (
    <section className="about section-padding" id="section_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12">
            <h2 className="mb-4">{layoutTitle(props.title)}</h2>
          </div>

          <div className="col-lg-6 col-12">
            <h3 className="mb-3">{props.text1}</h3>

            <p>{props.text2}</p>

            <a
              className="custom-btn custom-border-btn btn custom-link mt-3 me-3"
              href="#section_3"
            >
              {props.button1}
            </a>

            <a className="custom-btn btn custom-link mt-3" href="#section_4">
              {props.button2}
            </a>
          </div>

          <div className="col-lg-6 col-12 mt-5 mt-lg-0">
            <h4>{props.text3}</h4>

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
