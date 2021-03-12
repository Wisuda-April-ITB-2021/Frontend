import React from "react";
import "./OrganisasiCard.scss";
import ornamentCard from "./img/ornamen-kartu-1.png";

const OrganisasiCard = ({text, image}) => {
	return (
		<div className='organisasiCard'>
			<img src={image} alt='' className={"mainImage"} />
			{text.split(" ").map((row, i) => (
				<h4 key={i}>{row}</h4>
			))}
			<img src={ornamentCard} alt='' className='ornamentCard' />
		</div>
	);
};

export default OrganisasiCard;
