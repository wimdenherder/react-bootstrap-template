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

export function Home() {
  return (
    <div className="App">
      <main>
        <VideoHeader
          youtubeId="qRFcLHo58eQ"
          title="Leadership Conference 2022"
        />

        <VideoGallery />

        <InfoSection
          title="Our story"
          text1="The importance of Leadership Conference in 2022"
          text2="Leadership Event is one-page Bootstrap v5.1.3 CSS layout for your
          website. Thank you for choosing TemplateMo website where you can
          instantly download free CSS templates at no cost."
          text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut dolore"
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
