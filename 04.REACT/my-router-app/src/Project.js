import React from "react";
import { useParams } from "react-router-dom";

function Project() {
  const { projectNumber } = useParams();
  return (
    <div>
      <h1>Project</h1>
      <p>Project Page : Explain Project{projectNumber}</p>
    </div>
  );
}

export default Project;
