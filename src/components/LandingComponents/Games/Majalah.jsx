import React from "react";
import Button from "../../shared/Button";
import "./Majalah.scss";
import { sendAnalyticsAction, MAGAZINE_ACTION } from "../../../api/analytics";

export const Majalah = () => {
  const fileID = "1a9otAi2QLHEPqkTIpwkRRt0LkgMGkn6J";
  sendAnalyticsAction(MAGAZINE_ACTION, "Visit Mercusuar");
  return (
    <div className="majalah">
      <h3>MERCUSUAR: Majalah Wispril ITB 2021</h3>
      <iframe src={`https://drive.google.com/file/d/${fileID}/preview`} />
      <br />
      <a
        href={`https://drive.google.com/uc?export=download&id=${fileID}`}
        onClick={() =>
          sendAnalyticsAction(MAGAZINE_ACTION, "Download Mercusuar")
        }
      >
        <Button>Download</Button>
      </a>
    </div>
  );
};
