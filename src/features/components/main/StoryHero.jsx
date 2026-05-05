import  { useState } from "react";
import HeroImg from "../../../assets/Marketing/Hero.png";
import { scrollToContact } from "../../../hooks/scrollToContact";

const noiseUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)' opacity='0.13'/%3E%3C/svg%3E")`;
const playBg = `${noiseUrl}, linear-gradient(145deg, #dce8f5 0%, #c4d8ec 40%, #b8cfe8 100%)`;

// Extract YouTube video ID from full iframe src or just the ID
const getVideoId = (src) => {
  const match = src.match(/embed\/([^?]+)/);
  return match ? match[1] : src;
};

const StoryHero = ({
  title = "",
  highlight = "",
  description = "",
  buttonText = "GET STARTED",
  bgImage = HeroImg,
  iframeSrc = "",
}) => {
  const [playing, setPlaying] = useState(false);
  const videoId = getVideoId(iframeSrc);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div
        className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          minHeight: "220px",
        }}
      >
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-16">

          {/* LEFT — Text */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#FFFFFF]">
              {title}
              {highlight && (
                <>
                  <br />
                  <span className="text-[#51A2FF]">{highlight}</span>
                </>
              )}
            </h1>

            {description && (
              <p
                className="text-xs sm:text-sm text-[#FFFFFF]"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            <button
              onClick={scrollToContact}
              className="mt-2 px-5 py-2 bg-white text-[#1C1C1E] text-[10px] sm:text-xs font-normal uppercase tracking-wide rounded hover:bg-gray-100 active:scale-95 transition-all duration-200"
            >
              {buttonText}
            </button>
          </div>

          {/* RIGHT — Video */}
          {iframeSrc && (
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl hover-popup"
              style={{ paddingBottom: "56.25%" }}
            >
              {!playing ? (
                <div
                  className="absolute inset-0 cursor-pointer group"
                  onClick={() => setPlaying(true)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative" style={{ background: playBg, borderRadius: "50%", width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5v14l11-7L8 5z" fill="#1C1C1E" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="Story Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default StoryHero;