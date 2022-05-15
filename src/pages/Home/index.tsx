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

        <InfoSection />

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
