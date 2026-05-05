import Logo from "../../../assets/logo.png";

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
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-8 pb-6">

        {/* Logo row */}
        <img src={Logo} alt="Zing logo" className="h-7 mb-3" />

        {/* Description + columns row */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Left — desc + data notice */}
          <div className="flex flex-col justify-between md:w-[35%]" style={{ minHeight: "160px" }}>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">
              Zing, your ultimate growth partner for e-commerce success!
            </p>
            <p className="text-sm font-semibold text-gray-900 mt-6 md:mt-0">
              Your data never stored.{" "}
              <a href="/trust-center" className="underline hover:text-gray-600 transition-colors">
                View Trust Center.
              </a>
            </p>
          </div>

          {/* Right — 4 columns, top aligned with description */}
          <div className="flex flex-1 flex-wrap gap-y-8 justify-between">
            {footerData.map((section, i) => (
              <div key={i} className="min-w-[100px]">
                <h3 className="text-sm font-semibold text-gray-900 mb-5">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-2 pt-3 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © 2026 Zing, Inc. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
