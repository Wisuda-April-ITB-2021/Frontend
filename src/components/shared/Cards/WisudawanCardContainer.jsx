import React from "react";
import { Link } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import WisudawanCard from "./WisudawanCard";
import "./WisudawanCardContainer.scss";
// import {dummyWisudawan} from "../../../pages/Util";

const WisudawanCardContainer = ({ data }) => {
  // const [isLoaded, setLoaded] = useState(false)
  return (
    <div className="wisudawanCardContainer">
      {!data ? (
        <Loading />
      ) : data.length > 0 ? (
        data.map((row, i) => (
          <Link key={i} to={"/galeri-wisudawan/wisudawan/" + row.id_wisudawan}>
            <WisudawanCard
              nama={row.nama}
              nim={row.nim}
              image={row.photo}
              quotes={row.judul_ta}
            />
          </Link>
        ))
      ) : (
        <p>
          Tidak ditemukan wisudawan untuk organisasi ini pada Wispril kali ini
        </p>
      )}
    </div>
  );
};

export default WisudawanCardContainer;
