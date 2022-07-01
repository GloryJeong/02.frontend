import React, { useEffect, useState } from "react";
import updateAxios from "../api/updateAxios";
const setInput = (e, setInput) => {
 setInput(e.target.value);
};
function Update() {
 const [deptno, setDeptno] = useState({});
 const [dname, setDname] = useState({});
 const [loc, setLoc] = useState({});
 const [data, setData] = useState({});
 useEffect(() => {
  setData({ deptno, dname, loc });
 }, data);
 return (
  <div>
   <form id="form" name="form">
    <input
     id="deptno"
     name="deptno"
     placeholder="deptno를 입력해주세요."
     onChange={(e) => setInput(e, setDeptno)}
    ></input>
    <input
     id="dname"
     name="dname"
     placeholder="dname을 입력해주세요."
     onChange={(e) => setInput(e, setDname)}
    ></input>
    <input
     id="loc"
     name="loc"
     placeholder="loc를 입력해주세요"
     onChange={(e) => setInput(e, setLoc)}
    ></input>
    <input
     type="button"
     value="추가"
     onClick={() => updateAxios(deptno, dname, loc)}
    ></input>
    <input type="reset" value="리셋"></input>
   </form>
  </div>
 );
}
export default Update;
