import html2canvas from "html2canvas";
import { sendAnalyticsAction, PICREW_ACTION } from "../../../api/analytics";

export const createDataTemplate = () => ({
  base: {
    bg: "",
    skin: "",
    "rambut-belakang": "",
    etc: "",
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
});

const download = (image, name) => {
  const a = document.createElement("a");
  a.href = image;
  a.download = name;
  a.click();
};

const getImage = () => {
  const target = document.querySelector(".picrew-container");
  // console.log(target);
  return html2canvas(target, {
    scrollX: 0,
    scrollY: -window.pageYOffset,
    backgroundColor: null,
    scale: 1080 / target.scrollHeight,
  }).then((canvas) => canvas.toDataURL("image/png"));
};

const isNotCompatible = () => {
  const iOS = () => {
    return (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  };
  const safari = () => {
    return /apple/i.test(navigator.vendor);
  };
  return iOS() || safari();
};

export const downloadPicrew = async () => {
  const errorMsg =
    "Fitur download kemungkinan tidak bekerja dengan baik untuk pengguna iOS atau browser Safari. Silakan coba download Wispril Avatar buatanmu dengan perangkat Android atau browser seperti Chrome";
  if (isNotCompatible()) alert(errorMsg);
  const image = await getImage();
  download(image, "wispril-avatar.png");
  sendAnalyticsAction(PICREW_ACTION, "Download Picrew");
};

const picrewImageLocalStorage = "picrew-images";
const picrewTextLocalStorage = "picrew-text";

export const setLocalPicrewImages = (data) =>
  localStorage.setItem(picrewImageLocalStorage, JSON.stringify(data));
export const getLocalPicrewImages = () =>
  JSON.parse(localStorage.getItem(picrewImageLocalStorage));
export const setLocalPicrewText = (data) =>
  localStorage.setItem(picrewTextLocalStorage, JSON.stringify(data));
export const getLocalPicrewText = () =>
  JSON.parse(localStorage.getItem(picrewTextLocalStorage));
