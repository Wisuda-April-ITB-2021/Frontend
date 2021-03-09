import React from "react";
import { Template } from "../Template/Template";
import "./ApresiasiPage.scss";

import {Youtube} from "../../components/LandingComponents/Youtube";
import {Spotify} from "../../components/LandingComponents/Spotify";

export const ApresiasiPage = () => {
  return (
    <Template className="container">
      <div className="Tulisanatas">
        <h3>Apresiasi Wisudawan</h3>
        <h2>TPB STEI 2020</h2>
      </div>
      <h5 className="Tulisan">- Video -</h5>
      <div className="Youtube">
        <Youtube link="https://www.youtube.com/embed/FiWxQQ5QcfU" />
      </div>
      <h5 className="Tulisan">- Spotify -</h5>
      <div className="Spotify">
    	  <Spotify link="https://open.spotify.com/embed/track/4RAOI1etsgbh5NP3T5R8rN" />
      </div>
      <h5 className="Tulisan">- Poster -</h5>
      <div className="Poster">
        {/* Masukin poster di sini */}
      </div>
      <h5 className="Tulisan">- Cerita -</h5>
      <div className="Cerita">
        {/* Masukin cerita di sini */}
      </div>
    </Template>
  );
};
