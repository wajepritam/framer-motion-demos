// components/Navbar.js
import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => (
  <motion.nav
    className="navbar"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    {["Hero", "About", "Projects"].map((section) => (
      <Link
        key={section}
        to={section.toLowerCase()}
        smooth={true}
        duration={500}
        offset={-70}
      >
        {section}
      </Link>
    ))}
  </motion.nav>
);

export default Navbar;
