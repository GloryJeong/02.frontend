import React, { useState, useEffect } from "react";
import axios from "axios";

const postaxios = (url, param) => {
 axios
  .post(url, param)
  .then((response) => {
   console.log("11");
  })
  .catch((error) => {
   console.log("비정상 응답", error);
  });
};

export function insertAxios({ deptno, dname, loc }) {
 let url = "http://localhost:8080/dept/api/dept";
 let param = new URLSearchParams();
 param.append("deptno", deptno);
 param.append("dname", dname);
 param.append("loc", loc);
 postaxios(url, param);
}

export default insertAxios;
