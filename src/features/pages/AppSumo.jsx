import Navbar from "../components/header/Navbar";
import StoryHero from "../components/main/StoryHero";
import CaseStudyHero from "../components/CaseStudy/CaseStudyHero";
import CaseStudyStory from "../components/CaseStudy/CaseStudyStory";
import ReadytoTalk from "../components/Talk/ReadytoTalk";
import Footer from "../components/footer/Footer";
import HeroImg from "../../assets/Marketing/Hero.png";
import UserImg from "../../assets/casestudy1/User.png";
import AppSumoLogo from "../../assets/casestudy1/AppSumo.png";
import IiIcon from "../../assets/casestudy1/Ii.svg";
import FbIcon from "../../assets/casestudy1/Fb.svg";
import LsIcon from "../../assets/casestudy1/Ls.svg";

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
      <ReadytoTalk />
      <Footer />
    </div>
  );
};

export default AppSumo;
