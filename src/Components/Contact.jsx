import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import facebook from './images/facebook.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';

const Contact = () => {
  const email = "sujal3pokhrel@gmail.com";

  const socialLinks = [
    { url: "https://github.com/sujalpokhrel999", icon: github },
    { url: "https://www.linkedin.com/in/sujal-pokhrel-8431761b2/", icon: linkedin },
    { url: "https://www.facebook.com/sujal.pokhrel.75", icon: facebook },
    { url: "https://x.com/sujal22245172", icon: twitter }
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const squareVariants = {
    initial: (i) => ({
      rotate: i * 15,
      x: 100,
      opacity: 0
    }),
    animate: (i) => ({
      rotate: [i * 15, i * 15 + 5, i * 15 - 5, i * 15],
      x: 0,
      opacity: 0.8,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        rotate: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
          repeatType: "reverse"
        }
      }
    }),
    hover: {
      scale: 1.1,
      rotate: 0,
      opacity: 1,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        rotate: {
          duration: 0.5,
          ease: "anticipate"
        },
        boxShadow: {
          duration: 0.3
        }
      }
    },
    tap: {
      scale: 0.95,
      rotate: -10,
      transition: {
        duration: 0.1
      }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      className="contact-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <div className="contact-content">
        <motion.h1 
          className="title"
          variants={itemVariants}
        >
          Let's Create Something!
        </motion.h1>    
        <motion.p 
          className="description"
          variants={itemVariants}
        >
          Shoot me an email if you think we're a great fit and would like to work 
          with me and let's have a great time while we're at it.
        </motion.p>
        
        <motion.a
          href={`mailto:${email}`}
          className="email-link"
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            color: "#0066cc",
            transition: { duration: 0.2 }
          }}
        >
          {email}
        </motion.a>

        <motion.div 
          className="social-links"
          variants={itemVariants}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <motion.img 
                src={social.icon} 
                alt={`social-${index}`} 
                className="icon-image"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <div className="right-squares">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`square square${index + 1}`}
            custom={index}
            variants={squareVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
          />
        ))}
      </div>

      <motion.footer 
        className="footer"
        variants={itemVariants}
      >
        <motion.p variants={itemVariants}>
          All rights reserved © Sujal Pokhrel {new Date().getFullYear()}
        </motion.p>
        <motion.div 
          className="footer-links"
          variants={itemVariants}
        >
          <motion.a 
            href="https://www.instagram.com/sujal_pokhrel999/"
            whileHover={{ scale: 1.05, color: "#0066cc" }}
          >
            follow me
            
          </motion.a>
          <motion.a 
            href= {`mailto:${email}`}
            whileHover={{ scale: 1.05, color: "#0066cc" }}
          >
            email me
          </motion.a>
        </motion.div>
      </motion.footer>
    </motion.div>
  );
};

export default Contact;