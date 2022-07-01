import React, { useState } from "react";
import deleteAxios from "../api/deleteAxios";

function Delete() {
 const [deptno, setDeptno] = useState();
 return (
  <div>
   <input
    type="text"
    onChange={(e) => {
     setDeptno(e.target.value);
    }}
   ></input>
   <button onClick={() => deleteAxios(deptno)}>검색</button>
  </div>
 );
}
export default Delete;
