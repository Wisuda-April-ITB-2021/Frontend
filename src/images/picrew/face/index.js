
import ALIS from './alis'
import ETC from './etc'
import HIDUNG from './hidung'
import JANGGUT from './janggut'
import MATA from './mata'
import MULUT from './mulut'
import TELINGA from './telinga'

const ALIS_THUMB = 'https://wisprilitb.sgp1.cdn.digitaloceanspaces.com/PicrewX/alis-min.png'
const ETC_THUMB = 'https://wisprilitb.sgp1.cdn.digitaloceanspaces.com/PicrewX/etc-min.png'
const HIDUNG_THUMB = 'https://wisprilitb.sgp1.cdn.digitaloceanspaces.com/PicrewX/hidung-min.png'
const JANGGUT_THUMB = 'https://wisprilitb.sgp1.cdn.digitaloceanspaces.com/PicrewX/janggut-min.png'
const MATA_THUMB = 'https://wisprilitb.sgp1.cdn.digitaloceanspaces.com/PicrewX/mata-min.png'
const TELINGA_THUMB = 'https://wisprilitb.sgp1.cdn.digitaloceanspaces.com/PicrewX/telinga-min.png'
const MULUT_THUMB = 'https://wisprilitb.sgp1.cdn.digitaloceanspaces.com/PicrewX/mulut-min.png'


const FACE = {
	alis: {
		image: ALIS_THUMB,
		assets: ALIS,
	},
	etc: {
		image: ETC_THUMB,
		assets: ETC,
	},
	hidung: {
		image: HIDUNG_THUMB,
		assets: HIDUNG,
	},
	janggut: {
		image: JANGGUT_THUMB,
		assets: JANGGUT,
	},
	mata: {
		image: MATA_THUMB,
		assets: MATA,
	},
	mulut: {
		image: MULUT_THUMB,
		assets: MULUT,
	},
	telinga: {
		image: TELINGA_THUMB,
		assets: TELINGA,
	},
};


export default FACE;
