// Dept.js
import React, { useState } from "react";
import axios from "axios";

function Dept() {
 const [data, setData] = useState("");
 const onNoProxyHandler = () => {
  axios.get("/no-proxy").then((response) => console.log(response));
 };
 const onProxyHandler = () => {
  axios.get("/api/proxy").then((response) => setData(response.data));
 };
 const onNoCorsHandler = () => {
  axios.get("/api/no-cors").then((response) => console.log(response));
 };
 const onCorsHandler = () => {
  axios
   .get(
    "http://localhost:8080/jdbc/api/cors",
    {},
    { headers: { "access-control-allow-origin": "true" } }
   )
   .then((response) => setData(response.data));
 };
 return (
  <div>
   <div>
    <button onClick={onNoProxyHandler}>no-proxy</button>
    <button onClick={onProxyHandler}>proxy</button>
    <button onClick={onNoCorsHandler}>no-cors</button>
    <button onClick={onCorsHandler}>cors</button>
    <div>{data}</div>
   </div>
  </div>
 );
}

export default Dept;
