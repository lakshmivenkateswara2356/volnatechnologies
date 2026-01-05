import React, { useState } from "react";

const servicesData = [
  {
    id: 1,
    category: "DESIGN",
    title:
      "Creating clean, modern designs with a focus on usability and visual appeal",
    bg: "bg-[#F7EFE6]",
  },
  {
    id: 2,
    category: "DEVELOPMENT",
    title:
      "Website development with responsive design and SEO-optimized performance",
    bg: "bg-[#F7EFE6]",
  },
  {
    id: 3,
    category: "WEB SCRAPING",
    title:
      "Web scraping for efficient and automated data extraction from websites",
    bg: "bg-[#F7EFE6]",
  },
];

const Service = () => {
  const [open, setOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const handleOpen = (card) => {
    setActiveCard(card);
    setOpen(true);
  };

  return (
    <>
      {/* MAIN SECTION */}
      <div className="min-h-screen bg-gradient-to-bl from-[#2C8EA4] to-[#f3e5c0] rounded-md md:rounded-b-[100px] px-6 sm:px-10 md:px-14 py-16 md:py-24">
        
        {/* TOP CONTENT */}
        <div className="mb-16 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
  Professional Web Solutions <br /> for Modern Businesses
</h1>

<p className="text-white/80 text-base sm:text-lg">
  We specialize in modern web development, creative web design, and powerful
  web scraping solutions that help businesses grow, automate, and scale
  efficiently.
</p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {servicesData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpen(item)}
              className={`
                ${item.bg}
                rounded-[40px] md:rounded-[50px]
                p-8 md:p-12
                min-h-[360px] md:min-h-[420px]
                flex flex-col justify-between
                cursor-pointer
                transition-all duration-500 ease-in-out
                hover:scale-105 hover:bg-white hover:shadow-2xl
              `}
            >
              <p className="text-xs tracking-[0.2em] text-gray-700 font-medium">
                {item.category}
              </p>

              <h3 className="text-lg sm:text-xl md:text-[28px] font-semibold text-gray-900 leading-snug mt-6">
                {item.title}
              </h3>

              <div className="flex items-center gap-2 text-[#007EA7] font-semibold mt-10">
                <span>READ MORE</span>
                <span className="text-lg transition-transform group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP / MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-[#F7EFE6] rounded-[30px] md:rounded-[40px] w-full max-w-4xl p-8 md:p-12 relative">
            
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-gray-500 text-2xl hover:text-black transition"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              
              {/* LEFT CONTENT */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Contact us instantly
                </h2>

                <p className="text-gray-600 mb-10">
                  Have questions about{" "}
                  <span className="font-medium">{activeCard?.category}</span>?  
                  Chat with us directly on WhatsApp and get instant support.
                </p>

                {/* WHATSAPP BUTTON */}
                <a
                   href="https://wa.me/917842802368?text=Hi%20Volna%20Team,%20I’d%20like%20to%20discuss%20a%20project%20related%20to%20web%20development.%20Please%20get%20in%20touch."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 bg-green-500 text-white px-8 py-4 rounded-full
                             font-semibold text-lg shadow-lg
                             transition-all duration-500
                             hover:bg-green-600 hover:scale-105"
                >
                  <span className="animate-pulse text-xl">💬</span>
                  <span>Chat on WhatsApp</span>
                  <span className="transform transition-transform duration-500 group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </div>

              {/* RIGHT CONTENT */}
              <div className="hidden md:flex justify-center">
                <img
                  src="https://illustrations.popsy.co/gray/work-from-home.svg"
                  alt="contact"
                  className="w-80 animate-[float_4s_ease-in-out_infinite]"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FLOAT ANIMATION */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
        `}
      </style>
    </>
  );
};

export default Service;
