import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";

import { pageVariants } from "./variants";
import { Footer } from "../../components/TemplateComponents/Footer";
import { Navbar } from "../../components/TemplateComponents/Navbar";

import OrnamentBackground from "../../images/bg/bg-long-ornament.png";
import Background from "../../images/bg/bg-long-black.png";

import "./Template.scss";
const Sponsor = lazy(() =>
  import("../../components/TemplateComponents/Sponsor")
);
const LongBackground = lazy(() => import("./LongBackground"));

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

export const Template = ({ children, nofooter, nocontain, isLong }) => {
  return (
    <div className="template">
      <img
        src={Background}
        alt="Background"
        className={`background${nocontain ? " hidden" : ""}`}
      />
      {isLong ? (
        <Suspense fallback={""}>
          <LongBackground />
        </Suspense>
      ) : (
        <img
          src={OrnamentBackground}
          alt="Background Ornament"
          className={`background ornament${nocontain ? " hidden" : ""}`}
        />
      )}
      <Navbar />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <div className={`template${nocontain ? "-header" : "-content"}`}>
          {children}
          <Suspense
            fallback={
              <p style={{ textAlign: "center" }}>
                Loading Sponsor and Media Parters...
              </p>
            }
          >
            <Sponsor />
          </Suspense>
        </div>
      </motion.div>
      {<Fireflies />}
      {!nofooter && <Footer />}
    </div>
  );
};
