import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
let url = "";
export function Async(userId, allData) {
  const [photos, setPhotos] = useState([]);
  console.log(allData);

  const getData = () => {
    if (allData) {
      url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    } else {
      url = `https://jsonplaceholder.typicode.com/posts`;
    }
    axios
      .get(url)
      .then((response) => {
        setPhotos(response.data);
        // endNumber.current = response.data.length;
      })
      .catch((error) => {
        console.log("비정상 응답", error);
      });
  };
  useEffect(() => {
    getData();
  }, [userId]);
  return photos;
}

export default Async;
