import Hero from "../sections/Home/Hero";
import HowItWorks from "../sections/Home/HowItWorks";
import WhyChoose from "../sections/Home/WhyChoose";
import OurCoreServices from "../sections/Home/OurCoreServices"
import VoiceDemos from "../sections/Home/VoiceDemos";
import ClientTest from "../sections/Home/ClientTest"
import ReadyToStart from "../sections/Home/ReadtToStart"
import TrustedBy from "../sections/Home/TrustedBy";
import FandQ from "../sections/Home/FandQ"
import ReadyToTurn from "../sections/Home/ReadyToTurn"
import Footer from "../sections/Home/Footer"

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <WhyChoose />
      <OurCoreServices/>
       <HowItWorks />
       <VoiceDemos/>
       <ClientTest/>
       <ReadyToStart/>
       <TrustedBy/>
       <FandQ/>
       <ReadyToTurn/>
       <Footer/>
    </div>
  );
};

export default Home;