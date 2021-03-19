// import { lazy } from "react";

// import lazy

// const ApresiasiPage = lazy(() =>
//   import("../pages/Galeri/ApresiasiPage").then((module) => ({
//     default: module.ApresiasiPage,
//   }))
// );

// // const ComingSoon = lazy(() =>
// //   import("../pages/Galeri/ComingSoon").then((module) => ({
// //     default: module.ComingSoon,
// //   }))
// // );

// const GaleriWisudawan = lazy(() =>
//   import("../pages/Galeri/GaleriWisudawan").then((module) => ({
//     default: module.GaleriWisudawan,
//   }))
// );

// const OrganisasiPage = lazy(() =>
//   import("../pages/Galeri/OrganisasiPage").then((module) => ({
//     default: module.OrganisasiPage,
//   }))
// );

// const WisudawanPage = lazy(() =>
//   import("../pages/Galeri/WisudawanPage").then((module) => ({
//     default: module.WisudawanPage,
//   }))
// );

// const EventPage = lazy(() =>
//   import("../pages/Landing/EventPage").then((module) => ({
//     default: module.EventPage,
//   }))
// );

// const HomePage = lazy(() =>
//   import("../pages/Landing/HomePage").then((module) => ({
//     default: module.HomePage,
//   }))
// );

// const Panellum = lazy(() =>
//   import("../pages/Landing/Panellum").then((module) => ({
//     default: module.Panellum,
//   }))
// );

import { Panellum } from "../pages/Landing/Panellum";
import { HomePage } from "../pages/Landing/HomePage";
import { EventPage } from "../pages/Landing/EventPage";
import { WisudawanPage } from "../pages/GaleriWisudawan/WisudawanPage";
import { OrganisasiPage } from "../pages/Shared/OrganisasiPage";
import { GaleriWisudawanPage } from "../pages/GaleriWisudawan/GaleriWisudawanPage";
import { ApresiasiPage } from "../pages/Apresiasi/ApresiasiPage";
import { GamesPage } from "../pages/Landing/GamesPage";

// define pages
// Kalo mau redirect routes pake ini aja biar ga hardcoded

export const PANELLUM_PAGE = {
  label: "Panellum",
  path: "/",
  component: Panellum,
};

export const HOME_PAGE = {
  label: "Home",
  path: "/home",
  component: HomePage,
};

export const EVENT_PAGE = {
  label: "Events",
  path: "/events",
  component: EventPage,
};

export const GAMES_PAGE = {
  label: "Games",
  path: "/games",
  component: GamesPage,
};

export const APRESIASI_INDEX = {
  label: "Apresiasi",
  path: "/apresiasi/:organisasi",
  component: OrganisasiPage,
};

export const APRESIASI_PAGE = {
  label: "",
  path: "/apresiasi/:organisasi/:organisasi_id",
  component: ApresiasiPage,
};

export const GALERI_WISUDAWAN_INDEX = {
  label: "Galeri Wisudawan",
  path: "/galeri-wisudawan/:organisasi",
  component: OrganisasiPage,
};

export const GALERI_WISUDAWAN_PAGE = {
  label: "",
  path: "/galeri-wisudawan/:organisasi/:organisasi_id",
  component: GaleriWisudawanPage,
};

export const WISUDAWAN_PAGE = {
  label: "",
  path: "/galeri-wisudawan/wisudawan/:wisudawan_id",
  component: WisudawanPage,
};

const HMJ = {
  label: "HMJ",
  path: "/hmj",
};
const UKM = {
  label: "UKM",
  path: "/ukm",
};
const ETC = {
  label: "Lainnya",
  path: "/etc",
};
const FAKULTAS = {
  label: "Fakultas",
  path: "/fakultas",
};

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
  PANELLUM_PAGE,
  HOME_PAGE,
  EVENT_PAGE,
  GAMES_PAGE,

  APRESIASI_INDEX,
  APRESIASI_PAGE,

  WISUDAWAN_PAGE,
  GALERI_WISUDAWAN_INDEX, //jangan kebalik sama wisudawan_page, nanti masalah. ini harus setelahnya
  GALERI_WISUDAWAN_PAGE,
];
