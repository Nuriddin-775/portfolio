import { isMobile } from "src/constants";

export const sidebarVarients = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: { type: "spring", stiffness: 20 },
  },
  closed: {
    clipPath: `circle(${isMobile ? "24" : "30"}px at 50px 50px)`,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const menuVarients = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

export const linkVarients = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
