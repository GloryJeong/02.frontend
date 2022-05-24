import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import Projects from "./Projects";
import Project from "./Project";
import NotFound from "./NotFound";
import Login from "./Login";
import MyPage from "./MyPage";
import Posts from "./pages/Post";
import Users from "./pages/Users";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <App> */}
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Posts />} />
        {/* <Route path='/projects'>
          <Route index element={<Projects />} /> */}
        {/* <Route path='1' element={<Project />} /> */}
        {/* <Route path='2' element={<Project />} /> */}
        {/* <Route path='3' element={<Project />} /> */}
        {/* <Route path=':projectNumber' element={<Project />} />
        </Route> */}
        <Route path='/users' element={<Users />} />
        {/* <Route path='/login' element={<Login />} />
        <Route path='/mypage' element={<MyPage />} /> */}
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>

    {/* </App> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
