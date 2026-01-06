import React from "react";
import Ossind from "../assets/ossindpvtltd.png";
import Alankar from "../assets/restoname.png";
import Adarsh from "../assets/adarshschol.png";

const reviews = [
  {
    name: "Ossind Pvt Ltd",
    image: Ossind,
    text: "Their team delivered our project on time with excellent quality. Communication was smooth, and they understood our requirements perfectly. Highly recommended for scalable software solutions.",
  },
  {
    name: "Alankar Restaurant",
    image: Alankar,
    text: "They built a modern, user-friendly website that significantly improved our online presence. The team was responsive, professional, and supportive throughout the entire process.",
  },
  {
    name: "Adarsh School",
    image: Adarsh,
    text: "We partnered with them for our school management system, and the experience was excellent. The solution was reliable, secure, and tailored exactly to our needs.",
  },
];



const Reviews = () => {
  return (
    <section className=" min-h-screen bg-[#FBF1E6] py-24 px-6 rounded-b-[120px]">
      {/* Heading */}
      <h2 className="text-center text-5xl font-semibold text-gray-800 mb-20">
        What Our Clients Say
      </h2>

      {/* Reviews */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative">
        {reviews.map((item, index) => (
          <div key={index} className="text-center relative px-6">
            {/* Avatar blob */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div  />
             

              {/* Decorative dots */}
              <span className="absolute -top-3 -left-4 w-4 h-4 border border-black rounded-full"></span>
              <span className="absolute top-2 -right-4 w-2 h-2 bg-black rounded-full"></span>
              <span className="absolute bottom-1 right-0 w-3 h-3 bg-[#F6C1A5] rounded-full"></span>
            </div>

            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {item.name}
            </h3>

            {/* Review */}
            <p className="text-gray-600 leading-relaxed text-base max-w-xs mx-auto">
              {item.text}
            </p>

            {/* Vertical divider */}
            {index !== reviews.length - 1 && (
              <span className="hidden md:block absolute top-48 -right-8 h-40 border-r border-dashed border-gray-400" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
