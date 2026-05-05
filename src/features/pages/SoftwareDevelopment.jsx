import Navbar from "../components/header/Navbar";
import HeroBanner from "../components/main/HeroBanner";
import HeroImg from '../../assets/Marketing/Hero.png';
import Footer from "../components/footer/Footer";
import FAQSection from "../components/FAQs/Faqs";
import ReadytoTalk from "../components/Talk/ReadytoTalk";
import OurWork from "../components/ourwork/OurWork";
import VideoTestimonials from "../components/VideoTestimonials/VideoTestimonials";
import ComparisonSection from "../components/Comparison/ComparisonSection";


const SoftwareDevelopment = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner
        title="How to Make Millions"
        highlight="Partner Success"
        description={
          <>
            with High Quality{" "}
            <span className="font-extrabold">Software Development</span>.
          </>
        }
        buttonText="GET STARTED"
        bgImage={HeroImg}
      />
      <VideoTestimonials />
      <ComparisonSection />
      <OurWork />
      <FAQSection />
      <ReadytoTalk />
      <Footer />
    </div>
  );
};

export default SoftwareDevelopment