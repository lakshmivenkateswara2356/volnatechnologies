import { motion } from "framer-motion";

const SnapCard = ({ children }) => {
  return (
    <motion.section
      className="scroll-section flex items-center justify-center"
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}
    >
      {children}
    </motion.section>
  );
};

export default SnapCard;
