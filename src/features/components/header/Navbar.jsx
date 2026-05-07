import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import arrow from "../../../assets/SVG.png";

const defaultNavLinks = [
  {
    id: 1,
    label: "Home",
    to: "/",
  },
  {
    id: 2,
    label: "Services",
    href: "#Services",
    dropdown: [
      { label: "Developer Augmentation", to: "/developer-augmentation" },
      { label: "Marketing", to: "/marketing" },
      { label: "Software Development", to: "/software-development" },
    ],
  },
  { id: 3,
    label: "Story",
    href: "#Story" ,
  dropdown: [
      { label: "AppSumo", to: "/story/appsumo" },
      { label: "Authentic Detective", to: "/story/authentic-detective" },
      { label: "Future Connoisseurs", to: "/story/future-connoisseurs" },
  ],
},

  { id: 4, label: "Partners", to: "/partners" },
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
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setMobileDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigate = useNavigate();

  const handleLinkClick = (id, link) => {
    setActiveLink(id);
    if (link.to) {
      navigate(link.to);
    } else if (link.href) {
      const el = document.querySelector(link.href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <nav ref={navRef} className="w-full sticky top-0 z-50 bg-[#F0F0F0] ">
      <div className="mx-auto max-w-[1600px] px-4 py-3 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between px-6 sm:px-4">

          {/* LOGO */}
          <div className="shrink-0">
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
                      : handleLinkClick(link.id, link)
                  }
                >
                  <span
                    className={`text-sm font-medium ${
                      activeLink === link.id
                        ? "text-blue-600"
                        : "text-[#000000] font-normal hover:text-blue-600"
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
                  <div className="absolute top-8 left-0 bg-[#FFFFFF] rounded-sm shadow-xl z-50 min-w-[220px] overflow-hidden">
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        to={item.to}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-5 py-4 text-sm text-left text-[#1C1C1E] font-normal hover:bg-gray-200 transition-colors duration-150 relative"
                      >
                        {item.label}
                        {i !== link.dropdown.length - 1 && (
                          <div className="absolute bottom-0 left-5 right-5 border-b border-gray-300" />
                        )}
                      </Link>
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
              className="bg-[#1C1C1E] text-[#FFFFFF] px-6 py-2 rounded-lg text-xs font-medium uppercase hover:bg-gray-800"
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
                      handleLinkClick(link.id, link);
                      setMobileOpen(false);
                    }
                  }}
                >
                  <span className="text-sm font-normal text-[#000000]">
                    {link.label}
                  </span>

                  {link.dropdown && (
                    <img src={arrow} alt="arrow" className="w-3 h-3" />
                  )}
                </div>

                {/* Mobile Dropdown */}
                {link.dropdown && mobileDropdown === link.id && (
                  <div className="mt-2 bg-[#F0F0F0] rounded-xl shadow-md overflow-hidden">
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        to={item.to}
                        className="block px-5 py-4 text-sm text-left text-[#1C1C1E] font-normal hover:bg-gray-200 transition-colors duration-150 relative"
                        onClick={() => { setMobileOpen(false); setMobileDropdown(null); }}
                      >
                        {item.label}
                        {i !== link.dropdown.length - 1 && (
                          <div className="absolute bottom-0 left-5 right-5 border-b border-gray-300" />
                        )}
                      </Link>
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
              className="bg-[#1C1C1E] text-[#FFFFFF] py-2 rounded-lg text-sm"
            >
              {ctaText}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}