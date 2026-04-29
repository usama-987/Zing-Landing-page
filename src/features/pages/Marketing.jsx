import Navbar from '../components/header/Navbar'
import HeroBanner from '../components/main/HeroBanner'
import HeroImg from "../../assets/Marketing/Hero.png";
import Footer from '../components/footer/Footer';
import Reviews from '../components/reviews/Reviews';
import DomainSection from '../components/Domain/DomainSection';
import WhatWeDo from "../components/Whatwedo/WhatWeDo";
import HowWePropel from "../components/Whatwedo/HowWePropel";
import FAQSection from '../components/FAQs/Faqs';
import ReadytoTalk from '../components/Talk/ReadytoTalk';

const Marketing = () => {
  return (
     <div className="min-h-screen">
      <Navbar />
      <HeroBanner
        title="Growth Partner Success"
        highlight="Development Team"
        description='Empowering Business Growth Through E-Commerce'
        buttonText="GET STARTED"
        bgImage={HeroImg}
      />
      <WhatWeDo />
      <HowWePropel/>
      <DomainSection/>
      <Reviews/>
      <FAQSection/>
      <ReadytoTalk />
      <Footer />
    </div>
  )
}

export default Marketing