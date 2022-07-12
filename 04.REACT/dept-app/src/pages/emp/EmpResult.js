import { deleteEmp } from "../../api/emp/empData";

function EmpResult({ emps, setCheck, check }) {
 //삭제 기능 추가
 return (
  <>
   <table>
    <thead>
     <tr>
      <th>사원 번호</th>
      <th>사원 이름</th>
      <th>직무</th>
      <th>매니저 번호</th>
      <th>입사일</th>
      <th>급여</th>
      <th>커미션</th>
      <th>부서 번호</th>
      <th>옵션</th>
     </tr>
    </thead>
    <tbody className="labels">
     {emps.dtoList &&
      emps.dtoList.map((emp) => (
       <tr key={emp.empno}>
        <td className="label">
         <a href={`/emp/edit/${emp.empno}`} className="link">
          {emp.empno}
         </a>
        </td>
        <td>{emp.ename}</td>
        <td>{emp.job}</td>
        <td>{emp.mgr}</td>
        <td>{emp.hiredate}</td>
        <td>{emp.sal}</td>
        <td>{emp.comm || 0}</td>
        <td>{emp.dept ? emp.dept.deptno : "없음"}</td>
        <td>
         <button
          onClick={() => {
           deleteEmp(emp.empno, setCheck, check);
          }}
         >
          삭제
         </button>
        </td>
       </tr>
      ))}
    </tbody>
   </table>
  </>
 );
}
export default EmpResult;
