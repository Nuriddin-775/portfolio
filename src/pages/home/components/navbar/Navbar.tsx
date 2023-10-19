import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

function Navbar() {
  return (
    <div id="Homepage" className="navbar container">
      <Sidebar />
      <div className="navbar-social">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 100, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Nuriddin
        </motion.span>
        <div>
          <a href="#Contact">
            <img src="/img/linkedin.png" alt="social media image" />
          </a>
          <a href="#Contact">
            <img src="/img/github.png" alt="social media image" />
          </a>
          <a href="#Contact">
            <img src="/img/telegram.png" alt="social media image" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
