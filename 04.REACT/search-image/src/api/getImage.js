import requests from "./requests";

const BASE_URL = "https://pixabay.com/api";
const API_KEY = "27684588-60d0ab5f1943e2eabd9355dbb";
const defaultParam = {
  key: API_KEY,
};
// const test = {
//   q: "moon",
// };

const getImages = async (paramObj) => {
  const params = new URLSearchParams({
    ...defaultParam,
    ...paramObj,
  }).toString();
  const url = `${BASE_URL}?${params}`;
  const data = await requests(url);
  return data;
};

export default getImages;
