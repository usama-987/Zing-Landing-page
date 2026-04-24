import React, { useState, useEffect } from "react";

// Images
import MikeFergusen from '../../../assets/mikeFerg.webp';
import Shahzad from "../../../assets/shahzad.webp";
import Delmonik from "../../../assets/testi4.webp";
import Noah from "../../../assets/testi5.webp";
import Alex from "../../../assets/testi6.webp";
import Aedan from "../../../assets/testi7.webp";
import Julia from "../../../assets/testi9.webp";

const UserReviews = [
  {
    img: MikeFergusen,
    name: "Mike Ferguson",
    role: "CEO of Ferguson Farms",
    text: "With Zing, it's good news all around and we've got happy customers.",
  },
  {
    img: Noah,
    name: "Noah Kagan",
    role: "Founder of AppSumo",
    text: "I was impressed. Dan and Zing are the go-to team I keep recommending.",
  },
  {
    img: Shahzad,
    name: "Shahzad Haider",
    role: "President of The Future Connoisseurs",
    text: "It's rare to find a team that works like real partners.",
  },
  {
    img: Delmonik,
    name: "Delmonik Contee",
    role: "Creator of BondLove",
    text: "Everything felt responsive and professional.",
  },
  {
    img: Alex,
    name: "Alex Shtutman",
    role: "Founder of Authentic Detective",
    text: "Without you guys, my company wouldn't be where it is today.",
  },
  {
    img: Aedan,
    name: "Aedan O'Connor",
    role: "Founder of Partea",
    text: "Always available and super responsive.",
  },
  {
    img: Julia,
    name: "Julia Albert",
    role: "Owner of JM Packaging",
    text: "Communication is key and Zing delivers perfectly.",
  },
];

const Reviews = ({ autoPlayInterval = 4000 }) => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goToSlide = (index) => {
    if (index === active || animating) return;

    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 250);
  };

  // Auto play
  useEffect(() => {
    const timer = setInterval(() => {
      const next = (active + 1) % UserReviews.length;
      goToSlide(next);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [active]);

  // Show 3 reviews at a time
  const visibleReviews = [
    UserReviews[active],
    UserReviews[(active + 1) % UserReviews.length],
    UserReviews[(active + 2) % UserReviews.length],
  ];

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="bg-white rounded-2xl p-8 md:p-12">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            What Client say about us
          </h2>

          {/* 3 Cards in a row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleReviews.map((review, index) => (
              <div
                key={index}
                className="rounded-xl p-6 transition-all duration-300"
                style={{
                  backgroundColor: '#F1F9FF',
                  opacity: animating ? 0.7 : 1,
                }}
              >
                {/* Profile */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{review.name}</h3>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex gap-2">
            {UserReviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === active ? "32px" : "12px",
                  height: "3px",
                  background: i === active ? "#3b82f6" : "#d1d5db",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
