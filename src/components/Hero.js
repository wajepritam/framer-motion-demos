// components/Hero.js
import { motion } from "framer-motion";

const Hero = () => (
  <motion.section
    id="hero"
    className="section hero"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.h1
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      Hi, I'm Pritam Waje
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="hero-subtitle"
    >
      Frontend Developer • Angular Expert • UI Enthusiast
    </motion.p>

    <motion.a
      href="#projects"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="hero-cta"
    >
      View My Work
    </motion.a>
  </motion.section>
);

export default Hero;
