import INNER_SHIRTS_01 from "../compressed/accessories/inner/shirts_01.png";
import INNER_SHIRTS_02 from "../compressed/accessories/inner/shirts_02.png";

const asset = (name, img) => {
	return {
		name,
		img,
	};
};

const ACCESSORIES = {
	inner: [
		asset("shirts01", INNER_SHIRTS_01),
		asset("shirts02", INNER_SHIRTS_02),
	],
	kepala: [],
	outer: [],
	etc: [],
};

export default ACCESSORIES;
