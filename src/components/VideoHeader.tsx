import React from "react";
import "./VideoHeader.css";

interface VideoHeaderProps {
  youtubeId?: string;
  videoPath?: string; // local path to video
  title?: string;
}

function VideoHeader(props: VideoHeaderProps) {
  function layoutTitle(text: string = "Title missing") {
    const words = text.split(" ");
    return (
      <>
        <u className="text-info">{words[0]}</u> {words.slice(1).join(" ")}
      </>
    );
  }
  return (
    <section className="hero" id="section_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12 m-auto">
            <div className="hero-text">
              <h1 className="text-white mb-4">{layoutTitle(props.title)}</h1>

              <div className="d-flex justify-content-center align-items-center">
                <span className="date-text">July 12 to 18, 2022</span>

                <span className="location-text">Times Square, NY</span>
              </div>

              <a
                href="#section_2"
                className="custom-link bi-arrow-down arrow-icon"
              ></a>
            </div>
          </div>
        </div>
      </div>

      <div className="video-wrap">
        {props.youtubeId ? (
          <div className="yt-video-container">
            <iframe
              className="yt-iframe"
              width="100vw"
              height="100vh"
              src={
                "https://www.youtube.com/embed/" +
                props.youtubeId +
                "?autoplay=1&mute=1"
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : props.videoPath ? (
          <video className="custom-video" poster="" autoPlay muted>
            <source src={props.videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default VideoHeader;
