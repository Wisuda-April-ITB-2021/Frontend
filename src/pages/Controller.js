import axios from "axios";
import { URL } from "../api/urls";

export const fetchWisudawan = (id) => {
  return axios.get(`${URL}/wisudawan/id/${id}`);
};

export const fetchWisudawanMessage = (id) => {
  return axios.get(`${URL}/message/wisudawan/${id}`);
};

export const fetchWisudawanContent = (nim) => {
  return axios.get(`${URL}/content/wisudawan/${nim}`);
};

export const fetchApresiasi = (slug) => {
  return axios.get(`${URL}/orgz/slug/${slug}`);
};

export const postMessage = ({ id_wisudawan, sender, message }) => {
  return axios.post(`${URL}/message/`, { id_wisudawan, message, sender });
};

export const parseImg = (url) => {
  const base_url = "https://wisprilitb.sgp1.cdn.digitaloceanspaces.com/";
  return url === "" ? null : `${base_url}/${url}`;
};

export const normalizeResponse = (res) => {
  return res.data.data;
};
