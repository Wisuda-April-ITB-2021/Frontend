import React, { useState } from "react";
import "./WisudawanCard.scss";
import cardBG from "./img/card-background.png";
import { ASSETS_URL } from "../../../api/urls";
import { motion, AnimatePresence } from "framer-motion";
import { Loading } from "../Loading/Loading";

const WisudawanCard = ({ nama, nim, quotes, image }) => {
  const textLimit = 70;
  const showTooltip = quotes.length > textLimit;
  const judulTA = showTooltip ? quotes.slice(0, textLimit) + "..." : quotes;
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  return (
    <div className="wisudawanCard">
      <h4>{nama}</h4>
      <h4>{nim}</h4>
      <div className="images">
        {!isLoaded && (
          <div className="mainImage">
            <Loading />
          </div>
        )}
        <img src={cardBG} alt="" className="cardBackground" />
        <img
          style={isLoaded ? { opacity: 1 } : { height: 0, width: 0 }}
          src={ASSETS_URL + "/" + image}
          onLoad={() => setLoaded(true)}
          alt=""
          className="mainImage"
        />
      </div>
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
