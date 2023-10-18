import { motion } from "framer-motion";
import "./services.scss";
import { servicesCardData, varients } from "./constants";

function ServicesSection() {
  return (
    <motion.div
      id="Services"
      className="services"
      initial="initial"
      whileInView={"animate"}
    >
      <motion.div className="services-text" variants={varients}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="services-title" variants={varients}>
        <div className="services-title-text">
          <img src="/img/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="services-title-text">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div className="services-list container" variants={varients}>
        {servicesCardData.map((card) => (
          <motion.div
            className="services-list-card"
            key={card.title}
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>{card.title}</h2>
            <p>{card.text}</p>
            <button>Go</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ServicesSection;
