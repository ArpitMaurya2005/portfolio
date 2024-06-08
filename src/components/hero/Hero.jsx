import React from "react";
import { motion } from "framer-motion";
import "./Hero.scss";

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
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
        duration:2,
        repeat: Infinity
    }

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
  

const Hero = () => {
  return (
    <div className="Hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>Shreya Maurya</motion.h1>

          <motion.h2 variants={textVariants}>
          I'm 4th year CS Student, I juggle code and cameras, crafting software and capturing moments!
          </motion.h2>

          <motion.div className="buttons" variants={textVariants}>
          </motion.div>

        </motion.div>

        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
          Student      Content Creator       Developer     Photographer
        </motion.div>

        <div className="imageContainer">
          <img src="/hero.png" alt="" />
        </div>

      </div>
    </div>
  );
};

export default Hero;
