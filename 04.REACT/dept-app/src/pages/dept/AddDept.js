import React, { useEffect, useState } from "react";
import { addDept } from "../../api/dept/deptData";

const onClick = (setData) => {
 const deptno = document.getElementById("deptno");
 const dname = document.getElementById("dname").value;
 const loc = document.getElementById("loc").value;
 const textError = document.querySelector(".text-error");
 console.log(deptno);
 if (deptno.value === "") {
  deptno.style.borderColor = "red";
  textError.textContent = "부서번호는 필수 입력 사항입니다.";
  textError.style.color = "red";
  return false;
 }
 setData({
  deptno: deptno.value,
  dname,
  loc,
 });
};

function AddDept() {
 const [data, setData] = useState();
 useEffect(() => {
  if (data) {
   addDept(data);
  }
 }, [data]);
 return (
  <div>
   <form id="form" name="form" method="post">
    <div className="form-box">
     <div className="text-box">
      <input
       type="text"
       name="dept"
       id="deptno"
       placeholder="부서 번호를 입력하세요."
      />
      <br />
      <input
       type="text"
       name="dept"
       id="dname"
       placeholder="부서 이름을 입력하세요."
      />
      <br />
      <input
       type="text"
       name="dept"
       id="loc"
       placeholder="근무지를 입력하세요."
      />
      <br />
      <span className="text-error"></span>
     </div>
     <div className="button-box"></div>
     <button
      className="send-action"
      type="button"
      onClick={() => onClick(setData)}
     >
      추가
     </button>
     <button type="reset" className="send-action">
      리셋
     </button>
    </div>
   </form>
  </div>
 );
}
export default AddDept;
