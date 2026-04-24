import Navbar from '../components/header/Navbar'
import Hero from "../components/main/Hero"
import Revenue from "../components/revenue/revenue"
import AiResult from "../components/airesult/AiResult"
import Busniess from "../components/busniess/Busniesss"
import BusniessImpact from "../components/busniess/BusinessImpact"
import HowWeWork from '../components/howwework/Howwework'
import CompanyWork from '../components/companiesworkwithus/Companywork'
import Footer from '../components/footer/Footer'
import Ads from "../components/ads/Ads"
import Reviews from '../components/reviews/Reviews'
const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Revenue />
      <AiResult />
      <Busniess />
      <BusniessImpact />
      <HowWeWork />
      <CompanyWork/>
      <Reviews />
      <Ads />
      <Footer />

    </div>
  )
}

export default Home
