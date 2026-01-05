import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Heroin from "../assets/heroin.svg";
import hand from "../assets/secondHeroin.svg";

const About = () => {
  const { scrollY } = useScroll();

  // Hand animations: rotate, scale, and vertical movement
  const rotate = useTransform(scrollY, [40, 500], [45, 10]);
  const scale = useTransform(scrollY, [40, 500], [0.9, 1.1]);
  const yMove = useTransform(scrollY, [40, 500], [0, -20]);

  // Right-side item opacity & slide animations
  const line1Opacity = useTransform(scrollY, [350, 450], [0, 1]);
  const line2Opacity = useTransform(scrollY, [450, 550], [0, 1]);
  const line3Opacity = useTransform(scrollY, [550, 650], [0, 1]);
  const line4Opacity = useTransform(scrollY, [650, 750], [0, 1]);

  const line1Y = useTransform(scrollY, [350, 450], [20, 0]);
  const line2Y = useTransform(scrollY, [450, 550], [20, 0]);
  const line3Y = useTransform(scrollY, [550, 650], [20, 0]);

  // Vertical line scale
  const lineHeight = useTransform(scrollY, [0, 400], [0, 1]);

  return (
    <div className="h-screen w-full flex flex-col md:flex-row items-center justify-between bg-[#f8efe5] rounded-md md:rounded-b-[100px] relative overflow-hidden px-4 md:px-12">
      

      {/* LEFT IMAGE */}
      <div className="w-full md:w-1/ flex justify- mt-10 md:mt-20">
        <img
          src={Heroin}
          alt="About Us"
          className="w-[85%] md:w-3/4 lg:w-1/2"
        />
      </div>

      {/* HAND */}
      <motion.img
        src={hand}
        alt="Hand Gesture"
        className="
          absolute
          w-[70px] sm:w-[110px] md:w-[160px]
          left-[20%] top-[16%]
          lg:w-[150px]
          lg:left-[200px]
          lg:top-[335px]
          pointer-events-none
        "
        style={{
          rotate,
          scale,
          y: yMove,
          transformOrigin: "20% 85%",
        }}
      />


      {/* RIGHT SIDE SCROLL DATA */}
      <div className="absolute right-[6%] top-1/2 md:mt-0 mt-35 -translate-y-1/2 max-w-sm space-y-12">
            <h1 className="text-center font-bold mt-[-30px]">About Us</h1>
         
        {/* Vertical connecting line */}
        <motion.div
          className="absolute left-4 top-0 h-full w-[2px] bg-blue-200 origin-top"
          style={{ scaleY: lineHeight }}
        />

        {/* Item 1 */}
        <motion.div
          style={{ opacity: line1Opacity, y: line1Y }}
          className="relative flex items-start space-x-4"
        >
          <div className="relative z-10 flex-shrink-0 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
            01
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#2c2c2c]">
              Journey Started
            </h4>
            <p className="text-gray-700 text-sm mt-1">
              We began our mission to build meaningful digital experiences.
            </p>
          </div>
        </motion.div>

        {/* Item 2 */}
        <motion.div
          style={{ opacity: line2Opacity, y: line2Y }}
          className="relative flex items-start space-x-4"
        >
          <div className="relative z-10 flex-shrink-0 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
            02
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#2c2c2c]">
              Focused on Performance
            </h4>
            <p className="text-gray-700 text-sm mt-1">
              Focused on performance, scalability, and clean UI.
            </p>
          </div>
        </motion.div>

        {/* Item 3 */}
        <motion.div
          style={{ opacity: line3Opacity, y: line3Y }}
          className="relative flex items-start space-x-4"
        >
          <div className="relative z-10 flex-shrink-0 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
            03
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#2c2c2c]">
              Modern Web Solutions
            </h4>
            <p className="text-gray-700 text-sm mt-1">
              Creating future-ready web solutions with modern tech.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
