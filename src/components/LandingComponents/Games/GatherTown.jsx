import React from "react";
import Accordion from "../../GaleriComponents/Accordion";
import "./GatherTown.scss";

const himpunan = (name, link) => ({ himpunan: name, link });
const fakultas = (name, himpunan) => ({ name, himpunan });

const DAFTAR_LINK = [
  fakultas("STEI", [
    himpunan("HMIF", "bit.ly"),
    himpunan("HME", "bit.ly"),
    himpunan("IMT", "bit.ly"),
  ]),
];

const Table = ({ links }) => {
  return (
    <table>
      <tbody>
        {links.map(({ himpunan, link }, idx) => (
          <tr key={idx}>
            <td>{himpunan}</td>
            <td>
              <a href={"https://" + link}>{link}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const GatherTown = () => {
  return (
    <div className="gather-town">
      <h3>Spesial untuk para Wisudawan</h3>
      <p>
        Halo! Selamat berbahagia kepada para wisudawan yang hari ini resmi
        menjadi sarjana karena telah menyelesaikan pendidikan di Institut
        Teknologi Bandung tercinta. Kami selaku panitia Perayaan Wisuda April
        2021, menyediakan wadah untuk para wisudawan bercengkrama, berkumpul,
        dan beramah tamah secara virtual. Wisudawan dapat mengajak massa
        himpunan, teman, pacar, atau siapapun yang ingin ditemui di sini!
        Selamat menikmati Gather Town dan jangan lupa untuk mengajak teman -
        teman Anda!
      </p>
      <p>
        <strong>Gather Town</strong> dapat diakses melalui tautan di bawah ini:
      </p>
      <div className="gather-town-links">
        {DAFTAR_LINK.map((himpunan, idx) => (
          <Accordion key={idx} title={himpunan.name}>
            <Table links={himpunan.himpunan} />
          </Accordion>
        ))}
      </div>
    </div>
  );
};
