import React, { useState } from "react";
import html2canvas from "html2canvas";

import "./Picrew.scss";
import { PicrewContent } from "./PicrewContent";
import { PicrewMenu } from "./PicrewMenu";
import Button from "../../shared/Button";
import { sendAnalyticsAction, PICREW_ACTION } from "../../../api/analytics";

const createDataTemplate = () => ({
  base: {
    bg: "",
    skin: "",
    "rambut-belakang": "",
    etc: "",
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
});
const defaultText = "Ketik di sini";

let initialData =
  JSON.parse(localStorage.getItem("picrew")) || createDataTemplate();
let initialText =
  JSON.parse(localStorage.getItem("picrew-text")) || defaultText;
export const Picrew = () => {
  const [data, setData] = useState(initialData);
  const [text, setText] = useState(initialText);

  const download = (image, name) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = name;
    a.click();
  };

  const getImage = () => {
    const target = document.querySelector(".picrew-container");
    // console.log(target);
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
    console.log(main, sub, img);
    setTimeout(() => {
      // Karena setItem itu async, jadi dikasih interval 200 ms
      localStorage.setItem("picrew", JSON.stringify(data));
    }, 200);
    let target = { ...data };
    target[main][sub] = img;
    setData(target);
  };

  const resetOptions = (e) => {
    e.preventDefault();
    const text = defaultText;
    const images = createDataTemplate();

    setData(images);
    setText(text);
    localStorage.setItem("picrew-text", JSON.stringify(text));
    localStorage.setItem("picrew", JSON.stringify(images));
  };

  const PicrewContentObjects = () => (
    <div className="picrew-container-outer">
      <div className="picrew-container">
        <PicrewContent text={text} setText={setText} data={data} />
      </div>
    </div>
  );

  const PicrewButtons = () => (
    <div className="picrew-buttons">
      <Button className="picrew-button" onClick={resetOptions}>
        Reset
      </Button>
      <Button className="picrew-button" active onClick={downloadPicrew}>
        Download
      </Button>
    </div>
  );

  return (
    <div className="picrew">
      <h3>Wispril Avatar</h3>
      <p>Buat avatar Wisprilmu dan sebarkan keseruan ini di media sosial!</p>
      <div className="picrew-container-outer2">
        <div className="picrew-content-left">
          {/* Kalau pake <PicrewContentObjects /> ada error */}
          {PicrewContentObjects()}
          <PicrewButtons />
        </div>
        <div className="picrew-content-right">
          <PicrewMenu onChange={handleChangeData} />
        </div>
      </div>
    </div>
  );
};
