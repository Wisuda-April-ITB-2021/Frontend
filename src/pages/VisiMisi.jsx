import React from "react";
import "../pages/VisiMisi.scss";

export const VisiMisi = () => {
  return (
    <div className="wrapper">
      <div className="visi-misi-wrapper">
        <div className="visi-misi-decor">
          <div className="visi-misi-ornamen-left" />
          <div className="visi-misi-ornamen-right" />
          <div className="visi-misi-overlay" />
        </div>
        <div className="visi-misi">
          <header>
            <h2>PERAYAAN WISUDA APRIL ITB 2021</h2>
            <h4>“The Light of Hope in Times of Change”</h4>
          </header>
          <section className="visi">
            <h3> VISI </h3>
            <h6>
              {" "}
              “Perayaan Wisuda April yang mengapresiasi purnastudi melalui
              apresiasi terhadap perubahan potensi dengan berlandaskan empati,
              kolaborasi, dan integrasi”
            </h6>
          </section>
          <section className="misi">
            <h3> MISI </h3>
            <ol>
              <li>
                Menjadikan Perayaan Wisuda April 2021 sebagai wadah apresiasi
                purnastudi melalui optimalisasi potensi yang hadir dalam
                perubahan dimensi.
              </li>
              <li>
                Mewadahi keberagaman elemen KM ITB lewat terciptanya wisuda
                inklusif-integratif. Wisuda inklusif-integratif adalah perayaan
                yang memperhitungkan kebutuhan wadah apresiasi dan optimalisasi
                diri setiap elemen KM ITB.
              </li>
              <li>
                Mewadahi kebutuhan wisudawan tentang kebutuhan pasca kelulusan
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};
