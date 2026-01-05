import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollCard = ({ children }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // animation tied to scroll amount
  const y = useTransform(scrollYProgress, [0, 2], [120, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      className="min-h-screen flex items-center justify-center"
    >
      {children}
    </motion.section>
  );
};

export default ScrollCard;
