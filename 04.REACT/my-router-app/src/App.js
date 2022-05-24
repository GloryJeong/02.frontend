import "./App.css";
import Home from "./Home";
import { Link, Outlet, NavLink } from "react-router-dom";
import Nav from "./components/Nav";

// function App({ children }) {
function App({}) {
  return (
    <div>
      <div className='top'>
        <Nav className='Nav' />
      </div>
      {/* <div>{children}</div> */}
      <div className='body'>
        <Outlet></Outlet>
      </div>
      <div className='footer'>
        정영광
        <br />
        <br /> 2022-05-24
      </div>
    </div>
  );
}

export default App;
