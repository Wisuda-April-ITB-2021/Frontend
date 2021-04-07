import { MEDPAR_M, MEDPAR_S } from "./medpar";
import { SPONSOR_XL, SPONSOR_L, SPONSOR_M, SPONSOR_S } from "./sponsor";

const generateOrg = (size, content) => ({ size, content });
export const MEDPARS = [generateOrg("M", MEDPAR_M), generateOrg("S", MEDPAR_S)];
export const SPONSORS = [
  generateOrg("XL", SPONSOR_XL),
  generateOrg("L", SPONSOR_L),
  generateOrg("M", SPONSOR_M),
  generateOrg("S", SPONSOR_S),
];
