import Navbar from "../components/header/Navbar";
import OldFooter from "../components/footer/OldFooter";
import HeroBanner from "../components/main/HeroBanner";
import HeroImg from '../../assets/Marketing/Hero.png'
import Partner from "../components/WhyPartner/Partner";
import ReadytoTalk from "../components/Talk/ReadytoTalk";
import PartnerSection from "../components/BackendSection/PartnerSection";

const Partners = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner
              title="TRUSTED PARTNERS"
               description={
    <>
      Zing partners for innovative software solutions, driving{" "}
      <span className="font-black">growth and success</span>.
    </>
  }
              buttonText="GET STARTED"
              bgImage={HeroImg}
            />
      <Partner />
      <PartnerSection/>
      <ReadytoTalk/>
      <OldFooter />
    </div>
  );
};

export default Partners;
