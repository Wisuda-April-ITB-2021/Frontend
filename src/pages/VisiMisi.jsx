import React from "react";
import "../pages/VisiMisi.scss";

import Button from "./../components/Button.jsx";

export const VisiMisi = () => {
    return (
        <div className="wrapper">
            <div className="parallex">
                Insert parallex
                <div className="logo-wrap">
                    <h1 className="logo">Main Logo</h1>
                    <h6 className="logo-desc"><i>“Vitae venenatis cursus eget sit consectetur odio. Diam turpis duis praesent sapien, purus adipiscing adipiscing. Sit eget turpis sed dictumst suspendisse quisque. Sit nunc mollis ullamcorper facilisi.”</i></h6>
                    <Button className="button" onClick={() => { alert("test") }}>Go To Panellum</Button>
                </div>
            </div>
            <div className="firefly-wrap">
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
            </div>
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
                    <section className = "visi">
                        <h3> VISI </h3>
                        <h6> “Perayaan Wisuda April yang mengapresiasi purnastudi melalui
                             apresiasi terhadap perubahan potensi dengan berlandaskan
                              empati, kolaborasi, dan integrasi”</h6>
                    </section>
                    <section className = "misi">
                        <h3> MISI </h3>
                        <h6>
                            <p>1. Menjadikan Perayaan Wisuda April 2021 sebagai wadah apresiasi
                                 purnastudi melalui optimalisasi potensi yang hadir dalam
                                 perubahan dimensi.</p>
                            <p>2. Mewadahi keberagaman elemen KM ITB lewat terciptanya wisuda
                                 inklusif-integratif. Wisuda inklusif-integratif adalah perayaan yang
                                 memperhitungkan kebutuhan wadah apresiasi dan optimalisasi diri
                                 setiap elemen KM ITB.</p>
                            <p>3. Mewadahi kebutuhan wisudawan tentang kebutuhan pasca kelulusan</p>
                        </h6>

                    </section>
                </div>
            </div>
        </div>
    );
};
