import { lazy } from "react";

// import lazy

const ApresiasiPage = lazy(() =>
  import("../pages/Galeri/ApresiasiPage").then((module) => ({
    default: module.ApresiasiPage,
  }))
);

// const ComingSoon = lazy(() =>
//   import("../pages/Galeri/ComingSoon").then((module) => ({
//     default: module.ComingSoon,
//   }))
// );

const GaleriWisudawan = lazy(() =>
  import("../pages/Galeri/GaleriWisudawan").then((module) => ({
    default: module.GaleriWisudawan,
  }))
);

const OrganisasiPage = lazy(() =>
  import("../pages/Galeri/OrganisasiPage").then((module) => ({
    default: module.OrganisasiPage,
  }))
);

const WisudawanPage = lazy(() =>
  import("../pages/Galeri/WisudawanPage").then((module) => ({
    default: module.WisudawanPage,
  }))
);

const EventPage = lazy(() =>
  import("../pages/Landing/EventPage").then((module) => ({
    default: module.EventPage,
  }))
);

const HomePage = lazy(() =>
  import("../pages/Landing/HomePage").then((module) => ({
    default: module.HomePage,
  }))
);

const Panellum = lazy(() =>
  import("../pages/Landing/Panellum").then((module) => ({
    default: module.Panellum,
  }))
);

// define pages

export const PANELLUM_PAGE = {
  label: "",
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

export const APRESIASI_PAGE = {
  label: "Apresiasi",
  path: "/apresiasi/:slug",
  component: OrganisasiPage,
};

export const APRESIASI_ORGANISASI = {
  label: "",
  path: "/apresiasi/:slug/details",
  component: ApresiasiPage,
};

export const ORGANISASI_PAGE = {
  label: "Galeri Wisudawan",
  path: "/galeri-wisudawan/:slug",
  component: OrganisasiPage,
};

export const GALERI_WISUDAWAN = {
  label: "",
  path: "/galeri-wisudawan/:slug/details",
  component: GaleriWisudawan,
};

export const WISUDAWAN_PAGE = {
  label: "",
  path: "/galeri-wisudawan/:slug/:wisudawan-id",
  component: WisudawanPage,
};

export const NavbarRoutes = [
  PANELLUM_PAGE,
  HOME_PAGE,
  EVENT_PAGE,
  APRESIASI_ORGANISASI,
  ORGANISASI_PAGE,
];

export const AllRoutes = [
  PANELLUM_PAGE,
  HOME_PAGE,
  EVENT_PAGE,
  APRESIASI_PAGE,
  APRESIASI_ORGANISASI,
  ORGANISASI_PAGE,
  GALERI_WISUDAWAN,
  WISUDAWAN_PAGE,
];
