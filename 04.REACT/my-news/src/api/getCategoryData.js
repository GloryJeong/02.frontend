// const getCategoryData = () =>
//   fetch("/categoryData.json").then((response) =>
//     response.json().then((data) => {
//       console.log(data);
//     })
//   );

const request = async (url) => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {}
};

const getCategoryData = async () => {
  const data = await request("/categoryData.json");
  return data;
};

export default getCategoryData;
