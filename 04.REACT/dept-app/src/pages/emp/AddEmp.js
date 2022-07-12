import React, { useEffect, useState } from "react";
import { addEmp } from "../../api/emp/empData";

const onClick = (setData) => {
 const empno = document.getElementById("empno");
 const addData = document.getElementsByName("emp");
 console.log(addData);
 const textError = document.querySelector(".text-error");
 if (empno.value === "") {
  empno.style.borderColor = "red";
  textError.textContent = "사원번호는 필수 입력 사항입니다.";
  textError.style.color = "red";
  return false;
 }
 let data = { empno: empno.value };
 addData.forEach((empData) => {
  if (empData.id === "dept") {
   data[empData.id] = { deptno: empData.value };
  } else {
   data[empData.id] = empData.value;
  }
  data = { ...data };
 });
 setData(data);
};

function AddEmp() {
 const [data, setData] = useState();
 useEffect(() => {
  if (data) {
   addEmp(data);
  }
 }, [data]);
 return (
  <div>
   <form id="form" name="form" method="post">
    <div className="form-box">
     <div className="text-box">
      <input
       type="text"
       name="empno"
       id="empno"
       placeholder="사원 번호를 입력하세요."
      />
      <br />
      <input
       type="text"
       name="emp"
       id="ename"
       placeholder="사원 이름을 입력하세요."
      />
      <br />
      <input
       type="text"
       name="emp"
       id="job"
       placeholder="사원의 직무를 입력하세요."
      />
      <br />
      <input
       type="text"
       name="emp"
       id="mgr"
       placeholder="매니저번호를 입력하세요."
      />
      <br />
      <input
       type="text"
       name="emp"
       id="hiredate"
       placeholder="입사일을 입력하세요."
      />
      <br />
      <input
       type="text"
       name="emp"
       id="sal"
       placeholder="사원의 급여를 입력하세요."
      />
      <br />
      <input
       type="text"
       name="emp"
       id="comm"
       placeholder="사원의 커미션을 입력하세요."
      />
      <br />
      <input
       type="text"
       name="emp"
       id="dept"
       placeholder="부서번호를 입력하세요."
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
export default AddEmp;
