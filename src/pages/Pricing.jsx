import PricingMain from "../sections/Pricing/PricingMain"
import CustomeCall from "../sections/Pricing/CustomeCall"
import AllPlans from "../sections/Pricing/AllPlans"
import FrequentlyAsked from "../sections/Pricing/FrequentlyAsked"
import ReadyToTurn from "../sections/Home/ReadyToTurn"
import Footer from "../sections/Home/Footer"
const Pricing= () => {
  return (
    <div className="pt-6">
      <PricingMain/>
      <CustomeCall/>
      <AllPlans/>
      <FrequentlyAsked/>
      <ReadyToTurn/>
      <Footer/>
    </div>
  )
};

export default Pricing;