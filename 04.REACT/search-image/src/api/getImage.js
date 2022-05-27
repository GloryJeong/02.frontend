import requests from "./requests";

const getImages = async () => {
  const url =
    "https://pixabay.com/api/?key=27684588-60d0ab5f1943e2eabd9355dbb&q=sky";
  const data = await requests(url);
  return data;
};

export default getImages;
