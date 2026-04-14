import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  // Navbar fade-in on load
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
      }`}
    >
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        
        {/* Logo */}
        <img
          src="/assets/furniroLogo.png"
          className="h-[35px] md:h-[41px] object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
          alt="logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-[50px] lg:gap-[75px] text-gray-700 font-medium text-[16px] font-poppins">
          {["/", "/shop", "/about", "/contact"].map((path, i) => {
            const labels = ["Home", "Shop", "About", "Contact"];
            return (
              <li key={i} className="relative group">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${
                      isActive ? "text-[#B88E2F]" : "hover:text-[#B88E2F]"
                    }`
                  }
                >
                  {labels[i]}
                </NavLink>

                {/* Underline Animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#B88E2F] transition-all duration-300 group-hover:w-full"></span>
              </li>
            );
          })}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-5 items-center">
          {["user", "search", "heart", "shopping-cart"].map((icon, i) => (
            <img
              key={i}
              src={`/assets/icons/${icon}.png`}
              className="w-6 h-6 cursor-pointer transition-transform duration-300 hover:scale-125 hover:-translate-y-1"
            />
          ))}
        </div>

        {/* Hamburger */}
        <div
          className="md:hidden cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span
              className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 bg-white shadow-md">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium text-[16px]">
            {["/", "/shop", "/about", "/contact"].map((path, i) => {
              const labels = ["Home", "Shop", "About", "Contact"];
              return (
                <li key={i}>
                  <NavLink
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className="block transition-all duration-300 hover:translate-x-2 hover:text-[#B88E2F]"
                  >
                    {labels[i]}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Mobile Icons */}
          <div className="flex gap-5 mt-4">
            {["user", "search", "heart", "shopping-cart"].map((icon, i) => (
              <img
                key={i}
                src={`/assets/icons/${icon}.png`}
                className="w-6 h-6 cursor-pointer transition-transform duration-300 hover:scale-125"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;