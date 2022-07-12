import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddDept from "./pages/dept/AddDept";
import UpdateDept from "./pages/dept/UpdateDept";
import Dept from "./pages/dept/Dept";
import AllDept from "./pages/dept/AllDept";
import AllEmp from "./pages/emp/AllEmp";
import UpdateEmp from "./pages/emp/UpdateEmp";
import AddEmp from "./pages/emp/AddEmp";
import Emp from "./pages/emp/Emp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <BrowserRouter>
  <Routes>
   <Route path="/" element={<App />}>
    <Route path="/dept" element={<Dept />}>
     <Route index element={<AllDept />} />
     <Route path="/dept/add" element={<AddDept />} />
     <Route path="/dept/edit/:no" element={<UpdateDept />} />
    </Route>
    <Route path="/emp" element={<Emp />}>
     <Route index element={<AllEmp />} />
     <Route path="/emp/add" element={<AddEmp />} />
     <Route path="/emp/update" element={<UpdateEmp />} />
    </Route>
   </Route>
  </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
