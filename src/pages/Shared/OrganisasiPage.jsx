import React from "react";
import { Template } from "../Template/Template";
import "./OrganisasiPage.scss";
import OrganisasiCardContainer from "../../components/Template/Cards/OrganisasiCardContainer.jsx"
import WisudawanCardContainer from "../../components/Template/Cards/WisudawanCardContainer.jsx"
import Accordion from '../../components/GaleriComponents/Accordion'
import imageHMJ from '../../components/GaleriComponents/AccordionAssets/image-hmj.png'
import imageUnit from '../../components/GaleriComponents/AccordionAssets/image-unit.png'
import imageAward from '../../components/GaleriComponents/AccordionAssets/image-award.png'
// Page ini dipake buat both apresiasi sama galeri wisudawan. Nanti baca URL nya aja dari routes.js.
export const OrganisasiPage = () => {
  return (
    <Template>
      <div className='OrganisasiPageContainer'>
        
        <h1>Himpunan Mahasiswa</h1>
        <OrganisasiCardContainer /> 

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
          title='Prestasi'
          content='
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          '
          image={imageAward}
        />

      </div>

      {/* <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div>
      <div>OrganisasiPage</div> */}


    </Template>
  );
};
