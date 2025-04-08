import React from 'react';
import facebook from './images/facebook.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';
import './LandingPage.css';
import { motion } from 'framer-motion';

function LandingPage({ onNavigate }) {
    const text = "Hey, I'm Sujal Pokhrel";
    
    // Enhanced text animation with floating effect
    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const splitText = text.split("").map((letter, index) => (
        <motion.span
            key={index}
            custom={index}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'inline-block' }}
        >
             {letter === " " ? "\u00A0" : letter}
        </motion.span>
    ));

    // Social links animation variants
    const socialLinksContainer = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const socialLinkItem = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: {
                duration: 0.3
            }
        }
    };

    // Subtitle animation
    const subtitleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    // Button animation
    const buttonVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1,
                duration: 0.3,
                ease: "easeOut"
            }
        },
        hover: {
            y: -10,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            transition: {
                duration: 0.1,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <motion.div 
            className="landingPage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="hero-section">
                <motion.div className="heroHeader">
                    <h1>
                        <span className="craftline">{splitText}</span>
                    </h1>
                </motion.div>

                <motion.div 
                    className="heroSubHeader"
                    variants={subtitleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h2>
                        Driven Web Developer creating impactful websites and web applications that deliver exceptional user experiences.
                    </h2>
                </motion.div>

                <motion.div 
                    className="SocialLinks"
                    variants={socialLinksContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {[
                        { icon: linkedin, alt: "LinkedIn",link:"https://www.linkedin.com/in/sujal-pokhrel-8431761b2/" },
                        { icon: twitter, alt: "Twitter",link:"https://x.com/sujal22245172" },
                        { icon: facebook, alt: "Facebook",link:"https://www.facebook.com/sujal.pokhrel.75" },
                        { icon: github, alt: "GitHub",link:"https://github.com/sujalpokhrel999" }
                    ].map((social, index) => (
                        <motion.div 
                            key={index} 
                            className="socialLink"
                            variants={socialLinkItem}
                            whileHover="hover"
                        >
                            <motion.a 
                                href={social.link} 
                                className='medialink'
                                target="_blank"
                                whileHover={{
                                    backgroundColor: "rgb(218, 217, 217)",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <motion.img 
                                    src={social.icon} 
                                    alt={social.alt}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.button
                    className="Connect"
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => onNavigate("PortfolioPage")}

                >
                    SEE MY WORKS
                </motion.button>
            </div>
        </motion.div>
    );
}

export default LandingPage;