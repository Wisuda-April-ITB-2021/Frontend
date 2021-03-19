import React from "react";
import { motion } from "framer-motion";

import { pageVariants, pageTransition } from "./variants";
import { Footer } from "../../components/TemplateComponents/Footer";
import { Navbar } from "../../components/TemplateComponents/Navbar";

import LeftOrnamen from "../../images/decoration/home-ornamen-left.webp";
import RightOrnamen from "../../images/decoration/home-ornamen-right.webp";
import OrnamentBackground from "../../images/bg/bg-long-ornament.png";
import Background from "../../images/bg/bg-long-black.png";

import "./Template.scss";

const Fireflies = () => (
  <div className="firefly-wrap">
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
    <div className="firefly"></div>
  </div>
);

export const Template = ({ children, nofooter, nocontain }) => {
  return (
    <div className="template">
      <img src={Background} alt="Background" className={`background${nocontain ? " hidden" : ""}`}/>
      <img src={OrnamentBackground} alt="Background Ornament" className={`background ornament${nocontain ? " hidden" : ""}`}/>
      {/* <img src={LeftOrnamen} alt="Background" className={`left-ornament${nocontain ? " hidden" : ""}`}/>
      <img src={RightOrnamen} alt="Background" className={`right-ornament${nocontain ? " hidden" : ""}`}/> */}
      <Navbar />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <div className={`template${nocontain ? "-header" : "-content"}`}>
          {children}
        </div>
      </motion.div>
      {!nofooter && <Footer />}
      {<Fireflies />}
    </div>
  );
};
