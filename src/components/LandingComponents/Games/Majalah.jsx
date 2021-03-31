import React from "react";
import Button from "../../shared/Button";
import "./Majalah.scss";

export const Majalah = () => {
  const fileID = "1a9otAi2QLHEPqkTIpwkRRt0LkgMGkn6J";
  return (
    <div className="majalah">
      <h3>MERCUSUAR: Majalah Wispril ITB 2021</h3>
      <iframe src={`https://drive.google.com/file/d/${fileID}/preview`} />
      <a href={`https://drive.google.com/uc?export=download&id=${fileID}`}>
        <Button>Download</Button>
      </a>
    </div>
  );
};
