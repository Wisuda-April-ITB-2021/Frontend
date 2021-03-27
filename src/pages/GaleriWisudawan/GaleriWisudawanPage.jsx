import React from "react";
import { Template } from "../Template/Template";

import WisudawanCardContainer from "../../components/shared/Cards/WisudawanCardContainer.jsx";
import imageHMJ from "../../components/GaleriComponents/AccordionAssets/image-hmj.png";

import "./GaleriWisudawanPage.scss";

export const GaleriWisudawanPage = () => {
  return (
		<Template>
			<div className='galeri-wisudawan-container'>
				<OrganizationSummary
					title={`HMME "ASMOPHAIRA" ITB`}
					desc={`Vitae venenatis cursus eget sit consectetur odio. Diam turpis duis praesent sapien, purus adipiscing adipiscing. `}
					image={imageHMJ}
				/>

				<h3>Daftar Wisudawan</h3>
				<WisudawanCardContainer />
			</div>
		</Template>
	);
};

const OrganizationSummary = ({title, desc, image}) => (
	<div className='organization-detail'>
		<h2 className='title'>{title}</h2>
		<h6 className='desc'>{desc}</h6>
		<img src={image} />
	</div>
);
