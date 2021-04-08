import React from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./ImageModal.scss";

export const ImageModal = ({ open, toogleOpen, src }) => {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-image-container"
        >
          <div className="modal-image-bg" onClick={toogleOpen} />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="modal-image"
          >
            <img src={src} alt="" />
            <div className="modal-image-close" onClick={toogleOpen} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal-root")
  );
};
