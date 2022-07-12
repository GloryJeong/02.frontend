import "./App.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./css/home/home.css";

function App() {
 function activeStyle({ isActive }) {
  return {
   color: "black",
   fontWeight: "bolder",
   textDecoration: "none",
   fontSize: isActive ? "40px" : "20px",
  };
 }
 return (
  <div>
   <div className="head">
    <NavLink to="/dept" style={activeStyle}>
     <span className="title">Dept!!</span>
    </NavLink>
    <NavLink to="/emp" style={activeStyle}>
     <span className="title">EMP!!</span>
    </NavLink>
   </div>
   <div className="container">
    <Outlet></Outlet>
   </div>
  </div>
 );
}

export default App;
