import React, { useState } from "react";
import "./WisudawanCard.scss";
import { motion, AnimatePresence } from "framer-motion";

const WisudawanCard = ({ nama, nim, quotes }) => {
  const textLimit = 70;
  const showTooltip = quotes.length > textLimit;
  const judulTA = showTooltip ? quotes.slice(0, textLimit) + "..." : quotes;
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  return (
    <div className="wisudawanCard">
      <h4>{nama}</h4>
      <h4>{nim}</h4>
      <p
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        {judulTA}
      </p>
      <AnimatePresence>
        {showTooltip && isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
            className="wisudawan-card-tooltip"
          >
            {quotes}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WisudawanCard;
