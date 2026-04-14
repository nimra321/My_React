import { useState } from "react";
import { NavLink } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "01 — Bed Room",
    name: "Inner Peace",
    image: "/assets/slider/slide1.png",
  },
  {
    id: 2,
    title: "02 — Living Room",
    name: "Modern Comfort",
    image: "/assets/slider/slide3.png",
  },
  {
    id: 3,
    title: "03 — Dining Room",
    name: "Fresh Space",
    image: "/assets/slider/slide2.png",
  },
];

function InspirationSection() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-[#FCF8F3] px-6 md:px-16 py-16 gap-10">

      {/* LEFT CONTENT */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          50+ Beautiful rooms inspiration
        </h2>

        <p className="text-gray-500 mt-4">
          Our designer already made a lot of beautiful prototype of rooms that inspire you
        </p>

        <NavLink to="/shop">
            <button className="mt-6 bg-primary text-white px-6 py-3 hover:opacity-90 transition">
            Explore More
            </button>
        </NavLink>

        
      </div>

      {/* RIGHT CAROUSEL */}
      <div className="md:w-1/2 relative overflow-hidden">

        {/* Slides Wrapper */}
        <div className="flex items-center gap-4">

          {slides.map((slide, i) => {
            const isActive = i === index;

            return (
              <div
                key={slide.id}
                className={`relative transition-all duration-500 ${
                  isActive
                    ? "w-[400px] h-[350px]"
                    : "w-[280px] h-[250px] opacity-70"
                }`}
              >
                <img
                  src={slide.image}
                  className="w-full h-full object-cover "
                />

                {/* Active Slide Content */}
                {isActive && (
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 shadow">
                    <p className="text-xs text-gray-500">{slide.title}</p>
                    <h3 className="font-semibold">{slide.name}</h3>
                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
        >
            <img src="/assets/icons/left-arrow.png" className="w-4 h-4" />
        </button>

        {/* DOTS */}
        <div className="flex gap-2 mt-4 justify-center">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default InspirationSection;