import React, { useState } from "react";
import html2canvas from "html2canvas";

import "./Picrew.scss";
import { PicrewContent } from "./PicrewContent";
import { PicrewMenu } from "./PicrewMenu";
import Button from "../../shared/Button";

let dataTemplate = {
  base: {
    bg: "",
    skin: "",
    "rambut-belakang": "",
    "rambut-poni": "",
  },
  face: {
    mata: "",
    alis: "",
    hidung: "",
    mulut: "",
    telinga: "",
    janggut: "",
    etc: "",
  },
  accessories: {
    kepala: "",
    jahim: "",
    inner: "",
    outer: "",
    pose: "",
    etc: "",
  },
};

export const Picrew = () => {
  const [data, setData] = useState(dataTemplate);

  const download = (image, name) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = name;
    a.click();
  };

  const downloadPicrew = () => {
    const target = document.querySelector(".picrew-container");
    console.log(target);
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

  const handleChangeData = (main, sub, img) => {
    let target = { ...data };
    target[main][sub] = img;
    setData(target);
  };

  return (
    <div className="picrew">
      <h3>Piccrew</h3>
      <p>Buat avatar Wisprilmu dan sebarkan keseruan ini di media sosial!</p>
      <div className="picrew-container-outer">
        <div className="picrew-container">
          <PicrewContent data={data} />
        </div>
      </div>
      <Button className="picrew-button" active onClick={downloadPicrew}>
        Download
      </Button>
      <PicrewMenu onChange={handleChangeData} />
    </div>
  );
};
