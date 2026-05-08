import Navbar from "../components/header/Navbar";
import StoryHero from "../components/main/StoryHero";
import CaseStudyStory from "../components/CaseStudy/CaseStudyStory";
import CaseStudyExperience from "../components/CaseStudy/CaseStudyExperience";
import CaseStudyText from "../components/CaseStudy/CaseStudyText";
import CaseStudyTabs from "../components/CaseStudy/CaseStudyTabs";
import Img1 from "../../assets/CaseStudy2/Img1.png";
import ReadytoTalk from "../components/Talk/ReadytoTalk";
import OldFooter from "../components/footer/OldFooter";
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
    label: "Launching the Vision",
    content: `The Future Connoisseurs website launched officially in 202X. `,
    image: Img1,
    bgImage: BgBlue,
  },
  {
    label: "Audience Feedback",
    content: `Zing ensured every critical component was tested and verified before launch.<br/><br/><strong>"The reliability of the system exceeded our expectations"</strong><br/>Noah noted after the final review.`,
    image: Img1,
    bgImage: BgBlue,
  },
  {
    label: "Strategic Alignment",
    content: `Noah felt confident throughout the entire process thanks to Zing's transparent communication.<br/><br/><strong>"I always knew exactly where things stood"</strong><br/>he said with satisfaction.`,
    image: Img1,
    bgImage: BgBlue,
  },
  {
    label: "Relentless Perfection",
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
        pullQuote1="I never felt like they had other clients. I know they have so many, but I was never made to feel like I was anything but their number one priority."
        pullQuote1Sub=" "
        pullQuote2='They also took on my project as if it was their own. Treating it as if it was their own company, their own website. That personal touch, dedication and commitment are very, very rare.'
        pullQuote2Sub='Looking back on his experience working with Zing, Shahzad appreciated the way that Zing treated him throughout. 
'
        buttonText="START NOW"
      />

      <CaseStudyText
        heading="Further work needed"
        subtitle="In web development, the greatest challenge often comes when clients don’t know what they want. With Shahzad, the Zing team found the exact opposite. He confesses:"
        quotes={[
          `He confesses: “From day one I knew exactly what I wanted.”
`,
          "Armed with that strong vision, He cautioned his colleagues at Zing: “You have a mountain to achieve and we don’t have any tools.” ",
        ]}
      />
      <CaseStudyTabs tabs={tabsData} />
      <ReadytoTalk />
      <OldFooter />
    </div>
  );
};

export default FutureConnoisseurs;
