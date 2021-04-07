import React from "react";
import "./Sponsor.scss";
import { MEDPARS, SPONSORS } from "../../images/orgz";

const handleClassName = (size, className) => ({ size, className });
const classNameList = {
  XL: "logo-xl",
  L: "logo-l",
  M: "logo-m",
  S: "logo-s",
};

const SponsorTemplate = ({ arr, alt }) => (
  <div className="logo-container">
    {arr.map(({ size, content }, idx) => (
      <React.Fragment key={idx}>
        {content.map((orgz, idx) => (
          <img src={orgz} key={idx} className={classNameList[size]} alt={alt} />
        ))}
      </React.Fragment>
    ))}
  </div>
);

const Sponsor = () => {
  return (
    <div className="sponsor-medpar">
      <h3>OUR SPONSORS</h3>
      <SponsorTemplate arr={SPONSORS} alt="sponsor-logo" />
      <h3>MEDIA PARTNERS</h3>
      <SponsorTemplate arr={MEDPARS} alt="media-partner-logo" />
    </div>
  );
};

export default Sponsor;
