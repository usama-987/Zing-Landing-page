import { useState } from "react";
import Logo from "..//..//..//assets/logo.png";
import arrow from "../../../assets/SVG.png";

const defaultNavLinks = [
  {
    id: 1,
    label: "Home",
    href: "#Home",
    dropdown: ["Overview", "About Us", "Mission"],
  },
  {
    id: 2,
    label: "Services",
    href: "#Services",
    dropdown: ["Web Design", "SEO", "Marketing"],
  },
  { id: 3, label: "Story", href: "#Story" },
  { id: 4, label: "Partners", href: "#Partners" },
  { id: 5, label: "Blogs", href: "#Blogs" },
];

export default function Navbar({
  navLinks = defaultNavLinks,
  ctaText = "FREE AUDIT",
  ctaHref = "#audit",
  onCtaClick,
}) {
  const [activeLink, setActiveLink] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const handleLinkClick = (id, href) => {
    setActiveLink(id);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#F0F0F0] relative">
      <div className="mx-auto max-w-[1600px] px-4 py-3 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src={Logo} alt="Logo" className="h-6 sm:h-8 md:h-10" />
            </a>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">

            {navLinks.map((link) => (
              <div key={link.id} className="relative">

                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() =>
                    link.dropdown
                      ? toggleDropdown(link.id)
                      : handleLinkClick(link.id, link.href)
                  }
                >
                  <span
                    className={`text-sm font-medium ${
                      activeLink === link.id
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {link.label}
                  </span>

                  {link.dropdown && (
                    <img src={arrow} alt="arrow" className="w-3 h-3" />
                  )}
                </div>

                {/* Desktop Dropdown */}
                {link.dropdown && openDropdown === link.id && (
                  <div className="absolute top-8 left-0 bg-[#F0F0F0] shadow-lg rounded-lg py-2 w-40 z-50">
                    {link.dropdown.map((item, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA */}
            <button
              onClick={() => {
                if (ctaHref.startsWith("#")) {
                  document.querySelector(ctaHref)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
                onCtaClick?.();
              }}
              className="bg-gray-900 text-white px-6 py-2 rounded-lg text-xs font-semibold uppercase hover:bg-gray-800"
            >
              {ctaText}
            </button>
          </div>

          {/* MOBILE HAMBURGER */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-2xl text-black"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F0F0F0] shadow-lg z-50">
          <div className="flex flex-col px-6 py-4 gap-4">

            {navLinks.map((link) => (
              <div key={link.id}>

                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => {
                    if (link.dropdown) {
                      setMobileDropdown(
                        mobileDropdown === link.id ? null : link.id
                      );
                    } else {
                      handleLinkClick(link.id, link.href);
                      setMobileOpen(false);
                    }
                  }}
                >
                  <span className="text-sm font-medium text-gray-800">
                    {link.label}
                  </span>

                  {link.dropdown && (
                    <img src={arrow} alt="arrow" className="w-3 h-3" />
                  )}
                </div>

                {/* Mobile Dropdown */}
                {link.dropdown && mobileDropdown === link.id && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    {link.dropdown.map((item, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-sm text-gray-600 hover:text-blue-600"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA MOBILE */}
            <button
              onClick={() => {
                setMobileOpen(false);
                if (ctaHref.startsWith("#")) {
                  document.querySelector(ctaHref)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
                onCtaClick?.();
              }}
              className="bg-gray-900 text-white py-2 rounded-lg text-sm"
            >
              {ctaText}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}