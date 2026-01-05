import React from "react";
import hero from "../assets/mrimage.svg";
import companyimage from "../assets/companyimage.jpg";

const Contact = () => {
  return (
    <section className="bg-[#F9F1E7] px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">
      {/* Main Card */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#2F8EA1] to-[#B9C3BE] rounded-[30px] sm:rounded-[60px] p-6 sm:p-10 lg:p-14 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6">
              Still have questions?
            </h2>

            <p className="text-white/80 text-base sm:text-lg max-w-md mb-6 sm:mb-10">
              Leave a request and we will contact you to help you choose the best
              training format.
            </p>

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent border border-white/40 rounded-full px-5 py-3 sm:px-6 sm:py-4 text-white placeholder-white/70 focus:outline-none"
              />
              <button className="bg-[#F6D1BC] text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium hover:opacity-90 transition whitespace-nowrap">
                SUBMIT
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="bg-[#3E8EAB] rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 w-full max-w-[300px] sm:max-w-[320px]">
              <img
                src={hero}
                alt="Illustration"
                className="w-full mb-4 sm:mb-6"
              />

              <div className="text-white">
                <p className="text-xs sm:text-sm opacity-80 mb-2">
                  WordPress
                </p>
                <p className="text-base sm:text-lg font-medium">
                  The ideal course to learn how to manage all aspects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Shapes (hidden on small screens) */}
        <div className="hidden sm:block absolute -bottom-20 -right-20 w-64 lg:w-80 h-64 lg:h-80 bg-[#F6D1BC] rounded-full opacity-80" />
        <div className="hidden sm:block absolute top-20 right-20 w-3 h-3 bg-black rounded-full" />
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-gray-600">
        
        {/* Logo */}
        <div>
          <div className="flex items-center">
            <img
              src={companyimage}
              alt="Company Logo"
              className="h-10 sm:h-12 mr-2 rounded-full"
            />
            <h3 className="text-xl sm:text-2xl font-bold text-[#328ea1]">
              Volna
            </h3>
          </div>
          <p className="text-xs sm:text-sm mt-4 sm:mt-6">
            © 2021 Volna Technologies. ALL RIGHTS RESERVED
          </p>
        </div>

        {/* Links */}
        <div className="space-y-2 sm:space-y-3">
          <p>About</p>
          <p>Program</p>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <p>Courses</p>
          <p>Reviews</p>
        </div>

        {/* Contact */}
        <div className="space-y-2 sm:space-y-3">
          <p>www.volna.co.in</p>
          <p>mail@volna.co.in</p>
          <p>+91 7842802368</p>
          <p>India, Andhra Pradesh</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
