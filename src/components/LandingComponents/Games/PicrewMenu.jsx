import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./PicrewMenu.scss";

import TEMP_THUMB from "./temp-img/bg.png";
import TEMP_IMG from "./temp-img/jam-gadang.jpg";

import deleteIcon from "../../../icons/delete-picrew.svg";
import { ReactComponent as Arrow } from "../../../icons/dropdown.svg";

import ACCESSORIES from "../../../images/picrew/accessories/index.js";
import BASE from "../../../images/picrew/base/index.js";
import FACE from "../../../images/picrew/face/index.js";

const subMenu = (name, img) => {
  return { name, img };
};

const MAIN_MENU = ["Base", "Face", "Accessories"];
const SUB_MENU = {
  base: [
    subMenu("bg", TEMP_THUMB),
    subMenu("skin", TEMP_THUMB),
    subMenu("rambut-belakang", TEMP_THUMB),
    subMenu("rambut-poni", TEMP_THUMB),
    subMenu("etc", TEMP_THUMB),
  ],
  face: [
    subMenu("mata", TEMP_THUMB),
    subMenu("alis", TEMP_THUMB),
    subMenu("hidung", TEMP_THUMB),
    subMenu("mulut", TEMP_THUMB),
    subMenu("telinga", TEMP_THUMB),
    subMenu("janggut", TEMP_THUMB),
    subMenu("etc", TEMP_THUMB),
  ],
  accessories: [
    subMenu("kepala", TEMP_THUMB),
    subMenu("jahim", TEMP_THUMB),
    subMenu("inner", TEMP_THUMB),
    subMenu("outer", TEMP_THUMB),
    subMenu("pose", TEMP_THUMB),
    subMenu("etc", TEMP_THUMB),
  ],
};

const OPTIONS = {
  base: BASE,
  face: FACE,
  accessories: ACCESSORIES,
};

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

const SubMenu = ({ mainMenu, subIdx, setSubIdx }) => {
  return (
    <div className="picrew-menu-sub">
      <Carousel
        responsive={responsive}
        infinite={true}
        customRightArrow={<CustomArrow />}
        customLeftArrow={<CustomArrow />}
      >
        {SUB_MENU[mainMenu].map((data, idx) => (
          <div
            className={`picrew-menu-sub-img${
              idx === subIdx ? " picrew-menu-sub-img-active" : ""
            }`}
            key={idx}
            onClick={() => setSubIdx(idx)}
          >
            <img src={data.img} alt={data.name} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const Options = ({ mainMenu, subIdx, onChange }) => {
  const subMenu = SUB_MENU[mainMenu][subIdx].name;
  let target = OPTIONS[mainMenu][subMenu];
  console.log(OPTIONS[mainMenu]);
  console.log(subMenu);
  return (
    <div className="picrew-options">
      <div
        className="picrew-options-item"
        key={"delete"}
        onClick={() => onChange("")}
      >
        <img src={deleteIcon} alt="delete-icon" />
      </div>
      {target.map((option, idx) => (
        <div
          className="picrew-options-item"
          key={idx}
          onClick={() => onChange(option)}
        >
          <img src={option.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export const PicrewMenu = ({ onChange }) => {
  const [mainIdx, setMainIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);

  const handleChangeOptions = (target) => {
    const main = MAIN_MENU[mainIdx].toLowerCase();
    const sub = SUB_MENU[main][subIdx].name;
    onChange(main, sub, target);
  };

  return (
    <div className="picrew-menu-container">
      <div className="picrew-menu">
        <MainMenu mainIdx={mainIdx} setMainIdx={setMainIdx} />
        <SubMenu
          mainMenu={MAIN_MENU[mainIdx].toLowerCase()}
          subIdx={subIdx}
          setSubIdx={setSubIdx}
        />
      </div>
      <Options
        mainMenu={MAIN_MENU[mainIdx].toLowerCase()}
        subIdx={subIdx}
        onChange={handleChangeOptions}
      />
    </div>
  );
};
