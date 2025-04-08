import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import game from './images/game.png'
import reading from './images/reading.png'
import music from './images/music.png'
import './About.css';

const About = ({ onNavigate }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const hobbies = [
    {
      icon: <img className="hobbiesImg" src={game} alt="Gaming icon" />,
      name: "Gaming",
      description: "Exploring virtual worlds and solving puzzles"
    },
    {
      icon:  <img className="hobbiesImg" src={reading} alt="Reading icon" /> ,
      name: "Tech Reading",
      description: "Staying updated with latest development trends"
    },
    {
      icon: <img className="hobbiesImg" src={music} alt="Music icon" />,
      name: "Music",
      description: "Finding rhythm in code and beats"
    }
  ];

  const skills = [
    {
      category: "Frontend Fundamentals",
      items: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Bootstrap"]
    },
    {
      category: "React Ecosystem",
      items: ["React.js", "React Hooks", "Context API", "Redux"]
    },
    {
      category: "Backend Integration",
      items: ["RESTful APIs", "MongoDB", "CRUD Operations"]
    }
  ];

  return (
    <motion.div 
      className="about-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      ref={ref}
    >
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          variants={cardVariants}
        >
          <h1>About Me</h1>
          <motion.div 
            className="code-tag"
            whileHover={{ scale: 1.05 }}
          >
            &lt;frontend developer /&gt;
          </motion.div>
        </motion.div>
      </section>

      <motion.section 
        className="intro-section"
        variants={cardVariants}
      >
        <div className="intro-content">
          <p>
            Hi, I'm <span className="highlight">Sujal Pokhrel</span>, a front-end developer with a 
            strong foundation in building clean, responsive, and dynamic web applications. 
            My passion lies in transforming ideas into interactive and visually appealing 
            digital experiences.
          </p>
        </div>
      </motion.section>

      <motion.section className="skills-section">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3>{category.category}</h3>
              <div className="skill-tags">
                {category.items.map((skill, i) => (
                  <motion.span 
                    key={i}
                    className="skill-tag"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="motivation-section"
        variants={cardVariants}
      >
        <h2>What Drives Me</h2>
        <div className="motivation-content">
          <p>
            I thrive on solving problems and constantly learning to improve my craft. 
            From pixel-perfect designs to writing clean, maintainable code, I aim to 
            deliver work that stands out.
          </p>
        </div>
      </motion.section>

      <motion.section className="hobbies-section">
        <h2>Beyond the Code</h2>
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <motion.div 
              key={index}
              className="hobby-card"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
              }}
            >
              <span className="hobby-icon">{hobby.icon}</span>
              <h3>{hobby.name}</h3>
              <p>{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="connect-section"
        variants={cardVariants}
      >
        <h2>Let's Connect</h2>
        <p>
          I'm always excited to collaborate on projects or discuss new ideas. 
          Whether you're looking for a developer to bring your vision to life 
          or just want to chat, feel free to reach out!
        </p>
        <motion.button 
          className="connect-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate("Contact")}
        >
          Get In Touch
        </motion.button>
      </motion.section>
    </motion.div>
  );
};

export default About;