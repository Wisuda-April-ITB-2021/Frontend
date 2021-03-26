import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./PicrewMenu.scss";

import TEMP_THUMB from "./temp-img/bg.png";
import TEMP_IMG from "./temp-img/jam-gadang.jpg";

import deleteIcon from "../../../icons/delete-picrew.svg";
import { ReactComponent as Arrow } from "../../../icons/dropdown.svg";

const MAIN_MENU = ["Base", "Face", "Accessories"];
const SUB_MENU = [
  TEMP_THUMB,
  TEMP_THUMB,
  TEMP_THUMB,
  TEMP_THUMB,
  TEMP_THUMB,
  TEMP_THUMB,
  TEMP_THUMB,
];
const OPTIONS = [
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
  TEMP_IMG,
];

const MainMenu = ({ mainIdx, setMainIdx }) => {
  return (
    <div className="picrew-menu-main">
      {MAIN_MENU.map((menu, idx) => (
        <button
          className={`picrew-menu-main-button${
            mainIdx === idx ? " picrew-menu-main-button-active" : ""
          }`}
          key={idx}
          onClick={() => setMainIdx(idx)}
        >
          <h5>{menu}</h5>
        </button>
      ))}
    </div>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 5,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 4,
    partialVisibilityGutter: 0,
  },
};

const CustomArrow = ({ onClick }) => {
  return (
    <div className="picrew-submenu-button-container">
      <Arrow onClick={() => onClick()} />
    </div>
  );
};

const SubMenu = ({ subIdx, setSubIdx }) => {
  return (
    <div className="picrew-menu-sub">
      <Carousel
        responsive={responsive}
        infinite={true}
        customRightArrow={<CustomArrow />}
        customLeftArrow={<CustomArrow />}
      >
        {SUB_MENU.map((data, idx) => (
          <div
            className={`picrew-menu-sub-img${
              idx === subIdx ? " picrew-menu-sub-img-active" : ""
            }`}
            key={idx}
            onClick={() => setSubIdx(idx)}
          >
            <img src={data} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const Options = () => {
  const items = [deleteIcon, ...OPTIONS];
  return (
    <div className="picrew-options">
      {items.map((option, idx) => (
        <div className="picrew-options-item" key={idx}>
          <img src={option} alt="" />
        </div>
      ))}
    </div>
  );
};

export const PicrewMenu = () => {
  const [mainIdx, setMainIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  return (
    <div className="picrew-menu-container">
      <div className="picrew-menu">
        <MainMenu mainIdx={mainIdx} setMainIdx={setMainIdx} />
        <SubMenu subIdx={subIdx} setSubIdx={setSubIdx} />
      </div>
      <Options />
    </div>
  );
};
