import React, { useState } from "react";
import { sendAnalyticsAction, PICREW_ACTION } from "../../../api/analytics";

import "./Picrew.scss";

import {
  createDataTemplate,
  downloadPicrew,
  setLocalPicrewImages,
  setLocalPicrewText,
  getLocalPicrewImages,
  getLocalPicrewText,
} from "./picrewFunctions";
import { shuffle } from "./picrewShuffle";
import { PicrewContent } from "./PicrewContent";
import { PicrewMenu } from "./PicrewMenu";
import Button from "../../shared/Button";

import { ReactComponent as Shuffle } from "../../../icons/shuffle.svg";
import { ReactComponent as Reset } from "../../../icons/reset.svg";
import { ReactComponent as Text } from "../../../icons/text.svg";

const defaultText = "Ketik di sini";

const Picrew = () => {
  let initialData = getLocalPicrewImages() || createDataTemplate();
  let initialText = getLocalPicrewText() || defaultText;
  const [data, setData] = useState(initialData);
  const [text, setText] = useState(initialText);
  const [showText, setShowText] = useState(false);

  const handleChangeData = (main, sub, img) => {
    setTimeout(() => {
      // Karena setItem itu async, jadi dikasih interval 200 ms
      setLocalPicrewImages(data);
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
    setLocalPicrewImages(images);
    setLocalPicrewText(text);
    sendAnalyticsAction(PICREW_ACTION, "Reset Picrew");
  };

  const shufflePicrew = () => {
    const images = shuffle();
    setData(images);
    setLocalPicrewImages(images);
  };

  const toogleShowText = () => {
    !showText && !text && setText(defaultText);
    setShowText((prev) => !prev);
  };

  const PicrewContentObjects = () => (
    <div className="picrew-container-outer">
      <div className="picrew-container">
        <PicrewContent
          showText={showText}
          text={text}
          setText={setText}
          data={data}
        />
      </div>
    </div>
  );

  const PicrewButtons = () => (
    <div className="picrew-buttons">
      <Button
        className="picrew-button"
        active={showText}
        icon
        onClick={toogleShowText}
      >
        <Text />
      </Button>
      <Button className="picrew-button" icon onClick={shufflePicrew}>
        <Shuffle />
      </Button>
      <Button className="picrew-button" icon onClick={resetOptions}>
        <Reset />
      </Button>
      <Button className="picrew-button" active onClick={downloadPicrew}>
        Download
      </Button>
    </div>
  );

  return (
    <div className="picrew">
      <h3>Wispril Avatar</h3>
      <p>
        Buat Avatar Wisprilmu, download, dan sebarkan keseruan ini di media
        sosial!
      </p>
      <div className="picrew-container-outer2">
        <div className="picrew-content-left">
          {/* Kalau pake <PicrewContentObjects /> ada error */}
          {PicrewContentObjects()}
          <PicrewButtons />
        </div>
        <div className="picrew-content-right">
          <PicrewMenu currentImages={data} onChange={handleChangeData} />
        </div>
      </div>
    </div>
  );
};

export default Picrew;
