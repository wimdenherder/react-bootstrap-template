import React from "react";

function VideoGallery() {
  const props = [
    { id: "KZu91q9gZQc", description: "Dream Theater 2000" },
    { id: "mP6qQCgp4bs", description: "Dream Theater 2010" },
    { id: "TpsiXS_iUG8", description: "Dream Theater 2022" },
  ];
  return (
    <section className="highlight">
      <div className="container">
        <div className="row">
          {props.map((item) => (
            <div className="col-lg-4 col-md-6 col-12">
              <div className="highlight-thumb">
                <img
                  src={"https://img.youtube.com/vi/" + item.id + "/0.jpg"}
                  className="highlight-image img-fluid"
                  alt=""
                />

                <div className="highlight-info">
                  <h3 className="highlight-title">{item.description}</h3>

                  <a
                    href={"https://www.youtube.com/watch?v=" + item.id}
                    className="bi-youtube highlight-icon"
                  ></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoGallery;
