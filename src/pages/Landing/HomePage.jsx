import React, { useState, useEffect } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Link } from "react-router-dom";

import { EVENT_PAGE } from "../../routes/routes";
import { Template } from "../Template/Template";
import { VisiMisi } from "../VisiMisi";
import Logo from "../../images/logo/Logo.png";
import Button from "../../components/shared/Button";
import "./HomePage.scss";

import AwanCerahBawah from "../../images/decoration/awan_cerah_bawah.png";
import AwanGelapAtas from "../../images/decoration/awan_gelap_atas.png";
import BaseLangit from "../../images/decoration/base_langit.png";
import Batu from "../../images/decoration/batu.png";
import BintangBawahAwan from "../../images/decoration/bintang_di_bawah_awan.png";
import Capung from "../../images/decoration/capung.png";
import Rerumputan from "../../images/decoration/rerumputan.png";
import RumputKanan from "../../images/decoration/rumput.png";
import RumputKiri from "../../images/decoration/rumput-1.png";

const Parallax = () => {
  const [parallaxHeight, setParallaxHeight] = useState(0);
  const [parallaxWidth, setParallaxWidth] = useState(0);
  const variants = {
    bottomInitial: {
      opacity: 0,
      y: 20,
    },
    bottomIn: {
      opacity: 1,
      y: 0,
    },
    bottomOut: {
      opacity: 0,
      y: 20,
    },

    topInitial: {
      opacity: 0,
      y: -20,
    },
    topIn: {
      opacity: 1,
      y: 0,
    },
    topOut: {
      opacity: 0,
      y: -20,
    },
  };
  useEffect(() => {
    setParallaxHeight(
      document.getElementsByClassName("parallax")[0].clientHeight
    );
    setParallaxWidth(
      document.getElementsByClassName("parallax")[0].clientWidth
    );
  }, []);

  const { scrollY } = useViewportScroll();
  const firstLayerOpacity = useTransform(
    scrollY,
    [0, parallaxHeight * 0.25],
    [0.5, 0.1]
  );
  const secondLayerOpacity = useTransform(
    scrollY,
    [0, parallaxHeight * 0.5],
    [1, 0]
  );
  const thirdLayerOpacity = useTransform(
    scrollY,
    [0, parallaxHeight * 0.75],
    [1, 0]
  );
  const fourthLayerOpacity = useTransform(
    scrollY,
    [0, parallaxHeight * 0.9],
    [1, 0]
  );
  const secondLayerPosition = useTransform(
    scrollY,
    [0, parallaxHeight * 0.5],
    [0, -parallaxHeight / 5]
  );
  const thirdLayerPosition = useTransform(
    scrollY,
    [0, parallaxHeight * 0.75],
    [0, parallaxHeight / 5]
  );
  const fourthLayerPosition = useTransform(
    scrollY,
    [0, parallaxHeight],
    [0, parallaxHeight / 5]
  );

  // React.useEffect(() => {
  //   scrollY.onChange(v => console.log(v, parallaxH));
  // }, [scrollY]);
  return (
    <div className="parallax">
      <motion.img
        src={BaseLangit}
        alt="Base Langit"
        className="base-langit"
        animate="topIn"
        variants={variants}
        transition={{ duration: 1.5 }}
        style={{ opacity: firstLayerOpacity }}
      />

      <motion.img
        src={AwanGelapAtas}
        alt="Awan Gelap Atas"
        className="awan-gelap-atas"
        animate="topIn"
        variants={variants}
        transition={{ duration: 1.5 }}
        style={{ opacity: secondLayerOpacity, y: secondLayerPosition }}
      />

      <motion.img
        src={AwanCerahBawah}
        alt="Awan Cerah Bawah"
        className="awan-cerah-bawah"
        animate="bottomIn"
        variants={variants}
        transition={{ duration: 1.125 }}
        style={{ opacity: secondLayerOpacity, y: secondLayerPosition }}
      />
      <motion.img
        src={BintangBawahAwan}
        alt="Bintang Bawah Awan"
        className="bintang-bawah-awan"
        animate="bottomIn"
        variants={variants}
        transition={{ duration: 1.125 }}
        style={{ opacity: secondLayerOpacity, y: secondLayerPosition }}
      />

      <motion.div
        className="left-component"
        animate="bottomIn"
        variants={variants}
        transition={{ duration: 0.9375 }}
        style={{ opacity: thirdLayerOpacity, y: thirdLayerPosition }}
      >
        <img src={Capung} alt="Capung" className="capung" />
        <img src={RumputKiri} alt="Rumput Kiri" className="rumput-kiri" />
      </motion.div>

      <motion.img
        src={Batu}
        alt="Batu"
        className="batu"
        animate="bottomIn"
        variants={variants}
        transition={{ duration: 0.9375 }}
        style={{ opacity: thirdLayerOpacity, y: thirdLayerPosition }}
      />
      <motion.img
        src={RumputKanan}
        alt="Rumput Kanan"
        className="rumput-kanan"
        animate="bottomIn"
        variants={variants}
        transition={{ duration: 0.9375 }}
        style={{ opacity: thirdLayerOpacity, y: thirdLayerPosition }}
      />

      <motion.img
        src={Rerumputan}
        alt="Rerumputan"
        className="rerumputan"
        animate="bottomIn"
        variants={variants}
        transition={{ duration: 0.75 }}
        style={{
          opacity: fourthLayerOpacity,
          // y: fourthLayerPosition
        }}
      />

      <motion.div
        className="logo-wrap"
        // style={{ opacity: secondLayerOpacity }}
      >
        <img src={Logo} alt="Logo Wisuda April" className="logo" />
        <h6 className="logo-desc">
          <i>
            “To be wise is to accept change. <br /> To be enlightened is to love
            change.”
          </i>
        </h6>
        <Link to={EVENT_PAGE.path}>
          <Button className="button">Events</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export const HomePage = () => {
  return (
    <Template nocontain>
      <Parallax />
      <VisiMisi />
    </Template>
  );
};
