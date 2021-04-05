import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { ASSETS_URL } from "../../api/urls";
import { getAllWisudawan } from "../../api/organisasi";
import { Template } from "../Template/Template";

import { handleOrgzLocalStorage } from "../Shared/OrganisasiPage";
import WisudawanCardContainer from "../../components/shared/Cards/WisudawanCardContainer.jsx";
// import imageHMJ from "../../components/GaleriComponents/AccordionAssets/image-hmj.png";

import "./GaleriWisudawanPage.scss";
import { Loading } from "../../components/shared/Loading/Loading";

const findOrg = (list, location) => {
  const subPath = location[2];
  const targetSlug = location[3].toUpperCase();
  const orgGroup =
    subPath === "hmj"
      ? list.FAKULTAS.HMJ
      : subPath === "ukm"
      ? list.UKM
      : list.ETC;

  let data;
  Object.keys(orgGroup).forEach((subMenu) => {
    orgGroup[subMenu].forEach((org) => {
      if (org.slug.toUpperCase() === targetSlug.toUpperCase()) {
        data = org;
      }
    });
  });
  return data;
};

export const GaleriWisudawanPage = () => {
  const location = useLocation().pathname.split("/");

  const [dataOrg, setDataOrg] = useState();
  const [dataWisudawan, setDataWisudawan] = useState();
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await handleOrgzLocalStorage.get();
      // console.log(data);
      setDataOrg(findOrg(data, location));
      setLoaded(true);

      const wisudawan = await getAllWisudawan(location[3]);
      setDataWisudawan(wisudawan);
      // console.log(wisudawan);
    };
    fetchData();
  }, []);

  return (
    <Template isLong>
      {!isLoaded ? (
        <Loading />
      ) : dataOrg ? (
        <div className="galeri-wisudawan-container">
          <OrganizationSummary
            title={dataOrg.name}
            desc={dataOrg.category.replace(/_/g, " ")}
            image={dataOrg.logo}
          />

          <h3>Daftar Wisudawan</h3>
          <WisudawanCardContainer data={dataWisudawan} />
        </div>
      ) : (
        <h2>Organisasi tidak ditemukan</h2>
      )}
    </Template>
  );
};

const OrganizationSummary = ({ title, desc, image }) => (
  <div className="organization-detail">
    <h2 className="title">{title}</h2>
    <h6 className="desc">{desc}</h6>
    <img src={`${ASSETS_URL}/${image}`} className="image" />
  </div>
);
