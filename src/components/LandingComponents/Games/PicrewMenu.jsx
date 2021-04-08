import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./PicrewMenu.scss";

import deleteIcon from "../../../icons/delete-picrew.svg";
import { ReactComponent as Arrow } from "../../../icons/dropdown.svg";

import ACCESSORIES from "../../../images/picrew/accessories/index.js";
import BASE from "../../../images/picrew/base/index.js";
import FACE from "../../../images/picrew/face/index.js";

class Menu {
  constructor(name, content) {
    this.name = name;
    this.content = content;
  }

  getSubMenus() {
    return Object.keys(this.content);
  }

  getImages(option) {
    return this.content[option] ? this.content[option].assets : {};
  }

  getThumb(option) {
    return this.content[option] ? this.content[option].image : "";
  }
}

export const MENU_DB = [
  new Menu("Base", BASE),
  new Menu("Face", FACE),
  new Menu("Accessories", ACCESSORIES),
];

const MainMenu = ({ mainIdx, setMainIdx }) => {
  return (
    <div className="picrew-menu-main">
      {MENU_DB.map((menu, idx) => (
        <button
          className={`picrew-menu-main-button${
            mainIdx === idx ? " picrew-menu-main-button-active" : ""
          }`}
          key={idx}
          onClick={() => setMainIdx(idx)}
        >
          <h5>{menu.name}</h5>
        </button>
      ))}
    </div>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 700 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
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

const SubMenu = ({ mainIdx, subIdx, setSubIdx }) => {
  const submenu = MENU_DB[mainIdx].content;
  const SubmenuComponents = [];
  Object.entries(submenu).forEach(([key, value], idx) => {
    SubmenuComponents.push(
      <div
        className={`picrew-menu-sub-img${
          idx === subIdx ? " picrew-menu-sub-img-active" : ""
        }`}
        key={key}
        onClick={() => setSubIdx(idx)}
      >
        <img src={value.image} alt={`thumbnail-${idx}`} />
      </div>
    );
  });
  return (
    <div className="picrew-menu-sub">
      <Carousel
        responsive={responsive}
        infinite={true}
        customRightArrow={<CustomArrow />}
        customLeftArrow={<CustomArrow />}
        keyBoardControl={false}
      >
        {SubmenuComponents}
      </Carousel>
    </div>
  );
};

const Options = ({ mainIdx, subIdx, onChange, currentImages }) => {
  const subMenu = MENU_DB[mainIdx].getSubMenus();
  let target = MENU_DB[mainIdx].getImages(subMenu[subIdx]);

  const currentMenu = currentImages[Object.keys(currentImages)[mainIdx]];
  const currentItem = currentMenu[subMenu[subIdx]];
  return (
    <div className="picrew-options">
      <div className="picrew-options-inner">
        <div
          className="picrew-options-item"
          key={"delete"}
          onClick={() => onChange("")}
        >
          <img src={deleteIcon} alt="delete-icon" />
        </div>
        {target.map((option, idx) => (
          <div
            className={`picrew-options-item${
              option === currentItem ? " picrew-options-item-active" : ""
            }`}
            key={idx}
            onClick={() => onChange(option)}
          >
            <img src={option} alt={`options-${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const PicrewMenu = ({ onChange, currentImages }) => {
  const [mainIdx, setMainIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);

  const handleChangeOptions = (target) => {
    const main = MENU_DB[mainIdx].name.toLowerCase();
    const sub = MENU_DB[mainIdx].getSubMenus()[subIdx];
    onChange(main, sub, target);
  };

  const handleChangeMain = (target) => {
    setSubIdx(0);
    setMainIdx(target);
  };

  return (
    <div className="picrew-menu-container">
      <div className="picrew-menu">
        <MainMenu mainIdx={mainIdx} setMainIdx={handleChangeMain} />
        <SubMenu mainIdx={mainIdx} subIdx={subIdx} setSubIdx={setSubIdx} />
      </div>
      <Options
        mainIdx={mainIdx}
        subIdx={subIdx}
        onChange={handleChangeOptions}
        currentImages={currentImages}
      />
    </div>
  );
};
