import React from "react";
import Accordion from "../../GaleriComponents/Accordion";
import "./GatherTown.scss";

const himpunan = (name, link) => ({ himpunan: name, link });
const fakultas = (name, himpunan) => ({ name, himpunan });

const DAFTAR_LINK = [
  fakultas("STEI", [
    himpunan("HMIF", "https://bit.ly"),
    himpunan("HME", "https://bit.ly"),
    himpunan("IMT", "https://bit.ly"),
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
              <a href={link}>{link}</a>
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
      <h3>Gather Town</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet
        dictum. Ornare lectus sit amet est placerat in. Accumsan sit amet nulla
        facilisi morbi tempus iaculis urna.
      </p>
      <p>
        Tincidunt ornare massa eget egestas purus. Tempor orci dapibus ultrices
        in. Sed viverra ipsum nunc aliquet. Vitae turpis massa sed elementum
        tempus egestas sed. Id consectetur purus ut faucibus pulvinar. Id
        venenatis a condimentum vitae sapien pellentesque. Accumsan tortor
        posuere ac ut. Interdum consectetur libero id faucibus nisl tincidunt.
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
