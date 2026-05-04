import Navbar from "../components/header/Navbar";
import StoryHero from "../components/main/StoryHero";
import CaseStudyStory from "../components/CaseStudy/CaseStudyStory";
import CaseStudyExperience from "../components/CaseStudy/CaseStudyExperience";
import CaseStudyText from "../components/CaseStudy/CaseStudyText";
import CaseStudyTabs from "../components/CaseStudy/CaseStudyTabs";
import Img1 from "../../assets/CaseStudy2/Img1.png";
import ReadytoTalk from "../components/Talk/ReadytoTalk";
import Footer from "../components/footer/Footer";
import HeroImg from "../../assets/Marketing/Hero.png";
import UserImg from "../../assets/CaseStudy2/User.png";
import FcLogo from "../../assets/CaseStudy2/Fc.png";
import IiIcon from "../../assets/CaseStudy1/Ii.svg";
import FbIcon from "../../assets/CaseStudy1/Fb.svg";
import LsIcon from "../../assets/CaseStudy1/Ls.svg";
import CaseStudyHero from "../components/CaseStudy/CaseStudyHero";
import BgBlue from "../../assets/CaseStudy1/BgBlue.png";
import Img2 from "../../assets/CaseStudy2/Img2.png";
import RevenueImg from "../../assets/CaseStudy1/Revenue.png";
import ChatIcon from "../../assets/CaseStudy1/ChatIcon.svg";
import FollowUpIcon from "../../assets/CaseStudy1/FollowUp.svg";
import QuotesIcon from "../../assets/CaseStudy1/Quotes.svg";


const tabsData = [
  {
    label: "Successful Deal",
    content: `Noah appreciates Zing going the extra mile to ensure his Shopify app deal completed successfully.<br/><br/><strong>"The Shopify app for SumoMe is fully up to-date and compliant"</strong><br/>he says breathing a sigh of relief.`,
    image: Img1,
    bgImage: BgBlue,
  },
  {
    label: "Critical Reliability",
    content: `Zing ensured every critical component was tested and verified before launch.<br/><br/><strong>"The reliability of the system exceeded our expectations"</strong><br/>Noah noted after the final review.`,
    image: Img1,
    bgImage: BgBlue,
  },
  {
    label: "High Confidence",
    content: `Noah felt confident throughout the entire process thanks to Zing's transparent communication.<br/><br/><strong>"I always knew exactly where things stood"</strong><br/>he said with satisfaction.`,
    image: Img1,
    bgImage: BgBlue,
  },
  {
    label: "Final Recommendation",
    content: `After the successful project, Noah was happy to recommend Zing to others in his network.<br/><br/><strong>"I would absolutely work with Zing again"</strong><br/>he confirmed without hesitation.`,
    image: Img1,
    bgImage: BgBlue,
  },
];

const experienceSteps = [
  {
    icon: ChatIcon,
    title: "The Strategic Challenge",
    desc: "Our main objective was identifying how we should differentiate from the others. How do we make the distinction between us and them.",
  },
  {
    icon: FollowUpIcon,
    title: "The Collaborative Approach",
    desc: "To overcome this, the chairman met with the team at Zing early on for preliminary discussions.",
  },
  {
    icon: QuotesIcon,
    title: "The Creative Vision",
    desc: "We did have a lot of creative meetings early on to work out what kind of positioning and packaging would be needed to present Future Connoisseurs globally.",
  },
];
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

            <CaseStudyExperience
        title="Standing out from the crowd"
        subtitle="With more than 27 luxury associations operating on a global level, Shahzad recognized the importance of distinguishing Future Connoisseurs from them. "
        steps={experienceSteps}
        bgImage={BgBlue}
        topImage={Img2}
        bottomImage={RevenueImg}
        pullQuote1="I was blown away"
        pullQuote1Sub="Noah was impressed by his experience working with Zing for his Shopify app needs."
        pullQuote2='"They delivered it on time, on budget and we were able to get that knocked out really, really solidly. I was so impressed."'
        pullQuote2Sub='Noah enjoyed working with a team that was "so professional".'
        buttonText="START NOW"
      />

      <CaseStudyText
        heading="Further work needed"
        subtitle="When Noah went back to Shopify to share the app, he discovered some issues in another part of the app that needed resolution."
        quotes={[
          `"But I'm excited to take the time to share these guys with other people if they want their stuff worked on for Shopify. I think Dan is the go-to team I'm recommending!"`,
          "Once again, that's on track. It's on time. It's on budget. And I almost never do testimonials. Someone even asked me to do one last week. And I said, no, because it's not good enough.",
        ]}
      />
      <CaseStudyTabs tabs={tabsData} />
      <ReadytoTalk />
      <Footer />
    </div>
  );
};

export default FutureConnoisseurs;
