// Projects.js
import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Portfolio",
    desc: "A portfolio showcasing personal projects, animations, and a blog section. Built with React, Framer Motion, and TailwindCSS.",
    image: "https://via.placeholder.com/300x150"
  },
  {
    title: "Enterprise Dashboard",
    desc: "A real-time dashboard for managing transactions and analytics, using AG Grid, RxJS, and Angular Material.",
    image: "https://via.placeholder.com/300x150"
  },
  {
    title: "Framer Playground",
    desc: "An experimental UI playground built to test animations, transitions, and interaction models using Framer Motion.",
    image: "https://via.placeholder.com/300x150"
  }
];

const Projects = () => (
  <motion.section
    id="projects"
    className="section projects"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2>My Projects</h2>
    <p>Here are a few projects I've recently worked on. Click each card for a detailed walkthrough.</p>

    <div className="project-list">
      {projects.map(({ title, desc, image }) => (
        <motion.div
          key={title}
          className="project-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          layout
        >
          <img src={image} alt={title} className="project-img" />
          <h3>{title}</h3>
          <p>{desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Projects;
