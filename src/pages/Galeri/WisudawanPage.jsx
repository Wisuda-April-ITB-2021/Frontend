import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../Template/variants";
import { Template } from "../Template/Template";
import "./WisudawanPage.scss";

export const WisudawanPage = () => {
  return (
    <Template>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        WisudawanPage
      </motion.div>
    </Template>
  );
};
