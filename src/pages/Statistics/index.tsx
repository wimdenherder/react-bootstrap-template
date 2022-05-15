import "./style.css";
import { Link } from "react-router-dom";
import VideoHeader from "../../components/VideoHeader";
import VideoGallery from "../../components/VideoGallery";
import InfoSection from "../../components/InfoSection";
import Speakers from "../../components/Speakers";
import CallToAction from "../../components/CallToAction";
import Schedule from "../../components/Schedule";
import Pricing from "../../components/Pricing";
import Venue from "../../components/Venue";
import Contact from "../../components/Contact";

export function Statistics() {
  return (
    <div className="App">
      <main>
        <VideoHeader youtubeId="qRFcLHo58eQ" title="Statistics" />

        <VideoGallery />

        <InfoSection
          title="Statistics"
          text1="The importance of Statistics "
          text2="Statistics are used to make decisions, to predict future trends, and to evaluate the performance of companies. Statistics are used to make decisions, to predict future trends, and to evaluate the performance of companies."
          text3="We like to think that statistics are the most important thing in the world."
          button1="Meet Speakers"
          button2="Check out Schedule"
        />

        <Speakers />

        <Schedule />

        <CallToAction />

        <Pricing />

        <Venue />

        <Contact />
      </main>
    </div>
  );
}
