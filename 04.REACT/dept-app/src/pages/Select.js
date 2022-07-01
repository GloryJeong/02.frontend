import React, { useEffect, useState } from "react";
import selectAxios from "../api/selectAxios";

function Select() {
 const [deptno, setDeptno] = useState();
 const [data, setData] = useState({});
 return (
  <div>
   <input
    type="text"
    onChange={(e) => {
     setDeptno(e.target.value);
    }}
   ></input>
   <button onClick={() => selectAxios(setData, deptno)}>검색</button>
   <div id="result">
    deptno : {data.deptno} <br />
    dname : {data.dname} <br />
    loc : {data.loc} <br />
   </div>
  </div>
 );
}
export default Select;
