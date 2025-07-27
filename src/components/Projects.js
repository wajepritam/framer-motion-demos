// components/Projects.js
import { motion } from "framer-motion";

const ProjectCard = ({ title, desc, image }) => (
  <motion.div
    className="project-card"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    layout
  >
    <img src={image} alt={title} className="project-img" />
    <h3>{title}</h3>
    <p>{desc}</p>
  </motion.div>
);

const Projects = () => (
  <motion.section
    id="projects"
    className="section projects"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2>Projects</h2>
    <div className="project-list">
      <ProjectCard
        title="Portfolio Website"
        desc="A fully animated portfolio with dark/light mode and Angular Material."
        image="https://via.placeholder.com/300x150"
      />
      <ProjectCard
        title="AG Grid Dashboard"
        desc="Built a dynamic analytics dashboard using AG Grid and RxJS."
        image="https://via.placeholder.com/300x150"
      />
      <ProjectCard
        title="Framer Motion Playground"
        desc="Experimented with scroll-based, path, and hover animations."
        image="https://via.placeholder.com/300x150"
      />
    </div>
  </motion.section>
);

export default Projects;
