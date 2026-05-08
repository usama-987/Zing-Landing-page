import  { useState, useEffect, useRef } from "react";


const noiseUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)' opacity='0.13'/%3E%3C/svg%3E")`;
const playBg = `${noiseUrl}, linear-gradient(145deg, #dce8f5 0%, #c4d8ec 40%, #b8cfe8 100%)`;

const videos = [
  {
    id: "63YuIb6S3WA",
    tab: "AppSumo",
    label: "AppSumo:",
    title: "How Zing helped Noah Kagan make Millions",
    desc: "Dan [Zing] is the go-to team I'm recommending: it was a term in our sales agreement that if we didn't have the app working they weren't going to give us millions of dollars... it was critical that we found someone who was reliable.",
  },
  {
    id: "wzyJaYEkIuE",
    tab: "JM Packaging",
    label: "JM Packaging:",
    title: "How Zing's great communication made Julia's web dreams a reality",
    desc: "What I loved about working with Zing is that these guys really communicate with their customers. Previously, I experienced the opposite of that. Sometimes there would be delays and I wouldn't hear anything from my web developer until a week later.",
  },
  {
    id: "Qsgqvi-JKZA",
    tab: "Authentic Detective",
    label: "Authentic Detective:",
    title: "How Zing helped Alex Shtutman take his business to the next level",
    desc: "For me, it's all about the execution and the guys at Zing make it happen. It's been a crazy change in my life and I had not done anything like this before meeting Zing. I was very blessed to have that happen",
  },
  {
    id: "qBavrElRuik",
    tab: "The Future Connoisseurs",
    label: "The Future Connoisseurs:",
    title: "How Zing helped Shahzad Haider scale by 3X",
    desc: "I never felt like they had other clients. I know they have so many, but I was never made to feel like I was anything but their number one priority. They also took on my project as if it was their own. Treating it as if it was their own company, their own website. That personal touch, dedication and commitment are very, very rare.",
  },
  {
    id: "I9QV9-8ehKA",
    tab: "Partea",
    label: "Partea:",
    title: "How Zing took Aedan's idea and built a high-level platform",
    desc: "I'm someone who has a lot of questions and these guys answer them so promptly and succinctly in a way that even I could understand. These guys are amazing software developers and - without Zing - I would not have a platform, a site or a company. I appreciate you!.",
  },
  {
    id: "nhGE_abCH_w",
    tab: "Vessel Health",
    label: "Vessel Health:",
    title: "How Zing helped them meet their App Development Goals",
    desc: "I really like the concept of charging by the project instead of the product. That means that even if the timeline slips, the budget will be hit consistently. I also really like Zing's attitude. They understand the challenges startups go through and try to make everything as flexible as possible.",
  },
  {
    id: "Kh2PPtduphQ",
    tab: "Bond Love",
    label: "Bond Love:",
    title: "Why Delmonik Contee chose Zing for his mobile application",
    desc: "There was 100% trust between me and the team,” he explains. “I know all of their names. I can reach out to them directly. If you take a random shot in the dark, you know, you're probably going to have to go through some trial and error before you find someone or a company that's as good as the Zing team.",
  },
];

function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full max-w-[560px] mx-auto">
      {/* Video */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ paddingBottom: "56.25%" }}>
        {!playing ? (
          <div className="absolute inset-0 cursor-pointer group" onClick={() => setPlaying(true)}>
            <img
              src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative hover-popup w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{ background: playBg }}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7L8 5z" fill="#1C1C1E" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
      {/* Text */}
      <div className="mt-5">
        <p className="text-xs text-[#37352F] font-normal">{video.label}</p>
        <h3 className="text-lg sm:text-xl font-bold text-[#37352F] mt-1 leading-snug">{video.title}</h3>
        <p className="text-xs sm:text-sm text-[#37352F] font-normal mt-2 leading-relaxed">{video.desc}</p>
      </div>
    </div>
  );
}

const VideoTestimonials = ({ items = videos }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSet, setVisibleSet] = useState(new Set([0]));
  const sectionRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observers = items.map((_, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(i);
            setVisibleSet((prev) => new Set([...prev, i]));
          }
        },
        { threshold: 0.3, rootMargin: "-64px 0px 0px 0px" }
      );
      if (sectionRefs.current[i]) observer.observe(sectionRefs.current[i]);
      return observer;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  const scrollToVideo = (i) => {
    const el = sectionRefs.current[i];
    if (!el) return;
    const navbarHeight = 64;
    const tabBarHeight = 48;
    const offset = el.getBoundingClientRect().top + window.scrollY - navbarHeight - tabBarHeight - 16;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="bg-white p-8 md:p-12 relative">

          {/* Sticky tab bar */}
          <div className="sticky top-16 z-30 bg-white pt-2 pb-2">
            <div className="flex justify-between overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full">
              {items.map((v, i) => (
                <button
                  key={i}
                  onClick={() => scrollToVideo(i)}
                  className={`shrink-0 text-[10px] sm:text-xs md:text-sm font-medium px-2 sm:px-4 pt-3 pb-3 border-t-2 transition-all duration-300 cursor-pointer ${
                    activeIndex === i
                      ? "border-gray-900 text-[#000000] font-medium"
                      : "border-gray-200 text-[#A1A1A1] hover:text-gray-600"
                  }`}
                >
                  {v.tab}
                </button>
              ))}
            </div>
          </div>

          {/* Scroll container */}
          <div ref={containerRef} className="mt-8">
            {items.map((video, i) => (
              <div
                key={i}
                ref={(el) => (sectionRefs.current[i] = el)}
                className="flex items-center justify-center"
                style={{ minHeight: "100vh" }}
              >
                <div
                  className="w-full transition-all duration-700 ease-out"
                  style={{
                    opacity: activeIndex === i ? 1 : 0,
                    transform: activeIndex === i ? "translateY(0px)" : "translateY(40px)",
                    WebkitTransform: activeIndex === i ? "translateY(0px)" : "translateY(40px)",
                    pointerEvents: activeIndex === i ? "auto" : "none",
                    visibility: visibleSet.has(i) ? "visible" : "hidden",
                  }}
                >
                  <VideoCard key={`${i}-${activeIndex === i}`} video={video} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
