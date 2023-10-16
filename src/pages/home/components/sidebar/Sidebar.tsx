import { useState } from "react";
import "./sidebar.scss";
import { motion } from "framer-motion";
import { MenuIcon } from "src/assets";
import { linkVarients, menuVarients, sidebarVarients } from "./constants";

const menu = ["Homepage", "Services", "Portfolio", "Contact", "About"];

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="sidebar-bg" variants={sidebarVarients}>
        <motion.div className="sidebar-bg-links" variants={menuVarients}>
          {menu.map((link) => (
            <motion.a
              href={`#${link}`}
              key={link}
              variants={linkVarients}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      <button onClick={() => setOpen(!open)}>
        <MenuIcon />
      </button>
    </motion.div>
  );
}

export default Sidebar;
