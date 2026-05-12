import PolicyPage from "../components/Policy/PolicyPage";

const privacyPolicySections = [
  {
    heading: "1. Introduction",
    content: "Welcome to Zing's Privacy Policy. This policy outlines our procedures regarding the collection, use, and disclosure of your information when you use our website.",
  },
  {
    heading: "2. Information Collection and Use",
    content: "We collect several different types of information for various purposes to provide and improve our service to you.",
  },
  {
    heading: "3. Types of Data Collected",
    subsections: [
      {
        subheading: "Personal Data:",
        content: "While using our website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you.",
      },
      {
        subheading: "Usage Data:",
        content: 'We may also collect information on how the website is accessed and used ("Usage Data"). This Usage Data may include information such as your computer\'s Internet Protocol address, browser type, browser version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.',
      },
    ],
  },
  {
    heading: "4. Use of Data",
    content: "We use the collected data for various purposes:",
    list: [
      "To provide and maintain our website",
      "To notify you about changes to our website",
      "To provide customer support",
      "To gather analysis or valuable information so that we can improve our website",
    ],
  },
  {
    heading: "5. Security of Data",
    content: "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
  },
  {
    heading: "6. Links to Other Sites",
    content: "Our website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.",
  },
  {
    heading: "7. Children's Privacy",
    content: 'Our website does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children have provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we will take steps to remove that information from our servers.',
  },
  {
    heading: "8. Changes to This Privacy Policy",
    content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
  },
  {
    heading: "Contact Us:",
    content: "If you have any questions about our Terms and Conditions or Privacy Policy, please contact us:",
  },
  {
    heading: "",
    content: "Southlake Consulting LLC\n3000 S Hulen St,\nFort Worth, TX, 76109",
  },
  {
    heading: "",
    content: "hello@myzing.io",
    isEmail: true,
  },
  {
    heading: "",
    content: "By using our website, you hereby consent to our Terms and Conditions and agree to our Privacy Policy",
  },
];

const PrivacyPolicy = () => {
  return <PolicyPage title="Privacy Policy" sections={privacyPolicySections} />;
};

export default PrivacyPolicy;
