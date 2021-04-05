import React, { useEffect, useState } from "react";
import WisudawanCardContainer from "../shared/Cards/WisudawanCardContainer";
import { ReactComponent as SearchIcon } from "../../icons/search-icon.svg";
import "./WisudawanFilter.scss";

export const WisudawanFilter = ({ data }) => {
  const [wisudawan, setWisudawan] = useState(data);
  const [text, setText] = useState("");
  useEffect(() => {
    setWisudawan(
      data.filter(
        (wisudawan) =>
          wisudawan.nama.toLowerCase().includes(text.toLowerCase()) ||
          ("" + wisudawan.nim).includes(text.toLowerCase())
      )
    );
  }, [text]);

  return (
    <div className="WisudawanFilter">
      <form>
        <h3>Daftar Wisudawan</h3>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder={"Cari Nama atau NIM"}
        />
        <SearchIcon className="search-icon" />
      </form>
      <WisudawanCardContainer data={wisudawan} />
    </div>
  );
};

export default WisudawanFilter;
