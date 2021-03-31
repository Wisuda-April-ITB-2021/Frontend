import React, { useState, useEffect } from "react";
import { Template } from "../Template/Template";
import {
  MessageForm,
  Messages,
} from "../../components/GaleriComponents/Message";
import { List, ListItem } from "../../components/shared/List";

import Accordion from "../../components/GaleriComponents/Accordion";
import imageHMJ from "../../components/GaleriComponents/AccordionAssets/image-hmj.png";
import imageUnit from "../../components/GaleriComponents/AccordionAssets/image-unit.png";
import imageAward from "../../components/GaleriComponents/AccordionAssets/image-award.png";
import imageCertificate from "../../components/GaleriComponents/AccordionAssets/image-certificate.png";
import "./WisudawanPage.scss";
import axios from "axios";

const dummyList = [
  { title: "Lahir di bandung, 1 Januari 1999", content: "" },
  {
    title: "Wibu Parah",
    content:
      "Katanya sih udah ngabisin 1000 episode anime, trus suka koleksi figure-figure anime idol gitu",
    image: imageHMJ,
  },
];

const dummyOrganisasi = [
  {
    title: `HMME "Atmospharia" ITB`,
    image: imageHMJ,
    content: dummyList,
  },
  {
    title: `Unit Kebudayaan Jepang`,
    image: imageUnit,
    content: dummyList,
  },
];

const dummyPrestasidanKarya = [
  {
    title: `Prestasi`,
    image: imageAward,
    content: dummyList,
  },
  {
    title: `Karya`,
    image: imageCertificate,
    content: dummyList,
  },
];

const generateList = (data) => (
  <List>
    {data.map((row, i) => (
      <ListItem title={row.title} imageLink={row.image} key={i}>
        {row.content}
      </ListItem>
    ))}
  </List>
);

const generateAccordion = (data) => (
  <>
    {data.map((row, i) => (
      <Accordion
        title={row.title}
        image={row.image}
        content={generateList(row.content)}
        key={i}
      />
    ))}
  </>
);

export const WisudawanPage = () => {
  const [data, setData] = useState(null);

  useEffect(async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/posts");
    setData(result.data.slice(0, 5));
  }, []);

  return (
    <Template isLong>
      <div className="wisudawan-page-specific">
        <div className="bio">
          <div className="name">
            <h2>Nama</h2>
            <h3>10017001/IF</h3>
          </div>
          <img src={"https://picsum.photos/200"} />
          <h5 className="desc">
            Kiat sukses berternak lele supaya banyak cuan di tengah pandemi
          </h5>
          <div className="media-social"></div>
        </div>

        <div className="fun-facts">
          <h3>Fun Facts</h3>
          {generateList(dummyList)}
        </div>

        <div className="organisasi">
          <h3>Organisasi Dan Kontribusi</h3>
          {generateAccordion(dummyOrganisasi)}
        </div>

        <div className="prestasi">
          <h3>Prestasi Dan Karya</h3>
          {generateAccordion(dummyPrestasidanKarya)}
        </div>

        <h3>Pojok Surat Cinta</h3>
        <MessageForm />
        <h4>Messages ({data && data.length})</h4>
        <Messages data={data} />
      </div>
    </Template>
  );
};
