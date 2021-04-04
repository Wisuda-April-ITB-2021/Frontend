import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { Template } from "../Template/Template";
import OrganisasiCardContainer from "../../components/shared/Cards/OrganisasiCardContainer.jsx";

import { ReactComponent as LeftArrow } from "../../icons/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../icons/rightArrow.svg";

import { getAllOrgz } from "../../api/organisasi";

// import Accordion from "../../components/GaleriComponents/Accordion";
// import imageHMJ from "../../components/GaleriComponents/AccordionAssets/image-hmj.png";
// import imageUnit from "../../components/GaleriComponents/AccordionAssets/image-unit.png";
// import imageAward from "../../components/GaleriComponents/AccordionAssets/image-award.png";

import {
  galeriOptions,
  apresiasiOptions,
  fakultasOptions,
  dummyHimpunan,
} from "../Util";

import "./OrganisasiPage.scss";

// Page ini dipake buat both apresiasi sama galeri wisudawan. Nanti baca URL nya aja dari routes.js.
export const OrganisasiPage = () => {
  getAllOrgz();
  const location = useLocation().pathname.split("/");
  const page = location[1];
  const location_key = location[location.length - 1];
  const targetOptions =
    page === "galeri-wisudawan" ? galeriOptions : apresiasiOptions;
  const path = targetOptions.filter((row) => row.url === location_key)[0];
  let idx_key;
  if (path) {
    idx_key = path.idx;
  } else {
    // console.log("MASUK SINI BANG");
    window.location.href = `/${page}/${targetOptions[0].url}`;
  }

  const [options, setOptions] = useState(targetOptions);
  const [subOptions, setSubOptions] = useState(fakultasOptions);
  const [data, setData] = useState(dummyHimpunan);
  const [selectedOptions, setSelectedOptions] = useState(idx_key);
  const [selected, setSelected] = useState("FITB");

  const handleChangeOption = (val) => {
    let targetVal = selectedOptions + val;
    targetVal = targetVal < 0 ? targetVal + options.length : targetVal;
    targetVal %= options.length;
    const url = options[targetVal].url;
    setSelectedOptions(targetVal);
    window.history.replaceState(
      null,
      "Wisuda April ITB 2021",
      `/galeri-wisudawan/${url}`
    );
  };

  return (
    <Template>
      <div className="OrganisasiPageContainer">
        <OrganisasiCarousel
          data={options}
          url={location_key}
          onChange={handleChangeOption}
          selected={selectedOptions}
        />
        <div className="suboptions-container">
          {subOptions.map((row, i) => (
            <OrganisasiTag
              text={row}
              key={i}
              active={row === selected}
              onClick={setSelected}
            />
          ))}
        </div>
        <OrganisasiCardContainer data={data} />
      </div>
    </Template>
  );
};

const OrganisasiCarousel = ({ data, onChange, selected }) => (
  <Carousel
    infiniteLoop
    centerMode
    selectedItem={selected}
    showThumbs={false}
    showIndicators={false}
    showStatus={false}
    centerSlidePercentage={50}
    renderArrowNext={() => (
      <RightArrow onClick={() => onChange(1)} className="right-arrow" />
    )}
    renderArrowPrev={() => (
      <LeftArrow onClick={() => onChange(-1)} className="left-arrow" />
    )}
  >
    {data.length && data.map((row, i) => <h2 key={i}>{row.title}</h2>)}
  </Carousel>
);

const OrganisasiTag = ({ text, active, onClick }) => (
  <div
    className={active ? "organisasi-tag active" : "organisasi-tag"}
    onClick={() => onClick(text)}
  >
    <h5>{text}</h5>
  </div>
);
