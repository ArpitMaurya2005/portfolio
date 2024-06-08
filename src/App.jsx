import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

import Coding from "./components/coding/Coding";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Game from "./components/game/Game";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  return (
    <div>
       <Cursor/>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      
      <section id="Coding Profile">
        <Coding type="coding"/>
      </section>

      <Game/>


      <Portfolio/>





      <section id="Contact">
        <Contact />
      </section>
     
    </div>
  );
};

export default App;
