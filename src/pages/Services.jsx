import Advantage from "../sections/Services/Adavantage";
import BuidFaster from "../sections/Services/BuildFaster"
import IndustriesServe from "../sections/Services/IndusriesServe";
import OurProcess from "../sections/Services/OurProcess";
import TestAutomation from "../sections/Services/TestAutomation"
import BattleStack from "../sections/Services/BattleStack"
import GetStart from "../sections/Services/GetStart"
import Footer from "../sections/Home/Footer";

function Services (){
  return(
    <div className="pt-6">
       <BuidFaster/>
    <OurProcess/>
    <TestAutomation/>
    <Advantage/>
    <IndustriesServe/>
    <BattleStack/>
    <GetStart/>
    <Footer/>
    </div>
  );
}
export default Services;