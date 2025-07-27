// components/About.js
import { motion } from "framer-motion";

const About = () => (
  <motion.section
    id="about"
    className="section about"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2>About Me</h2>
    <p>
      I'm a passionate frontend developer with 8+ years of experience building
      responsive, accessible, and user-friendly applications using Angular and React.
    </p>

    <motion.div
      className="timeline"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
    >
      <div className="timeline-item">
        <strong>2016–2019</strong>: Worked as UI Developer at QualityKiosk
      </div>
      <div className="timeline-item">
        <strong>2019–Present</strong>: Senior Frontend Developer at Citi
      </div>
    </motion.div>

    <h3>Tech Stack</h3>
    <ul className="skills-list">
      <li>Angular</li>
      <li>TypeScript</li>
      <li>RxJS</li>
      <li>HTML & CSS</li>
      <li>Framer Motion</li>
    </ul>
  </motion.section>
);

export default About;
