import { URL } from "./urls";
import axios from "axios";

const orgTemplate = () => ({
  FAKULTAS: {
    HMJ: {
      FITB: [],
      FMIPA: [],
      FSRD: [],
      FTI: [],
      FTMD: [],
      FTSL: [],
      FTTM: [],
      SAPPK: [],
      SBM: [],
      SF: [],
      SITH: [],
      STEI: [],
    },
    TPB: [],
  },
  UKM: {
    UKM_OLAHRAGA_DAN_KESEHATAN: [],
    UKM_MEDIA: [],
    UKM_SENI_BUDAYA: [],
    UKM_AGAMA_PENDIDIKAN_DAN_KAJIAN: [],
  },
  ETC: { TERPUSAT: [], BSO: [], KOMUNITAS: [] },
  // TERPUSAT: KONGRES_KM_ITB, MWA_WM_ITB, KABINET_KM_ITB
});

const mapOrgz = (template, arr) => {
  const handleHimpunan = (org) =>
    template["FAKULTAS"]["HMJ"][org.fakultas_short].push(org);
  const handleTPB = (org) => template["FAKULTAS"]["TPB"].push(org);
  const handleUKM = (org) => template["UKM"][org.category].push(org);
  const handleEtc = (org) => {
    // console.log(org);
    if (template["ETC"][org.category]) template["ETC"][org.category].push(org);
    else template["ETC"]["TERPUSAT"].push(org);
  };

  arr.map((org) => {
    if (org.category === "HMJ") handleHimpunan(org);
    else if (org.category === "TPB") handleTPB(org);
    else if (org.category.includes("UKM")) handleUKM(org);
    else handleEtc(org);
  });
};

export const getAllOrgz = async () => {
  const { data } = await axios.get(URL + "/orgz/all");
  const orgz = data.status === 200 && data.data;
  if (!orgz) throw new Error(data);

  const ORGZ_LIST = orgTemplate();
  mapOrgz(ORGZ_LIST, orgz);
  return ORGZ_LIST;
};
