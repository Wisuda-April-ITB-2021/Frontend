import React from "react";
import { Template } from "../Template/Template";
import "./OrganisasiPage.scss";
import OrganisasiCardContainer from "../../components/Template/Cards/OrganisasiCardContainer.jsx"
import WisudawanCardContainer from "../../components/Template/Cards/WisudawanCardContainer.jsx"

// Page ini dipake buat both apresiasi sama galeri wisudawan. Nanti baca URL nya aja dari routes.js.
export const OrganisasiPage = () => {
  return (
    <Template>
      <div className='OrganisasiPageContainer'>
        <h1>Himpunan Mahasiswa</h1>
        <OrganisasiCardContainer /> 
        <h1>Wisudawan</h1>
        <WisudawanCardContainer />

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
