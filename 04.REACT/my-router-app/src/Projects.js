import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

function Projects() {
  const location = useLocation();
  const [searchParms, setSearchParms] = useSearchParams();
  const x = searchParms.get("x");
  return (
    <div>
      <h1>
        Projects : {location.search} - {searchParms} - {x}
      </h1>
      <p>Projects Page : Describe Projects</p>
      <ul>
        <li>
          <Link to='/projects/1'>Project 1</Link>
        </li>
        <li>
          <Link to='/projects/2'>Project 2</Link>
        </li>
        <li>
          <Link to='/projects/3'>Project 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
