import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updateDept } from "../../api/dept/deptData";

const onClick = (param) => {
 const dname = document.getElementById("dname").value;
 const loc = document.getElementById("loc").value;
 const deptno = param.no;
 const data = { deptno, dname, loc };
 updateDept(data);
 window.location.href = "/dept";
};

function UpdateDept() {
 let param = useParams();
 return (
  <div>
   <input id="dname" name="dname" placeholder="dname을 입력해주세요."></input>
   <input id="loc" name="loc" placeholder="loc를 입력해주세요"></input>
   <input type="button" value="변경" onClick={() => onClick(param)}></input>
   <input type="reset" value="리셋"></input>
  </div>
 );
}
export default UpdateDept;
