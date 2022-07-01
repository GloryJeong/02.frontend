import React, { useState, useEffect } from "react";
import axios from "axios";

const postaxios = (setData, url) => {
 axios
  .get(url)
  .then((response) => {
   setData(response.data);
  })
  .catch((error) => {
   console.log("비정상 응답", error);
  });
};

export function selectAxios(setData, deptno) {
 console.log("ss");
 //   const [data, setData] = useState([]);
 let url = "http://localhost:8080/dept/api/dept";
 url += "/" + deptno;
 console.log(url);
 postaxios(setData, url);
}
export default selectAxios;
