import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../Template/variants";
import { Template } from "../Template/Template";
import "./OrganisasiPage.scss";

// Page ini dipake buat both apresiasi sama galeri wisudawan. Nanti baca URL nya aja dari routes.js.
export const OrganisasiPage = () => {
  return (
    <Template>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        OrganisasiPage
      </motion.div>
    </Template>
  );
};
