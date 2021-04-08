import BG from "./bg"
import RAMBUT_BELAKANG from "./rambut-belakang"
import RAMBUT_ETC from "./rambut-etc"
import RAMBUT_PONI from "./rambut-poni"
import SKIN from "./skin"
const BG_THUMB = "https://wisprilitb.sgp1.cdn.digitaloceanspaces.com/PicrewX/bg.png"
const RAMBUT_BELAKANG_THUMB = "https://wisprilitb.sgp1.cdn.digitaloceanspaces.com/PicrewX/rambut-belakang.png"
const RAMBUT_ETC_THUMB = "https://wisprilitb.sgp1.cdn.digitaloceanspaces.com/PicrewX/rambut-etc.png"
const RAMBUT_PONI_THUMB = "https://wisprilitb.sgp1.cdn.digitaloceanspaces.com/PicrewX/rambut-poni.png"
const SKIN_THUMB = "https://wisprilitb.sgp1.cdn.digitaloceanspaces.com/PicrewX/skin.png"
const BASE = {
	bg: {
		image: BG_THUMB,
		assets: BG,
	},
	"rambut-belakang": {
		image: RAMBUT_BELAKANG_THUMB,
		assets: RAMBUT_BELAKANG,
	},
	etc: {
		image: RAMBUT_ETC_THUMB,
		assets: RAMBUT_ETC,
	},
	"rambut-poni": {
		image: RAMBUT_PONI_THUMB,
		assets: RAMBUT_PONI,
	},
	skin: {
		image: SKIN_THUMB,
		assets: SKIN,
	},
};
export default BASE;
