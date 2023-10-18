import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.scss";
import { useRef } from "react";

function ParallaxSection({ type }: { type: string }) {
  const ref = useRef<any>();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div
      className={`parallax ${
        type === "services" ? "parallax-light" : "parallax-dark"
      }`}
      ref={ref}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="parallax-mountains"></motion.div>
      <motion.div
        className={`parallax-planets ${
          type === "services"
            ? "parallax-planets-dark"
            : "parallax-planets-light"
        }`}
        style={{ y: yBg }}
      ></motion.div>
      <motion.div className="parallax-stars" style={{ x: yBg }}></motion.div>
    </div>
  );
}

export default ParallaxSection;
