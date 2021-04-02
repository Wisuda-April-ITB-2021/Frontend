import { MENU_DB } from "./PicrewMenu";
import { createDataTemplate } from "./picrewFunctions";

// export const createDataTemplate = () => ({
//   base: {
//     bg: "",
//     skin: "",
//     "rambut-belakang": "",
//     etc: "",
//     "rambut-poni": "",
//   },
//   face: {
//     mata: "",
//     alis: "",
//     hidung: "",
//     mulut: "",
//     telinga: "",
//     janggut: "",
//     etc: "",
//   },
//   accessories: {
//     kepala: "",
//     jahim: "",
//     inner: "",
//     outer: "",
//     pose: "",
//     etc: "",
//   },
// });

const getObjects = (itemName) =>
  MENU_DB.filter(({ name }) => name === itemName)[0].content;

const getAssets = (item, subItem) => item[subItem].assets;

const BASE = getObjects("Base");
const FACE = getObjects("Face");
const ACCESSORIES = getObjects("Accessories");

// random angka, elemen random array, elemen random array tapi bisa ""
const randomize = (num) => Math.floor(Math.random() * num);
const randomizeArray = (arr) => arr[randomize(arr.length)];
const randomizeArrayEmpty = (arr) =>
  randomize(2) === 0 ? "" : randomizeArray(arr);

// untuk randomize skin + telinga
const shuffleEarsSkinHand = () => {
  const skin = getAssets(BASE, "skin");
  const ears = getAssets(FACE, "telinga");
  const hand = getAssets(ACCESSORIES, "pose");
  const earsIdx = randomize(ears.length);
  const skinIdx = earsIdx % skin.length;
  const handIdx =
    (earsIdx % skin.length) +
    skin.length * randomize(hand.length / skin.length);
  return [skin[skinIdx], ears[earsIdx], hand[handIdx]];
};

const ALLOW_EMPTY = true;
const NOT_EMPTY = false;

// buat dapet item random dari submenu BASE, FACE, atau ACCESSORIES
const getRandomItem = (menu, subMenu, allowEmpty = false) => {
  const assets = getAssets(menu, subMenu);
  return allowEmpty ? randomizeArrayEmpty(assets) : randomizeArray(assets);
};

const shuffleBase = (skin) => {
  const getRandomBase = (name, allowEmpty = false) =>
    getRandomItem(BASE, name, allowEmpty);

  const bg = getRandomBase("bg");
  const etc = getRandomBase("etc", ALLOW_EMPTY);
  const rambutBelakang = getRandomBase("rambut-belakang", ALLOW_EMPTY);
  const rambutPoni = getRandomBase("rambut-poni");

  return {
    bg: bg,
    skin: skin,
    "rambut-belakang": rambutBelakang,
    etc: etc,
    "rambut-poni": rambutPoni,
  };
};

const shuffleFace = (ears) => {
  const getRandomFace = (name, allowEmpty = false) =>
    getRandomItem(FACE, name, allowEmpty);
  // console.log(FACE);

  const alis = getRandomFace("alis");
  const etc = getRandomFace("etc", ALLOW_EMPTY);
  const hidung = getRandomFace("hidung");
  const janggut = getRandomFace("janggut", ALLOW_EMPTY);
  const mata = getRandomFace("mata");
  const mulut = getRandomFace("mulut");
  const telinga = ears;

  return {
    mata,
    alis,
    hidung,
    mulut,
    telinga,
    janggut,
    etc,
  };
};

const shuffleAccessories = (hand) => {
  const getRandomAccessories = (name, allowEmpty = false) =>
    getRandomItem(ACCESSORIES, name, allowEmpty);

  const getRandomClothes = () => {
    const clothes = {
      inner: "",
      outer: "",
      jahim: "",
    };

    // 0: inner, 1: outer, 2: jahim
    const clothesIdx = randomize(3);
    const options =
      clothesIdx === 0 ? "inner" : clothesIdx === 1 ? "outer" : "jahim";
    clothes[options] = getRandomAccessories(options);

    const { inner, outer, jahim } = clothes;
    return [inner, outer, jahim];
  };

  const etc = getRandomAccessories("etc", ALLOW_EMPTY);
  const [inner, outer, jahim] = getRandomClothes();
  const kepala = getRandomAccessories("kepala", ALLOW_EMPTY);
  const pose = hand;

  return {
    kepala,
    jahim,
    inner,
    outer,
    pose,
    etc,
  };
};

export const shuffle = () => {
  // console.log(MENU_DB);
  const [skin, ears, hand] = shuffleEarsSkinHand();
  const base = shuffleBase(skin);
  const face = shuffleFace(ears);
  const accessories = shuffleAccessories(hand);

  let template = createDataTemplate();
  template = {
    base: { ...template.base, ...base },
    face: { ...template.face, ...face },
    accessories: { ...template.accessories, ...accessories },
  };

  return template;
};
