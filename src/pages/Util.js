import mainImage from "../components/shared/Cards/img/wisudawan1.png";
import mainImage2 from "../components/shared/Cards/img/wisudawan2.png";
import mainImage3 from "../components/shared/Cards/img/wisudawan3.png";
import mainImage4 from "../components/shared/Cards/img/wisudawan4.png";
import mainImage5 from "../components/shared/Cards/img/wisudawan5.png";
import mainImage6 from "../components/shared/Cards/img/wisudawan6.png";
import imageAward from "../components/GaleriComponents/AccordionAssets/image-award.png";
import imageCertificate from "../components/GaleriComponents/AccordionAssets/image-certificate.png";

export const galeriOptions = [
  { title: "Himpunan (HMJ)", url: "hmj", idx: 0 },
  { title: "Unit (UKM)", url: "ukm", idx: 1 },
  { title: "Lainnya", url: "etc", idx: 2 },
];

export const apresiasiOptions = [
  { title: "TPB + HMJ", url: "fakultas", idx: 0 },
  { title: "Unit (UKM)", url: "ukm", idx: 1 },
  { title: "Lainnya", url: "etc", idx: 2 },
];

export const fakultasOptions = [
  "FITB",
  "FMIPA",
  "FSRD",
  "FTI",
  "FTMD",
  "FTSL",
  "FTTM",
  "SAPPK",
  "SBM",
  "SF",
  "SITH",
  "STEI",
];

export const dummyHimpunan = [
  {
    text: "HMMME ATMOSPHAIRA ITB",
    img: "https://picsum.photos/200",
    url: "https://www.google.com",
  },
  {
    text: "HMO TRITON ITB",
    img: "https://picsum.photos/200",
    url: "https://www.google.com",
  },
  {
    text: "HMTG GEA ITB",
    img: "https://picsum.photos/200",
    url: "https://www.google.com",
  },
  {
    text: "IMG ITB",
    img: "https://picsum.photos/200",
    url: "https://www.google.com",
  },
];

export const dummyWisudawan = [
  {
    name: "ARNETTHA SEPTINEZ",
    nim: 16720327,
    image: mainImage,
    quote: "Kiat Sukses beternak lele supaya dapat cuan dikala pandemi",
  },
  {
    name: "ARNETTHA SEPTINEZ",
    nim: 16720327,
    image: mainImage2,
    quote: "Kiat Sukses beternak lele supaya dapat cuan dikala pandemi",
  },
  {
    name: "ARNETTHA SEPTINEZ",
    nim: 16720327,
    image: mainImage3,
    quote: "Kiat Sukses beternak lele supaya dapat cuan dikala pandemi",
  },
  {
    name: "ARNETTHA SEPTINEZ",
    nim: 16720327,
    image: mainImage4,
    quote: "Kiat Sukses beternak lele supaya dapat cuan dikala pandemi",
  },
  {
    name: "ARNETTHA SEPTINEZ",
    nim: 16720327,
    image: mainImage5,
    quote: "Kiat Sukses beternak lele supaya dapat cuan dikala pandemi",
  },
  {
    name: "ARNETTHA SEPTINEZ",
    nim: 16720327,
    image: mainImage6,
    quote: "Kiat Sukses beternak lele supaya dapat cuan dikala pandemi",
  },
];

export const getFunFact = (wisudawanData) => {
  return wisudawanData.self_data.filter(
    (row) => row.content_type === "FUNFACT"
  );
};

export const getKontribusi = (orgData) => {
  return orgData.filter(
    (row) => row.content_type === "KONTRIBUSI" && row.organization_name === ""
  );
};

export const parseOrgData = (orgData) => {
  let res = {};
  orgData.map((row) => {
    if (row.organization_name !== "") {
      if (res[row.organization_name]) {
        //ading content
        res[row.organization_name].content.push(parseContentRow(row));
      } else {
        //create new key
        res[row.organization_name] = {
          logo: row.organization_logo,
          content: [parseContentRow(row)],
        };
      }
    }
  });
  return res;
};

const parseContentRow = (row) => {
  return { headings: row.headings, details: row.details, image: row.image };
};

export const parsePrestasiKaryaData = (selfData) => {
  let res = {
    Prestasi: { content: [], logo: imageAward, isLocal: true },
    Karya: { content: [], logo: imageCertificate, isLocal: true },
  };
  selfData.map((row) => {
    if (row.content_type === "PRESTASI") {
      res.Prestasi.content.push(parseContentRow(row));
    } else if (row.content_type === "KARYA") {
      res.Karya.content.push(parseContentRow(row));
    }
  });
  return res;
};
