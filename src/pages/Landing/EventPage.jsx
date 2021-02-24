import React from "react";
import { motion } from "framer-motion";
// import { pageVariants } from "../Template/variants";
import { Template } from "../Template/Template";
import { pageVariants } from "../Template/variants";
import "./EventPage.scss";

export const EventPage = () => {
  return (
    <Template>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        EventPage
      </motion.div>
    </Template>
  );
};
