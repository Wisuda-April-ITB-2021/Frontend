import React from "react";
import Accordion from "../../GaleriComponents/Accordion";
import "./GatherTown.scss";

const himpunan = (name, link, available = true) => ({
  himpunan: name,
  link,
  available,
});
const fakultas = (name, himpunan) => ({ name, himpunan });

const DAFTAR_LINK = [
  fakultas("Kabinet", [himpunan("Kabinet", "bit.ly/GatherKabinet")]),
  fakultas("FMIPA", [
    himpunan("HIMATIKA", "bit.ly/GThimatika"),
    himpunan("HIMAFI", "http://bit.ly/GTHIMAFI"),
    himpunan("HIMASTRON", "bit.ly/GThimastron"),
    himpunan("HMK AMISCA", "bit.ly/GTAmisca"),
  ]),
  fakultas("SITH-S", [
    himpunan("HIMABIO", "bit.ly/GThimabio"),
    himpunan("HIMAMIKRO", "bit.ly", false),
  ]),
  fakultas("SITH-R", [
    himpunan("HMRH", "bit.ly/GThmrh"),
    himpunan("HIMAREKTA", "bit.ly/GThimarekta"),
    himpunan("HMH", "bit.ly/GThmh"),
    himpunan("HMPP", "bit.ly/GTVADRA"),
  ]),
  fakultas("SF", [himpunan("HMF", "bit.ly/GTHMF")]),
  fakultas("FITB", [
    himpunan("HMTG", "bit.ly/GT_hmtg"),
    himpunan("IMG", "bit.ly/GT-IMG"),
    himpunan("HMME", "bit.ly/GT_hmme"),
    himpunan("HMO", "bit.ly/GThmotriton"),
  ]),
  fakultas("FTTM", [
    himpunan("HIMA", "bit.ly/GTTerra"),
    himpunan("HMT", "bit.ly/GThmt"),
    himpunan("IMMG", "bit.ly/GTimmg"),
    himpunan("HMTM", "bit.ly", false),
  ]),
  fakultas("STEI", [
    himpunan("HMIF", "bit.ly/GThmif"),
    himpunan("HME", "bit.ly/GT_HME"),
    himpunan("IMT", "bit.ly/GT_imt"),
  ]),
  fakultas("FTSL", [
    himpunan("HMS", "bit.ly/GTHMS"),
    himpunan("KMKL", "bit.ly/GTKMKL"),
    himpunan("HMTL", "bit.ly/GT_hmtl"),
    himpunan("HIMASDA", "bit.ly/GThimasda"),
    himpunan("KMIL", "bit.ly/GT_kmil"),
  ]),
  fakultas("FTI", [
    himpunan("HIMATEK", "bit.ly", false),
    himpunan("HMFT", "bit.ly", false),
    himpunan("MTI", "bit.ly", false),
    himpunan("HMTB", "bit.ly/GT_HMTB"),
    himpunan("HMPG", "bit.ly/GTHMPG"),
  ]),
  fakultas("FSRD", [
    himpunan("VASA", "bit.ly", false),
    himpunan("TERIKAT", "bit.ly", false),
    himpunan("IPPDIG", "bit.ly", false),
    himpunan("INDDES", "bit.ly", false),
    himpunan("IMDI", "bit.ly", false),
  ]),
  fakultas("FTMD", [
    himpunan("HMM", "bit.ly/GT_hmm"),
    himpunan("KMPN", "bit.ly", false),
    himpunan("MTM", "bit.ly/GTmtm"),
  ]),
  fakultas("SBM", [
    himpunan("IMK", "bit.ly", false),
    himpunan("KMM", "bit.ly", false),
  ]),
  fakultas("SAPPK", [
    himpunan("IMA-G", "bit.ly", false),
    himpunan("HMP", "bit.ly", false),
  ]),
];

const Table = ({ links }) => {
  return (
    <table>
      <tbody>
        {links.map(({ himpunan, link, available }, idx) => (
          <tr key={idx}>
            <td>{himpunan}</td>
            <td className="table-info">
              {available ? (
                <a href={"https://" + link}>{link}</a>
              ) : (
                <p>Belum ada</p>
              )}
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
