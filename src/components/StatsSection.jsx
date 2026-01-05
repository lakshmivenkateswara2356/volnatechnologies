const StatsSection = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 -mt-24 relative z-10">
      <div className="bg-[#FBF3E8] rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] py-8 sm:py-10 px-4 sm:px-6 lg:px-10 shadow-md">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center relative">

          {/* STAT 1 */}
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              10+
            </h2>

            <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 border-2 border-black rounded-full"></span>

            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              Successfully delivered software <br className="hidden sm:block" />
              projects including web apps, <br className="hidden sm:block" />
              dashboards, and APIs
            </p>
          </div>

          {/* Divider (Desktop only) */}
          <div className="hidden lg:block absolute left-1/3 top-16 h-28 border-l border-dashed border-gray-400"></div>

          {/* STAT 2 */}
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              5+
            </h2>

            <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 border-2 border-black rounded-full"></span>

            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              Ongoing software projects <br className="hidden sm:block" />
              focused on scalability, <br className="hidden sm:block" />
              performance, and UX
            </p>
          </div>

          {/* Divider (Desktop only) */}
          <div className="hidden lg:block absolute left-2/3 top-16 h-28 border-l border-dashed border-gray-400"></div>

          {/* STAT 3 */}
          <div className="relative sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              100%
            </h2>

            <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 border-2 border-black rounded-full"></span>

            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              Happy clients satisfied with <br className="hidden sm:block" />
              reliable software solutions <br className="hidden sm:block" />
              and long-term support
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StatsSection;
