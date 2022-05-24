import "../App.css";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [title, setTitle] = useState("Post");
  function activeStyle({ isActive }) {
    setTitle(isActive ? "Post" : "User");
    return {
      color: "green",
      margin: "0px 0px 0px 90%",
      textDecoration: isActive ? "underline" : undefined,
      fontSize: "20px",
      visibility: isActive ? "hidden" : undefined,
    };
  }
  return (
    <div>
      {title}
      <ul>
        <li>
          <NavLink to='/users' style={activeStyle}>
            User
          </NavLink>
        </li>
        <li style={{ listStyleType: "none" }}>
          <NavLink to='/' style={activeStyle}>
            Post
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
