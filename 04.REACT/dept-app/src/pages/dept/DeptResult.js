import { deleteDept } from "../../api/dept/deptData";

function DeptResult({ depts, setCheck }) {
 return (
  <>
   <table>
    <thead>
     <tr>
      <th>부서 번호</th>
      <th>부서 이름</th>
      <th>부서 지역</th>
      <th> 옵션 </th>
     </tr>
    </thead>
    <tbody className="labels">
     {depts.dtoList &&
      depts.dtoList[0] !== "" &&
      depts.dtoList.map((dept) => (
       <tr key={dept.deptno}>
        <td className="label">
         <a href={`/dept/edit/${dept.deptno}`} className="link">
          {dept.deptno}
         </a>
        </td>
        <td>{dept.dname}</td>
        <td>{dept.loc}</td>
        <td>
         <button
          onClick={() => {
           deleteDept(dept.deptno, setCheck);
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
export default DeptResult;
