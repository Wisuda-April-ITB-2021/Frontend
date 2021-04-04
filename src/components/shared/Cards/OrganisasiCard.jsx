import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import "./OrganisasiCard.scss";
import ornamentCard from "./img/ornamen-kartu-1.png";
import { Loading } from "../Loading/Loading";

const OrganisasiCard = ({ text, image, url }) => {
  const [isLoaded, setLoaded] = useState(false);
  const location = useLocation().pathname;
  return (
    <Link to={`${location}/${url}`} className="organisasi-card">
      {!isLoaded && (
        <div className="mainImage">
          <Loading />
        </div>
      )}
      <img
        src={image}
        onLoad={() => setLoaded(true)}
        style={isLoaded ? { opacity: 1 } : { width: 0, height: 0 }}
        alt=""
        className="mainImage"
      />
      <h4>{text}</h4>
      <img src={ornamentCard} alt="" className="ornamentCard" />
    </Link>
  );
};

export default OrganisasiCard;
