import React, { useEffect, useState } from "react";
import logo from "../assets/companyimage.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to change background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (index) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  const navItems = [
    { label: "Home", index: 0 },
    { label: "About", index: 1 },
    { label: "Services", index: 2 },
    { label: "Reviews", index: 3 },
    { label: "Contact", index: 4 },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-[#3490a4] shadow-lg" : "bg-transparent"}`}
    >
      <div className="flex h-16 items-center justify-between px-6 md:px-20">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="Logo" className="h-8 w-8 rounded-full" />
          <span className="text-2xl font-bold text-white">volna</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => goToSection(item.index)}
              className="relative text-white font-medium cursor-pointer group"
            >
              {item.label}

              {/* Animated underline */}
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white
                transition-all duration-300 group-hover:w-full"
              />
            </button>
          ))}
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917842802368?text=Hi%20Volna%20Team,%20I’d%20like%20to%20discuss%20a%20project%20related%20to%20web%20development.%20Please%20get%20in%20touch."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-white rounded-2xl h-[32px] w-[120px]
            text-white font-semibold cursor-pointer
            hover:bg-white hover:text-[#0A4D68]
            transition-all duration-300">
            Contact
          </button>
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
