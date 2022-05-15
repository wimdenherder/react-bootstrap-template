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

export function Activity() {
  return (
    <div className="App">
      <main>
        <VideoHeader youtubeId="f2qfAlXi6rA" title="Activity 2022" />

        <VideoGallery />

        <InfoSection
          title="Why we care"
          text1="Music is the foundation of a good life"
          text2="Dream Theater is an American progressive metal band formed in 1985 under the name Majesty by John Petrucci, John Myung and Mike Portnoy while they attended Berklee College of Music in Boston, Massachusetts."
          text3="Dream Theater recorded many albums"
          button1="Mike Portnoy"
          button2="John Petrucci"
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
