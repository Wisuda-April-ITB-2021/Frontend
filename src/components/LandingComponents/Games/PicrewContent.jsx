import React from "react";
import "./PicrewContent.scss";

class Path {
	constructor(main, sub) {
		this.main = main;
		this.sub = sub;
	}
	getAlt() {
		return `${this.main}-${this.sub}`;
	}
	getImg(data) {
		return data[this.main][this.sub];
	}
}

const levelData = {
	"level-1": new Path("base", "bg"),
	"level-2": new Path("base", "skin"),
	"level-3": new Path("base", "rambut-belakang"),
	"level-4": new Path("base", "rambut-etc"),
	"level-5": new Path("base", "rambut-poni"),
	"level-6": new Path("face", "mata"),
	"level-7": new Path("face", "alis"),
	"level-8": new Path("face", "hidung"),
	"level-9": new Path("face", "mulut"),
	"level-10": new Path("face", "telinga"),
	"level-11": new Path("face", "janggut"),
	"level-12": new Path("face", "etc"),
	"level-13": new Path("accessories", "kepala"),
	"level-14": new Path("accessories", "jahim"),
	"level-15": new Path("accessories", "inner"),
	"level-16": new Path("accessories", "outer"),
	"level-17": new Path("accessories", "pose"),
	"level-18": new Path("accessories", "etc"),
};

const data = {
	base: {
		bg: "",
		skin: "",
		"rambut-belakang": "",
		"rambut-poni": "",
	},
	face: {
		mata: "",
		alis: "",
		hidung: "",
		mulut: "",
		telinga: "",
		janggut: "",
		etc: "",
	},
	accessories: {
		kepala: "",
		jahim: "",
		inner: "",
		outer: "",
		pose: "",
		etc: "",
	},
};

export const PicrewContent = () => {
	const images = [];
	for (const [key, value] of Object.entries(levelData)) {
		images.push(
			<img className={key} src={value.getImg(data)} alt={value.getAlt()} />
		);
		console.log(`${key}: ${value}`);
	}
	return <div className='picrew-content'>{images}</div>;
};
