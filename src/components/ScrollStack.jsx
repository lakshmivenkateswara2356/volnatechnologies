import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, forwardRef, useImperativeHandle } from "react";

const ScrollStack = forwardRef(({ pages }, ref) => {
  const containerRef = useRef(null);
  const total = pages.length;

  useImperativeHandle(ref, () => ({
    scrollToIndex(index) {
      if (!containerRef.current) return;
      const scrollHeight = containerRef.current.scrollHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = scrollHeight - viewportHeight;

      const targetScroll = (index / (total - 1)) * maxScroll;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    },
  }));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} style={{ height: `${total * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {pages.map((Page, index) => {
          const start = index / total;
          const end = (index + 1) / total;

          const y =
            index === total - 1
              ? "0%"
              : useTransform(scrollYProgress, [start, end], ["0%", "-100%"]);

          return (
            <motion.div
              key={index}
              style={{ y, zIndex: total - index }}
              className="absolute inset-0"
            >
              <div className="h-screen overflow-auto">
                {Page}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
});

export default ScrollStack;
