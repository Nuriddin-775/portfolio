import { motion } from "framer-motion";
import { sliderVariants, textVariants } from "./constants";
import "./hero.scss";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero">
      <motion.div
        className="hero-info container"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h2 variants={textVariants}>Nuriddin Alijonov</motion.h2>
        <motion.h1 variants={textVariants}>Front End Engineer</motion.h1>
        <motion.div className="hero-info-buttons" variants={textVariants}>
          <a href="#Portfolio">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
          </a>
          <a href="#Contact">
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </a>
        </motion.div>
        <motion.img
          src="/img/scroll.png"
          alt="scroll image"
          variants={textVariants}
          animate="scrollButton"
        />
      </motion.div>
      <motion.div
        className="hero-sliding-text"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web developer and Frontend Engineer
      </motion.div>
      <img className="hero-img" src="/img/hero.png" alt="hero page image" />
    </div>
  );
}

export default HeroSection;
