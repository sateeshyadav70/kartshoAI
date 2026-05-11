import TeamMain from "../sections/Team/TeamMain"
import FounderAndOperator from "../sections/Team/FounderAndOperator"
import BuyTheNumbers from "../sections/Team/BuyTheNumbers"
import MinldStone from "../sections/Team/MildStone"
import ExpectCall from "../sections/Team/ExpectCall"
import Footer from "../sections/Home/Footer"
const Team= () => {
  return (
    <div className="pt-6">
      <TeamMain/>
      <FounderAndOperator/>
      <BuyTheNumbers/>
      <MinldStone/>
      <ExpectCall/>
      <Footer/>
    </div>
  )
};

export default Team;