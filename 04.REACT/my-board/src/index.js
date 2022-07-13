import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import AddBoard from "./pages/board/AddBoard";
import BoardListContainer from "./container/board/BoardListContainer";
import BoardContainer from "./container/board/BoardContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
 <BrowserRouter>
  <Routes>
   <Route path="/" element={<BoardListContainer />} />
   <Route path="/add" element={<AddBoard />} />
   <Route path="/board/edit/:no" element={<BoardContainer />} />
  </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
