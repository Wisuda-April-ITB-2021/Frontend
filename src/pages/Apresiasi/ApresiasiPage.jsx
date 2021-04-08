import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Template } from "../Template/Template";
import "./ApresiasiPage.scss";

import { ASSETS_URL } from "../../api/urls";
import { handleOrgzLocalStorage } from "../Shared/OrganisasiPage";
import { Youtube } from "../../components/LandingComponents/Youtube";
import { Spotify } from "../../components/LandingComponents/Spotify";

// import { fetchApresiasi, normalizeResponse } from "../Controller";
import { Loading } from "../../components/shared/Loading/Loading";

const findOrg = (list, location) => {
  const subPath = location[2];
  const targetSlug = location[3].toUpperCase();
  const orgGroup =
    subPath === "fakultas"
      ? { ...list.FAKULTAS.HMJ, TPB: list.FAKULTAS.TPB }
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

const generateYoutube = (data) => {
  if (!data?.apresiasi_video) return <></>;
  return (
    <>
      <h5 className="Tulisan">- Video -</h5>
      <div className="Youtube">
        <Youtube link={data.apresiasi_video} />
      </div>
    </>
  );
};

const generateSpotify = (data) => {
  if (!data?.apresiasi_spotify) return <></>;
  return (
    <>
      <h5 className="Tulisan">- Spotify -</h5>
      <div className="Spotify">
        <Spotify link={data.apresiasi_spotify} />
      </div>
    </>
  );
};

const generatePoster = (data) => {
  if (!data?.apresiasi_poster) return <></>;
  return (
    <>
      <h5 className="Tulisan">- Poster -</h5>
      <div className="Poster">
        <img src={ASSETS_URL + "/" + data.apresiasi_poster} />
      </div>
    </>
  );
};

const generateCerita = (data) => {
  if (!data?.apresiasi_tulisan) return <></>;
  const tulisan = data.apresiasi_tulisan
    .split("\n")
    .map((line, idx) =>
      line === " " ? <br key={idx} /> : <p key={idx}>{line}</p>
    );
  return (
    <>
      <h5 className="Tulisan">- Karya Tulis -</h5>
      <div className="Cerita">{tulisan}</div>
    </>
  );
};

const generateContent = (data) => (
  <>
    {generateCerita(data)}
    {generateYoutube(data)}
    {generateSpotify(data)}
    {generatePoster(data)}
  </>
);

const isContentAvailable = (data) =>
  data.apresiasi_poster || data.apresiasi_tulisan || data.apresiasi_video;

export const ApresiasiPage = () => {
  const location = useLocation().pathname.split("/");
  const [data, setData] = useState({});

  // useEffect(async () => {
  //   try {
  //     const res = normalizeResponse(await fetchApresiasi(slug));
  //     setData(res);
  //   } catch (err) {
  //     setData({});
  //   }
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await handleOrgzLocalStorage.get();
      setData(findOrg(data, location));
    };
    fetchData();
  }, []);

  return (
    <Template className="container">
      {
        <div className="Tulisanatas">
          <h3>Apresiasi Wisudawan</h3>
          {data ? <h2>{data.name}</h2> : <Loading />}
        </div>
      }

      {data ? (
        isContentAvailable(data) ? (
          generateContent(data)
        ) : (
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            Tidak ada konten untuk ditampilkan.
          </p>
        )
      ) : (
        ""
      )}
    </Template>
  );
};
