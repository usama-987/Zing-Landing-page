import Navbar from '../components/header/Navbar'
import HeroBanner from '../components/main/HeroBanner'
import HeroImg from "../../assets/Marketing/Hero.png";
import FeatureSection from '../components/revenue/Features'
import BackendSection from '../components/BackendSection/BackendSection'
import FrontendSection from '../components/BackendSection/FrontendSection'
import BlockchainSection from '../components/BackendSection/BlockchainSection';
import AugAds from '../components/ads/AugAds'
import Footer from '../components/footer/Footer'
import DevelopmentSection from '../components/BackendSection/DevelopmentSection';
import Ui from '../components/BackendSection/Ui';
import WebsiteBuilder from '../components/WebsiteBuilder/WebsiteBuilder';
import MobileAppDevelopment from '../components/WebsiteBuilder/MobileAppDevelopment';
import Ecommerce from '../components/WebsiteBuilder/Ecommerce';

const DeveloperAugmentation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner
        title="Augmenting Your"
        highlight="Development Team"
        buttonText="GET STARTED"
        bgImage={HeroImg}
      />
      <FeatureSection />
      <BackendSection />
      <FrontendSection />
      <Ecommerce />
      <Ui />
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="bg-white p-8 md:p-12 space-y-16 md:space-y-20">
          <WebsiteBuilder />
          <MobileAppDevelopment />
        </div>
      </div>
      <BlockchainSection />
      <DevelopmentSection/>
      <AugAds />
      <Footer />
    </div>
  )
}

export default DeveloperAugmentation
