import React, { useState } from "react";
import html2canvas from "html2canvas";

import "./Picrew.scss";
import { PicrewContent } from "./PicrewContent";
import { PicrewMenu } from "./PicrewMenu";
import Button from "../../shared/Button";
import { sendAnalyticsAction, PICREW_ACTION } from "../../../api/analytics";

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

  const getImage = () => {
    const target = document.querySelector(".picrew-container");
    console.log(target);
    return html2canvas(target, {
      scrollX: 0,
      scrollY: -window.pageYOffset,
      backgroundColor: null,
      scale: 1080 / target.scrollHeight,
    }).then((canvas) => canvas.toDataURL("image/png"));
  };

  const downloadPicrew = async () => {
    const image = await getImage();
    download(image, "wispril-avatar.png");
    sendAnalyticsAction(PICREW_ACTION, "Download Picrew");
  };

  const handleChangeData = (main, sub, img) => {
    let target = { ...data };
    target[main][sub] = img;
    setData(target);
  };

  return (
    <div className="picrew">
      <h3>Wispril Avatar</h3>
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
