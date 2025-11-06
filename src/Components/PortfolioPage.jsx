import React from 'react';
import { motion } from 'framer-motion';
import github from './images/github.png';
import external from './images/external.png';
import './Portfolio.css';
const projects = [
  {
    title: "TypeGo",
    description: "A speed typing practice web application designed to help users enhance their typing skills.",
    tags: ["JavaScript", "Vercel", "Typing"],
    github: "TypeGo",
    live: "https://typego.vercel.app/"
  },
  {
    title: "DragIt",
    description: "A Kanban board app that helps users manage tasks with an intuitive drag-and-drop interface.",
    tags: ["JavaScript", "Vercel", "DragDrop"],
    github: "dragit",
    live: "https://board-alpha-six.vercel.app/"
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather application providing real-time weather data and forecasts using weather API integration.",
    tags: ["React", "API Integration", "CSS"],
    github: "https://github.com/sujalpokhrel999/Weather-Dashboard",
    live: false
  },
  {
    title: "Real-Time Chat Application",
    description: "A modern chat application built with React and WebSocket technology for real-time communication.",
    tags: ["React", "Routing", "Firebase"],
    github: "https://github.com/sujalpokhrel999/Connectify",
    live: "https://connectify-drab.vercel.app"
  },
  {
    title: "QuickBook",
    description: "Movie ticket book demo site for current and upcoming movies.",
    status:"In Development",
    tags: ["React", "API Integration", "Supabase"],
    github: "https://github.com/sujalpokhrel999/QuickBook",
    live: false
  },
  {
    title: "Interactive Canvas Projects",
    description: "Collection of creative mini-projects showcasing JavaScript canvas animations and interactions.",
    tags: ["JavaScript", "Canvas", "Animation"],
    github: "https://github.com/sujalpokhrel999/minicanvasprojects",
    live: false
  }
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const PortfolioPage = () => {
  return (
    <motion.div 
      className="portfolio-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="portfolio-content">
        <motion.h1 
          className="portfolio-title"
          variants={cardVariants}
        >
          Portfolio
        </motion.h1>
        <motion.p 
          className="portfolio-description"
          variants={cardVariants}
        >
          Here are some of my recent projects that showcase my skills in web development.
        </motion.p>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
            >
              <div className="project-header">
                <motion.h2 className="project-title">{project.title}</motion.h2>
                <div className="project-links">
                  <a
                    href={`https://github.com/sujalpokhrel999/${project.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="GitHub Link" className="project-icon" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={external} alt="Live Demo Link" className="project-icon" />
                    </a>
                  )}
                </div>
              </div>
              
              <motion.p 
                className="project-description"
                variants={cardVariants}
              >
                {project.description}
              </motion.p>
              
              {project.status && (
                <motion.div className="status-container" variants={cardVariants}>
                  <span className="status-badge">{project.status}</span>
                </motion.div>
              )}
              
              <div className="tags-container">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
