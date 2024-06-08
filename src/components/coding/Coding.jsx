import { motion } from "framer-motion";
import React from "react";
import "./Coding.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  }
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat:Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const bgVariants = {
  animate: {
    backgroundPositionY: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        duration: 5,
        ease: "linear"
      }
  }
};

const Coding = () => {
  const leetCodeProfileLink = "https://leetcode.com/not_so_dark/";
  const gfgProfileLink = "https://auth.geeksforgeeks.org/user/shreya21ug";

  return (
    <motion.div
      className="coding-profiles-section"
      variants={bgVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h1 variants={textVariants}><span className="orange-text">Coding</span> Profile</motion.h1>
      <div className="profile-container">
        <div className="profile">
          <a
            href={leetCodeProfileLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/leetcode.png"
              alt="LeetCode Profile"
              className="profile-image"
            />
          </a>
        </div>

        <div className="profile">
          <a href={gfgProfileLink} target="_blank" rel="noopener noreferrer">
            <img
              src="/gfg.jpeg"
              alt="GeeksforGeeks Profile"
              className="profile-image"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Coding;