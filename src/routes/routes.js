// import { Panellum } from "../pages/Landing/Panellum";
import { HomePage } from "../pages/Landing/HomePage";
import { EventPage } from "../pages/Landing/EventPage";
import { WisudawanPage } from "../pages/GaleriWisudawan/WisudawanPage";
import { OrganisasiPage } from "../pages/Shared/OrganisasiPage";
import { GaleriWisudawanPage } from "../pages/GaleriWisudawan/GaleriWisudawanPage";
import { ApresiasiPage } from "../pages/Apresiasi/ApresiasiPage";
import { GamesPage } from "../pages/Landing/GamesPage";

// define pages
// Kalo mau redirect routes pake ini aja biar ga hardcoded

const route = (label, path, component) => ({
  label,
  path,
  component,
});

const subNav = (label, path) => ({ label, path });

// label, path, component
// export const PANELLUM_PAGE = route("Panellum", "/", Panellum);
export const HOME_PAGE = route("Home", "/", HomePage);
export const EVENT_PAGE = route("Events", "/events", EventPage);
export const GAMES_PAGE = route("Products", "/products", GamesPage);
export const APRESIASI_INDEX = route(
  "Apresiasi",
  "/apresiasi/:organisasi",
  OrganisasiPage
);
export const APRESIASI_PAGE = route(
  "",
  "/apresiasi/:organisasi/:organisasi_id",
  ApresiasiPage
);
export const GALERI_WISUDAWAN_INDEX = route(
  "Galeri Wisudawan",
  "/galeri-wisudawan/:organisasi",
  OrganisasiPage
);
export const GALERI_WISUDAWAN_PAGE = route(
  "",
  "/galeri-wisudawan/:organisasi/:organisasi_id",
  GaleriWisudawanPage
);
export const WISUDAWAN_PAGE = route(
  "",
  "/galeri-wisudawan/wisudawan/:wisudawan_id",
  WisudawanPage
);

// label, path
const HMJ = subNav("HMJ", "/hmj");
const UKM = subNav("UKM", "/ukm");
const ETC = subNav("ETC", "/etc");
const FAKULTAS = subNav("Fakultas", "/fakultas");

// routes to be used
export const NavbarRoutes = [
  {
    content: HOME_PAGE,
  },
  {
    content: EVENT_PAGE,
  },
  {
    content: GAMES_PAGE,
  },
  {
    isCollapsible: true,
    content: APRESIASI_INDEX,
    children: [FAKULTAS, UKM, ETC],
    parentPath: "/apresiasi",
  },
  {
    isCollapsible: true,
    content: GALERI_WISUDAWAN_INDEX,
    children: [HMJ, UKM, ETC],
    parentPath: "/galeri-wisudawan",
  },
];

export const AllRoutes = [
  // PANELLUM_PAGE,
  HOME_PAGE,
  EVENT_PAGE,
  GAMES_PAGE,

  APRESIASI_INDEX,
  APRESIASI_PAGE,

  WISUDAWAN_PAGE,
  GALERI_WISUDAWAN_INDEX, //jangan kebalik sama wisudawan_page, nanti masalah. ini harus setelahnya
  GALERI_WISUDAWAN_PAGE,
];
