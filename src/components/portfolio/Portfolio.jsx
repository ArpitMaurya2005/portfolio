import React, { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Free Rentals",
    img: "/cycle.png",
    desc: "FreeWheelRentals meets the demand for short-term vehicle rentals, particularly among college students. The platform enables users to easily reserve bicycles and motorbikes for city commuting or tours. With a user-friendly interface offering login, registration, and a contact section,it simplifies the booking process and addresses user inquiries.      TechStack : NodeJS, Express JS, MongoDB, ReactJS, Bootstrap, TailwindCSS.",
    link: "https://github.com/shreyamaurya029/cycle_end",
  },

  {
    id: 2,
    title: "Movie App",
    img: "https://github.com/shreyamaurya029/Movie_App",
    desc: "Developed a dynamic web application for reviewing upcoming movies, featuring user authentication,real-time updates, and responsive design.Integrated third-party APIs for movie data and orchestrated a robust backend for data management. Utilized agile methodologies and version control, ensuring thorough testing and debugging for optimal performance.     TechStack : Java, Springboot, ReactJS, Bootstrap.",
    link:"https://github.com/shreyamaurya029/Movie_App",
  },

  {
    id: 3,
    title: "Tetris Game",
    img: "/game.png",
    desc: "Created an interactive game to train users’ cognitive abilities, resulting in a 30% improvement in pattern recognition skills. Designed progressive challenges and utilized analytics to track and enhance user engagement.     TechStack: C++, Raylib for 3D animation"
    
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 50]);

  return (
    <section className="section">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="Portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
