import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Select from "./pages/Select";
import Insert from "./pages/Insert";
import Update from "./pages/Update";
import Delete from "./pages/Delete";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <BrowserRouter>
  <Routes>
   <Route path="/" element={<App />}>
    <Route path="/select" element={<Select />} />
    <Route path="/insert" element={<Insert />} />
    <Route path="/delete" element={<Delete />} />
    <Route path="/update" element={<Update />} />
   </Route>
  </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
