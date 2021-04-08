import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { Template } from "../Template/Template";
import OrganisasiCardContainer from "../../components/shared/Cards/OrganisasiCardContainer.jsx";

import { ReactComponent as LeftArrow } from "../../icons/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../icons/rightArrow.svg";

import { getAllOrgz } from "../../api/organisasi";

import {
  galeriOptions,
  apresiasiOptions,
  // fakultasOptions,
  // dummyHimpunan,
} from "../Util";

import "./OrganisasiPage.scss";
import { Loading } from "../../components/shared/Loading/Loading";

// Page ini dipake buat both apresiasi sama galeri wisudawan. Nanti baca URL nya aja dari routes.js.

const localItemName = "orgz";
export const handleOrgzLocalStorage = {
  set: (orgz) => {
    const data = {
      orgz,
      lastUpdated: new Date(),
    };
    localStorage.setItem(localItemName, JSON.stringify(data));
  },
  get: async () => {
    const setOrgz = async () => {
      const orgzList = await getAllOrgz();
      handleOrgzLocalStorage.set(orgzList);
      return orgzList;
    };

    // ambil dari local storage. Kalo blm ada, panggil API
    const res = JSON.parse(localStorage.getItem(localItemName));
    if (!res) return await setOrgz();

    // kalo ada, cek datanya masih valid ga (10 menit)
    const { orgz, lastUpdated } = res;
    const isDataOutdated = new Date() - new Date(lastUpdated) > 10 * 60 * 60;
    if (isDataOutdated) return await setOrgz();
    return orgz; // kalo valid, pake dari local storage aja
  },
};

const getOrgzGroups = (data, mainPath, subPath) => {
  if (mainPath === "galeri-wisudawan") {
    return subPath === "hmj"
      ? data.FAKULTAS.HMJ
      : subPath === "ukm"
      ? data.UKM
      : data.ETC;
  } else {
    // apresiasi
    return subPath === "fakultas"
      ? { ...data.FAKULTAS.HMJ, TPB: data.FAKULTAS.TPB }
      : subPath === "ukm"
      ? data.UKM
      : data.ETC;
  }
};

export const OrganisasiPage = () => {
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
    window.location.href = `/${page}/${targetOptions[0].url}`;
  }

  // const [options, setOptions] = useState(targetOptions);
  const options = targetOptions;

  const [subOptions, setSubOptions] = useState();
  const [data, setData] = useState();
  const [selectedOptions, setSelectedOptions] = useState(idx_key);
  const [selected, setSelected] = useState("");
  const [currUrl, setCurrUrl] = useState(path.url);

  const handleChangeOption = (val) => {
    let targetVal = selectedOptions + val;
    targetVal = targetVal < 0 ? targetVal + options.length : targetVal;
    targetVal %= options.length;
    const url = options[targetVal].url;
    setSelectedOptions(targetVal);
    window.history.replaceState(
      null,
      "Wisuda April ITB 2021",
      `/${page}/${url}`
    );
    setCurrUrl(url);
  };

  useEffect(() => {
    const fetchOrgz = async () => {
      const orgz = await handleOrgzLocalStorage.get();
      const currSubOptions = getOrgzGroups(orgz, page, currUrl);
      setData(currSubOptions);

      let subOptionList = Object.keys(currSubOptions);
      subOptionList = subOptionList.map((str) => str.replace(/_/g, " "));
      setSubOptions(subOptionList);
      setSelected(subOptionList[0]);
    };
    fetchOrgz();
  }, [currUrl]);

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
          <AnimatePresence exitBeforeEnter>
            {subOptions ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={subOptions[0]}
              >
                {subOptions.map((row, i) => (
                  <OrganisasiTag
                    text={row}
                    key={i}
                    active={row === selected}
                    onClick={setSelected}
                  />
                ))}
              </motion.div>
            ) : (
              <Loading />
            )}
          </AnimatePresence>
        </div>
        {data ? (
          <OrganisasiCardContainer
            path={`${page}/${currUrl}`}
            data={data[selected.replace(/ /g, "_")]}
          />
        ) : selected ? (
          <Loading />
        ) : (
          ""
        )}
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
