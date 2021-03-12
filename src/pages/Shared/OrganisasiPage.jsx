import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";

import {Template} from "../Template/Template";
import OrganisasiCardContainer from "../../components/shared/Cards/OrganisasiCardContainer.jsx"
import WisudawanCardContainer from "../../components/shared/Cards/WisudawanCardContainer.jsx"

import {ReactComponent as LeftArrow} from "../../icons/leftArrow.svg";
import {ReactComponent as RightArrow} from "../../icons/rightArrow.svg";

import Accordion from '../../components/GaleriComponents/Accordion'
import imageHMJ from '../../components/GaleriComponents/AccordionAssets/image-hmj.png'
import imageUnit from '../../components/GaleriComponents/AccordionAssets/image-unit.png'
import imageAward from '../../components/GaleriComponents/AccordionAssets/image-award.png'


import "./OrganisasiPage.scss";

const options = [
	{title: "Himpunan Mahasiswa", url: "hmj", idx: 0},
	{title: "Unit Mahasiswa", url: "ukm", idx: 1},
	{title: "Lainnya", url: "etc", idx: 2},
];
// Page ini dipake buat both apresiasi sama galeri wisudawan. Nanti baca URL nya aja dari routes.js.
export const OrganisasiPage = () => {
  const location = useLocation().pathname.split("/");
	const location_key = location[location.length - 1];
	const idx_key = options.filter((row) => row.url === location_key)[0].idx;

	const [subOptions, setSubOptions] = useState([
		"FITB",
		"FMIPA",
		"FSRD",
		"FTI",
		"FTMD",
		"FTSL",
		"FTTM",
		"SAPPK",
		"SBM",
		"SF",
		"SITH",
		"STEI",
	]);
	const [data, setData] = useState([
		{
			text: "HMMME ATMOSPHAIRA ITB",
			img: "https://picsum.photos/200",
			url: "https://www.google.com",
		},
		{
			text: "HMO TRITON ITB",
			img: "https://picsum.photos/200",
			url: "https://www.google.com",
		},
		{
			text: "HMTG GEA ITB",
			img: "https://picsum.photos/200",
			url: "https://www.google.com",
		},
		{
			text: "IMG ITB",
			img: "https://picsum.photos/200",
			url: "https://www.google.com",
		},
	]);
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
			<div className='OrganisasiPageContainer'>
				<OrganisasiCarousel
					data={options}
					url={location_key}
					onChange={handleChangeOption}
					selected={selectedOptions}
				/>
				<div className="suboptions-container">
					{subOptions.map((row,i)=><OrganisasiTag text={row} key={i} active={row===selected} onClick={setSelected}/>)}
				</div>
				<OrganisasiCardContainer data={data} />
				<h1>Wisudawan</h1>
				<WisudawanCardContainer />
				<h1>Accordion</h1>
        <Accordion
					title='HMME "Atmospharia" ITB'
					content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
					image={imageHMJ}
        />

        <Accordion
					title='Unit Kebudayaan Jepang'
					content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
					image={imageUnit}
        />

        <Accordion
          title="Prestasi"
          content="
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          "
          image={imageAward}
        />
			</div>
		</Template>
	);
};

const OrganisasiCarousel = ({data, onChange, selected}) => (
	<Carousel
		infiniteLoop
		centerMode
		selectedItem={selected}
		showThumbs={false}
		showIndicators={false}
		showStatus={false}
		centerSlidePercentage={50}
		renderArrowNext={() => (
			<RightArrow onClick={() => onChange(1)} className='right-arrow' />
		)}
		renderArrowPrev={() => (
			<LeftArrow onClick={() => onChange(-1)} className='left-arrow' />
		)}
	>
		{data.length && data.map((row, i) => <h2 key={i}>{row.title}</h2>)}
	</Carousel>
);

const OrganisasiTag = ({text, active, onClick}) => (
	<div
		className={active ? "organisasi-tag active" : "organisasi-tag"}
		onClick={()=>onClick(text)}
	>
		<h5>{text}</h5>
	</div>
);
