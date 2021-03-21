import React, { useState, useEffect } from "react";
import { Template } from "../Template/Template";
import { MessageForm, Messages } from "../../components/GaleriComponents/Message";
import "./WisudawanPage.scss";
import axios from "axios";

export const WisudawanPage = () => {

    const [data, setData] = useState(null);

    useEffect(async () => {
        const result = await axios(
            'https://jsonplaceholder.typicode.com/posts',
        );
        setData(result.data);
    }, []);

  return (
    <Template>
      <div>WisudawanPage</div>
      <h3>Pojok Surat Cinta</h3>
      <MessageForm />
      <h4>Messages ({data.length})</h4>
      <Messages data={data} />
    </Template>
  );
};
