// About.js
import { motion } from "framer-motion";

const About = () => (
  <motion.section
    id="about"
    className="section about"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2>About Me</h2>
    <p>
      I'm a frontend developer with over 8 years of experience crafting enterprise-grade applications. I specialize in Angular, React, and modern UI/UX principles. I believe that design isn't just how something looks—it's how it works.
    </p>

    <p>
      I’ve led frontend efforts for financial applications, analytics dashboards, and custom design systems. My approach blends performance, accessibility, and seamless animation to create delightful user experiences.
    </p>

    <p>
      Beyond the code, I’m a strong collaborator, an advocate for design systems, and an eternal learner. When I’m not coding, you’ll find me sketching, exploring animation ideas, or mentoring junior developers.
    </p>

    <div className="timeline">
      <div><strong>Feb 2023 –Present</strong>: Sr. Angular Developer @ Citi</div>
      <div><strong> Jun 2021 - Feb 2023 </strong>: Enginnering Lead @ Persistent</div>
      <div><strong>Nov 2020 – Jun 2021</strong>: Cloud Engineer @ Flentas</div>
      <div><strong>Jan 2018 – Oct 2020</strong>: Frontend Developer @ Cliste Software Pvt Ltd.</div>
    </div>
  </motion.section>
);

export default About;
