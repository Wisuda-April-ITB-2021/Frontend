import React from "react";
import OrganisasiCard from "./OrganisasiCard";
import "./OrganisasiCardContainer.scss";
import { ASSETS_URL } from "../../../api/urls";

const OrganisasiCardContainer = ({ data }) => {
  return (
    <div className="organisasiCardContainer">
      {data?.map((row, i) => (
        <OrganisasiCard
          text={row.name}
          key={i}
          image={ASSETS_URL + "/" + row.logo}
          url={row.slug}
        />
      ))}
    </div>
  );
};

export default OrganisasiCardContainer;
