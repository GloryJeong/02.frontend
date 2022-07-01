import logo from "./logo.svg";
import "./App.css";
import { Link, Outlet, Router } from "react-router-dom";

function App() {
 return (
  <div>
   <div>
    <h1>DEPT!!</h1>
    <Link to="/insert">
     <button>insert</button>
    </Link>
    <Link to="/select">
     <button>select</button>
    </Link>
    <Link to="/delete">
     <button>delete</button>
    </Link>
    <Link to="/update">
     <button>update</button>
    </Link>
   </div>
   <div>
    <Outlet></Outlet>
   </div>
  </div>
 );
}

export default App;
