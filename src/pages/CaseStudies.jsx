import ServicesMain from "../sections/Services/ServicesMain";
import ServiceList from "../sections/Services/ServiceList";
import ServiceDetails from "../sections/Services/BuildFaster";
import ClientResult from "../sections/CaseStudies/ClientResult"
import FlagShipCases from "../sections/CaseStudies/FlagShipCases"
import MonthlyCall from "../sections/CaseStudies/MonthlyCall"
import Worth from "../sections/CaseStudies/Worth"
import Snapshots from "../sections/CaseStudies/ShanapShot";
import BuyersSay from "../sections/CaseStudies/BuyersSay"
import Playbook from "../sections/CaseStudies/Playbook"
import SeeWork from "../sections/CaseStudies/SeeWork"
import Footer from "../sections/Home/Footer";

const Services = () => {
  return (
    <div className="pt-20">
      <ClientResult/>
      <FlagShipCases/>
      <MonthlyCall/>
      <Worth/>
      <Snapshots/>
      <BuyersSay/>
      <Playbook/>
      <SeeWork/>
      <Footer/>
     
    </div>
  );
};

export default Services;