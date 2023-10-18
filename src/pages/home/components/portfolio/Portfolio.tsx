import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { portfolioSectionsData } from "./constants";
import "./portfolio.scss";
import { useRef } from "react";

interface Props {
  title: string;
  img: string;
  desc: string;
}

const Single = ({ title, img, desc }: Props) => {
  //For Card title
  const ref = useRef<any>();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-card" ref={ref}>
        <img src={img} alt="project image" />
        <motion.div style={{ y }}>
          <h2>{title}</h2>
          <p>{desc}</p>
          <button>See Demo</button>
        </motion.div>
      </div>
    </div>
  );
};

function PortfolioSection() {
  // For Progress bar
  const ref = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const progressBarScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div id="Portfolio" className="portfolio" ref={ref}>
      <div className="portfolio-section container">
        <div className="portfolio-progress">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX: progressBarScale }}></motion.div>
        </div>
        {portfolioSectionsData.map((section, i) => (
          <Single {...section} key={i} />
        ))}
      </div>
    </div>
  );
}

export default PortfolioSection;
