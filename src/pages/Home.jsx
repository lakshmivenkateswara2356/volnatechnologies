import Navbar from "../components/Navbar";
import mrimage from "../assets/mrimage.svg";
import paperplane from "../assets/paperplane.svg";
import globe from "../assets/globe.svg";
import StatsSection from "../components/StatsSection";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1c8aa2] to-[#f3e5c0] md:rounded-b-[100px] rounded-md md:p-2 p-4 ">
      <Navbar />

      <div className="flex flex-col-reverse md:flex-row items-center justify-evenly md:justify-between min-h-screen px-2 md:px-20 relative h-full">
        {/* Left Content */}
        <h1 className="text-3xl md:text-8xl font-bold text-white max-w-full md:max-w-3xl leading-tight text-center md:text-left mt-10 md:mt-0">
          Digitalizing Businesses with <br /> Volna Technologies
        </h1>

        {/* Right Image */}
        <img
          src={mrimage}
          alt="Homepage"
          className="w-3/4 md:w-1/2 mt-10 md:mt-20 mx-auto"
        />

        {/* Floating Paper Plane */}
        <img
          src={paperplane}
          alt="Paper Plane"
          className="absolute top-20 md:top-32 right-10 md:right-40 w-[40px] md:w-[60px] float"
        />

        {/* Floating Globe */}
        <img
          src={globe}
          alt="Globe"
          className="absolute top-20 md:top-60 right-50 md:right-[500px] w-[30px] md:w-[80px] float-slow"
        />
      </div>
      <div className="mt-20">
      <StatsSection/>
      </div>
    </div>
  );
};

export default Home;
