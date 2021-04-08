import React, { useState, useEffect } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import OrnamentLayer1 from "../../images/bg/bg-layer1.png";
import OrnamentLayer2 from "../../images/bg/bg-layer2.png";
import OrnamentLayer3 from "../../images/bg/bg-layer3.png";
import OrnamentLayer4 from "../../images/bg/bg-layer4.png";

import "./Template.scss";

const LongBackground = ({ nocontain }) => {
  const [parallaxHeight, setParallaxHeight] = useState(0);

  useEffect(() => {
    setParallaxHeight(
      document.getElementsByClassName("template")[0].clientHeight
    );
  }, [parallaxHeight]);

  const { scrollY } = useViewportScroll();
  const firstLayerOpacity = useTransform(
    scrollY,
    [0, parallaxHeight * 0.35],
    [1, 0.5]
  );
  const secondLayerOpacity = useTransform(
    scrollY,
    [0, parallaxHeight * 0.9],
    [0, 1]
  );
  const thirdLayerOpacity = useTransform(
    scrollY,
    [0, parallaxHeight * 0.6],
    [0, 0.5]
  );
  const fourthLayerOpacity = useTransform(
    scrollY,
    [0, parallaxHeight * 0.15],
    [1, 0.5]
  );
  const firstLayerPosition = useTransform(
    scrollY,
    [0, parallaxHeight * 0.5],
    [0, -parallaxHeight * 0.2]
  );
  const secondLayerPosition = useTransform(
    scrollY,
    [0, parallaxHeight],
    [0, -parallaxHeight * 0.1]
  );
  const thirdLayerPosition = useTransform(
    scrollY,
    [0, parallaxHeight * 0.8],
    [0, -parallaxHeight * 0.75]
  );
  const fourthLayerPosition = useTransform(
    scrollY,
    [0, parallaxHeight * 0.5],
    [0, -parallaxHeight * 0.2]
  );

  return (
    <>
      <motion.img
        src={OrnamentLayer1}
        alt="Ornament Layer 1"
        className={`background layer-1${nocontain ? " hidden" : ""}`}
        style={{ opacity: firstLayerOpacity, y: firstLayerPosition }}
      />
      <motion.img
        src={OrnamentLayer2}
        alt="Ornament Layer 2"
        className={`background layer-2${nocontain ? " hidden" : ""}`}
        style={{ opacity: secondLayerOpacity, y: secondLayerPosition }}
      />
      <motion.img
        src={OrnamentLayer3}
        alt="Ornament Layer 3"
        className={`background layer-3${nocontain ? " hidden" : ""}`}
        style={{ opacity: thirdLayerOpacity, y: thirdLayerPosition }}
      />
      <motion.img
        src={OrnamentLayer4}
        alt="Ornament Layer 4"
        className={`background layer-4${nocontain ? " hidden" : ""}`}
        style={{ opacity: fourthLayerOpacity, y: fourthLayerPosition }}
      />
    </>
  );
};

export default LongBackground;
