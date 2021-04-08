import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {Link} from "react-router-dom";
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

import WisudawanCard from "../../components/shared/Cards/WisudawanCard";

import {getTrending, normalizeResponse} from "../Controller";

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
    const isDataOutdated = new Date() - new Date(lastUpdated) > 10 * 60 * 1000;
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
			<div className='OrganisasiPageContainer'>
				<OrganisasiCarousel
					data={options}
					url={location_key}
					onChange={handleChangeOption}
					selected={selectedOptions}
				/>
				<div className='suboptions-container'>
					<AnimatePresence exitBeforeEnter>
						{subOptions ? (
							<motion.div
								initial={{opacity: 0}}
								animate={{opacity: 1}}
								exit={{opacity: 0}}
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
					<AnimatePresence exitBeforeEnter>
						<motion.div
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							key={selected}
						>
							<OrganisasiCardContainer
								path={`${page}/${currUrl}`}
								data={data[selected.replace(/ /g, "_")]}
							/>
						</motion.div>
					</AnimatePresence>
				) : selected ? (
					<Loading />
				) : (
					""
				)}
				{page === "galeri-wisudawan" ? <TrendingWisudawan /> : ""}
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

const TrendingWisudawan = () => {
	const [data, setData] = useState([]);

	useEffect(async () => {
		// let temp = {
		// 	status: 200,
		// 	status_message: "ok",
		// 	data: [
		// 		{
		// 			Wisudawan: {
		// 				id_wisudawan: "f6fcba46-e8f8-4220-b5f5-dc19bb3e0daf",
		// 				nim: 15316039,
		// 				nama: "Mutiara Ramadhani Nur Irbah",
		// 				judul_ta:
		// 					"Desain Wastewater Treatment Plant (WWTP) Domestik Greywater dan Laboratorium R\u0026D Terintegrasi untuk Water Reuse Plant 6 PT Paragon Technology and Innovation",
		// 				jurusan: "Teknik Lingkungan",
		// 				jurusan_short: "TL",
		// 				fakultas: "Fakultas Teknik Sipil dan Lingkungan",
		// 				fakultas_short: "FTSL",
		// 				photo: "PasFoto/70598044-3d8f-47ac-b2e2-3dea11ffcec0.jpeg",
		// 			},
		// 			Count: 3,
		// 		},
		// 		{
		// 			Wisudawan: {
		// 				id_wisudawan: "30b1b252-376b-42c9-a3d6-89552d9800e3",
		// 				nim: 12015014,
		// 				nama: "Maria Indira S. Pakpahan",
		// 				judul_ta:
		// 					"Identifikasi Karakteristik Endapan Paleotsunami di Daerah Ciracap, Kabupaten Sukabumi, Provinsi Jawa Barat",
		// 				jurusan: "Teknik Geologi",
		// 				jurusan_short: "GL",
		// 				fakultas: "Fakultas Ilmu dan Teknologi Kebumian",
		// 				fakultas_short: "FITB",
		// 				photo: "PasFoto/4494f401-066b-45ae-90c4-2e3d29ae7c5c.jpg",
		// 			},
		// 			Count: 1,
		// 		},
		// 		{
		// 			Wisudawan: {
		// 				id_wisudawan: "6de5f3f7-8e56-424d-bd0e-ad5c68bf0203",
		// 				nim: 15516033,
		// 				nama: "Jessica Nancy Wijaya",
		// 				judul_ta:
		// 					"PERANCANGAN POLA OPERASI TERMINAL PETI KEMAS, PELABUHAN TERNATE, PROVINSI MALUKU UTARA",
		// 				jurusan: "Teknik Kelautan",
		// 				jurusan_short: "KL",
		// 				fakultas: "Fakultas Teknik Sipil dan Lingkungan",
		// 				fakultas_short: "FTSL",
		// 				photo: "PasFoto/6ff21d01-76dd-434b-bc11-1d878eac6702.jpg",
		// 			},
		// 			Count: 1,
		// 		},
		// 		{
		// 			Wisudawan: {
		// 				id_wisudawan: "3a6e83e0-e1d4-45a1-9659-a0a06af948e9",
		// 				nim: 15016142,
		// 				nama: "Hazim Ali Tajuddin",
		// 				judul_ta:
		// 					"Analisis Pemodelan Banjir Sungai Cikakak Dan Perancangan Sistem Drainase Bangunan Fluid Architecture",
		// 				jurusan: "Teknik Sipil",
		// 				jurusan_short: "SI",
		// 				fakultas: "Fakultas Teknik Sipil dan Lingkungan",
		// 				fakultas_short: "FTSL",
		// 				photo: "PasFoto/default-wisudawan.png",
		// 			},
		// 			Count: 1,
		// 		},
		// 		{
		// 			Wisudawan: {
		// 				id_wisudawan: "e9df911f-c1fc-4fd4-9ffa-932b4523efbd",
		// 				nim: 19016331,
		// 				nama: "Bagus Giovani",
		// 				judul_ta: "Measuring The Service Quality of Upnormal Restaurant",
		// 				jurusan: "Manajemen",
		// 				jurusan_short: "MB",
		// 				fakultas: "Sekolah Bisnis dan Manajemen",
		// 				fakultas_short: "SBM",
		// 				photo: "PasFoto/280f9a56-7f2b-47f8-a032-da72f45a70aa.jpg",
		// 			},
		// 			Count: 1,
		// 		},
		// 	],
		// };
		let res = normalizeResponse(await getTrending());
		res = res.slice(0, 3);
		// const res = temp.data.slice(0, 3);
		// console.log(res2);
		setData(res);
	}, []);

	return (
		<div className='trending-container'>
			<h1>Most Visited Wisudawan</h1>
			<div className='trending-wisudawan-container'>
				{!data.length
					? ""
					: data.map((row, i) => (
							<Link
								key={i}
								to={`/galeri-wisudawan/wisudawan/${row.Wisudawan.id_wisudawan}`}
							>
								<WisudawanCard
									nama={row.Wisudawan.nama}
									nim={row.Wisudawan.nim}
									image={row.Wisudawan.photo}
									quotes={row.Wisudawan.judul_ta}
								/>
								<div className='counter'>
									<h5>Visited : {row.Count} time(s)</h5>
								</div>
							</Link>
					  ))}
			</div>
		</div>
	);
};