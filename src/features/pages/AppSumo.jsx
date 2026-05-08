import Navbar from "../components/header/Navbar";
import StoryHero from "../components/main/StoryHero";
import CaseStudyHero from "../components/CaseStudy/CaseStudyHero";
import CaseStudyStory from "../components/CaseStudy/CaseStudyStory";
import CaseStudyExperience from "../components/CaseStudy/CaseStudyExperience";
import CaseStudyText from "../components/CaseStudy/CaseStudyText";
import CaseStudyTabs from "../components/CaseStudy/CaseStudyTabs";
import Img1 from "../../assets/CaseStudy1/Img1.png";
import ReadytoTalk from "../components/Talk/ReadytoTalk";
import OldFooter from "../components/footer/OldFooter";
import HeroImg from "../../assets/Marketing/Hero.png";
import UserImg from "../../assets/CaseStudy1/User.png";
import AppSumoLogo from "../../assets/CaseStudy1/AppSumo.png";
import IiIcon from "../../assets/CaseStudy1/Ii.svg";
import FbIcon from "../../assets/CaseStudy1/Fb.svg";
import LsIcon from "../../assets/CaseStudy1/Ls.svg";
import BgBlue from "../../assets/CaseStudy1/BgBlue.png";
import ChatImg from "../../assets/CaseStudy1/Chat.png";
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
    title: "The Response from Dan Melnick",
    desc: "Dan messaged me very promptly, very professionally and I think I said I was busy.",
  },
  {
    icon: FollowUpIcon,
    title: "The Follow-Up",
    desc: "And then Dan followed up, which most agencies and companies never do. That was a really great sign.",
  },
  {
    icon: QuotesIcon,
    title: "The Recommendation and Quote",
    desc: "He was able to give us a quote that seemed reasonable, really fair and a realistic timeline. And I was like, okay, I'll give him a shot.",
  },
];

const sections = [
  {
    icon: IiIcon,
    title: "Industry Influence",
    desc: "When the Chief Sumo of Sumo Group puts out a call for support, developers listen, and for good reason.",
  },
  {
    icon: FbIcon,
    title: "Early Career at Facebook",
    desc: "After graduating from UC Berkeley, Noah Kagan joined Facebook. As employee #30, he changed that business' course by inventing status updates, developing its ad platform and working on its first mobile app.",
  },
  {
    icon: LsIcon,
    title: "Leadership at Sumo Group",
    desc: "In 2010, he became CEO of the Sumo Group. The company valued at $70 million - equips small businesses and 'solopreneurs' with the ecommerce and marketing tools they need to grow enabling them to overcome the obstacles standing in the way of success.",
  },
];

const AppSumo = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <StoryHero
        title="Entrepreneurial"
        highlight="Success"
        description="Zing Helped AppSumo <strong>Make Millions $</strong>"
        buttonText="GET STARTED"
        bgImage={HeroImg}
        iframeSrc="https://www.youtube.com/embed/63YuIb6S3WA?si=OyHZgfFJFRIyqHTd"
      />
      <CaseStudyHero
        heading="How Zing responded to AppSumo CEO Noah Kagan's call"
        sections={sections}
        userImage={UserImg}
        logoImage={AppSumoLogo}
      />
      
      <CaseStudyStory
        heading="The call for help that overwhelmed everyone"
        blockquote={`Over the years, Noah's worked with people worldwide and currently oversees a team of around 100 people at Sumo. <strong>"We've hired, worked with probably thousands of people by this point,"</strong> he explains.`}
        quotes={[
          "We had a Shopify app as part of our SumoMe tool, which we've sold. So there's a new owner running SumoMe, which is email pop-ups for e-commerce and for WordPress sites for people wanting to grow their email lists.",
          "I got a lot of DMs and a lot of them were like, hey, we're going to do it. I think one person even quoted $100,000 and I was like, it's just a few, few updates.",
          "So I posted on X/Twitter, saying 'Hey, I'm looking for Shopify help with our app because it was outdated. It was actually about to get kicked off because we hadn't updated it in a few year.",
        ]}
        stats={[
          { value: "100+", label: "Team members at Sumo" },
          { value: "1,000s", label: "People hired & worked with" },
          { value: "$100k", label: "one quote received for", sublabel: '"a few updates"' },
        ]}
      />
      <CaseStudyExperience
        title="Noah's Experience with Zing"
        subtitle="Noah's journey from initial contact to project completion highlights the efficiency and professionalism of working with the Zing team."
        steps={experienceSteps}
        bgImage={BgBlue}
        topImage={ChatImg}
        bottomImage={RevenueImg}
        pullQuote1="I was blown away"
        pullQuote1Sub="Noah was impressed by his experience working with Zing for his Shopify app needs."
        pullQuote2='They delivered it on time, on budget and we were able to get that knocked out really, really solidly. I was so impressed.'
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
      <OldFooter />
    </div>
  );
};

export default AppSumo;
