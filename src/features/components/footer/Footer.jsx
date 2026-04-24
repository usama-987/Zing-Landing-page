import Logo from "../../../assets/Logo.png";

const footerData = [
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Security", href: "/security" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Platform",
    links: [
      { name: "Compose", href: "/compose" },
      { name: "Guard", href: "/guard" },
      { name: "Command", href: "/command" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Workflow", href: "/workflow" },
      { name: "Team", href: "/team" },
      { name: "Industry", href: "/industry" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "DPA", href: "/dpa" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full py-8 md:py-10 bg-white">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-wrap items-start justify-between gap-8">

          {/* Left Side - Logo and Description */}
          <div className="w-full md:w-auto md:max-w-xs">
            <img src={Logo} alt="Zing logo" className="h-8 mb-3" />
            <p className="text-sm text-gray-500 leading-relaxed">
              Zing, your ultimate growth partner for e-commerce success!
            </p>
          </div>

          {/* Links - All in one row */}
          <div className="flex flex-wrap gap-8 md:gap-12 lg:gap-16">
            {footerData.map((section, index) => (
              <div key={index} className="min-w-[100px]">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">
                  {section.title}
                </h3>

                <ul className="space-y-2 text-sm text-gray-500">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="hover:text-gray-900 transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Your data never stored - Above the line */}
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            Your data never stored.{" "}
            <a href="/trust-center" className="underline hover:text-gray-900">
              View Trust Center
            </a>
            .
          </p>
        </div>

        {/* Bottom Section - Copyright on left */}
        <div className="mt-3 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © 2026 Zing, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;