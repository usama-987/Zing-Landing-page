import Navbar from "../components/header/Navbar";
import StoryHero from "../components/main/StoryHero";
import CaseStudyStory from "../components/CaseStudy/CaseStudyStory";
import ReadytoTalk from "../components/Talk/ReadytoTalk";
import Footer from "../components/footer/Footer";
import HeroImg from "../../assets/Marketing/Hero.png";
import UserImg from "../../assets/CaseStudy2/User.png";
import FcLogo from "../../assets/CaseStudy2/Fc.png";
import IiIcon from "../../assets/casestudy1/Ii.svg";
import FbIcon from "../../assets/casestudy1/Fb.svg";
import LsIcon from "../../assets/casestudy1/Ls.svg";
import CaseStudyHero from "../components/CaseStudy/CaseStudyHero";


const sections = [
  {
    icon: IiIcon,
    title: "Industry Veteran",
    desc: "With over 25 years of experience and a background as a board chairman in the Middle East, Shahzad Haider leverages deep historical knowledge to navigate the current and future landscape of global luxury.",
  },
  {
    icon: FbIcon,
    title: "Strategic Vision",
    desc: "Upon moving to New York City, Haider identified a gap in the market, leading him to develop a comprehensive ecosystem designed to connect and elevate the luxury fashion sector on a worldwide scale.",
  },
  {
    icon: LsIcon,
    title: "Exclusive Alliance",
    desc: "His venture, Future Connoisseurs, serves as an invitation-only hub for elite designers and innovators, focusing on a collaborative future beyond brands rather than traditional retail models ."
},
];

const FutureConnoisseurs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <StoryHero
        title="Styling for"
        highlight="Success"
        description="Zing Helped Future Connoisseurs <strong>Make Millions $</strong>"
        buttonText="GET STARTED"
        bgImage={HeroImg}
        iframeSrc="https://www.youtube.com/embed/qBavrElRuik?si=EoKG8K378mVBvtdN"
      />
      <CaseStudyHero
        heading="How Zing responded to Future Connoisseurs scale up 3X"
        sections={sections}
        userImage={UserImg}
        logoImage={FcLogo}
      />

      <CaseStudyStory
              heading="The call for help that overwhelmed everyone"
              blockquote={`First, however, he needed to establish its presence online. He recalls:<br>
<strong>“I was looking for someone to create this website. I think it took me seven months…<br>
 I talked to maybe more than 100 people.”</strong><br>
But not just any one would do for such an important project, according to Shahzad. 
`}
              quotes={[
                "I was so desperate because I wanted someone to be desperate to do something. My brief to Zing was, I want you to create a website which makes you proud that you have done it. I don’t want you to create another website…",
                "I want a website that you think will become your signature project. If it’s not that project, don’t do this. There’s no point. I’m not interested. And then he really understood it. And he went all of it. He went all the way."
              ]}
              stats={[
                { value: "7M", label: "Search Duration" },
                { value: "100+", label: "People hired after interviewed" },
                { value: "1", label: "Demanded Signature ", sublabel: 'project' },
              ]}
            />
      <ReadytoTalk />
      <Footer />
    </div>
  );
};

export default FutureConnoisseurs;
