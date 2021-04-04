import { URL } from "./urls";
import axios from "axios";

const ORGZ_CATEGORY = {
  FAKULTAS: ["HMJ", "TPB"],
  UKM: [
    "UKM_OLAHRAGA_DAN_KESEHATAN",
    "UKM_MEDIA",
    "UKM_SENI_BUDAYA",
    "UKM_AGAMA_PENDIDIKAN_DAN_KAJIAN",
  ],
  ETC: ["TERPUSAT", "BSO", "KOMUNITAS"],
  // TERPUSAT: KONGRES_KM_ITB, MWA_WM_ITB, KABINET_KM_ITB
};

export const getAllOrgz = async () => {
  const allOrgz = await axios.get(URL + "/orgz/all");
  console.log(allOrgz);
};
