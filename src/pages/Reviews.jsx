import React from "react";

const reviews = [
  {
    name: "Anna Tyuneva",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The course is great! Teachers talks very interesting and accessible. Thank you very much!",
  },
  {
    name: "Mykola Dunayev",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The course is clear enough. Well explained a lot of practice. I recommend to everyone!",
  },
  {
    name: "Nastya Kozarchuk",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "The training was in one breath. Very accessible courses, everything is very clear and good.",
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
              <div className="absolute inset-0 bg-[#F6C1A5] rounded-[45%]" />
              <img
                src={item.image}
                alt={item.name}
                className="relative w-24 h-24 rounded-full object-cover mx-auto top-4"
              />

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
