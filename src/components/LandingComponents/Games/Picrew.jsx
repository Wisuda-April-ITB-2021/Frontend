import React from "react";
import html2canvas from "html2canvas";

import "./Picrew.scss";
import { PicrewContent } from "./PicrewContent";
import { PicrewMenu } from "./PicrewMenu";
import Button from "../../shared/Button";

export const Picrew = () => {
  const download = (image, name) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = name;
    a.click();
  };

  const downloadPicrew = () => {
    const target = document.querySelector(".piccrew-container");
    html2canvas(target, {
      scrollX: 0,
      scrollY: -window.pageYOffset,
      backgroundColor: null,
      scale: 1080 / target.scrollHeight,
    }).then((canvas) => {
      // document.body.appendChild(canvas);
      const image = canvas.toDataURL("image/png");
      download(image, "wispril-avatar.png");
    });
  };

  return (
    <div className="picrew">
      <h3>Piccrew</h3>
      <p>Buat avatar Wisprilmu dan sebarkan keseruan ini di media sosial!</p>
      <div className="picrew-container-outer">
        <div className="picrew-container">
          <PicrewContent />
        </div>
      </div>
      <PicrewMenu />
      <Button active onClick={downloadPicrew}>
        Download
      </Button>
    </div>
  );
};
