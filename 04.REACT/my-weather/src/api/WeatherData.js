import React, { useState, useEffect } from "react";
import axios from "axios";

export function WeatherData(setData, language) {
  //   const [data, setData] = useState([]);
  const url =
    "https://api.openweathermap.org/data/2.5/weather?appid=fe417bdeee4d6fb1cd2329469681fc03&q=Busan,kr";
  let queryString = url + `&lang=${language}`;
  axios
    .get(queryString)
    .then((response) => {
      //   setData(response.data);
      setData(response.data);
    })
    .catch((error) => {
      console.log("비정상 응답", error);
    });
}

export default WeatherData;
