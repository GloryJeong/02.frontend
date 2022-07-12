import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDeptAllData, searchDept } from "../../api/dept/deptData";
import Pagination from "../../component/Pagination";
import "../../css/dept/dept.css";
import "../../css/input.css";
import DeptResult from "./DeptResult";

function AllDept() {
 const [depts, setDept] = useState([]);
 const [deptno, setDeptno] = useState("");
 const [check, setCheck] = useState(false);
 const [page, setPage] = useState(1);

 useEffect(() => {
  if (!deptno) {
   getDeptAllData(setDept, page);
   setCheck(false);
  }
 }, [page, check, deptno]);
 useEffect(() => {
  if (check && deptno) {
   searchDept(deptno, setDept);
   setDept("");
  }
 }, [check, deptno]);
 console.log(check);
 console.log(depts);
 return (
  <div>
   <div className="container">
    <form>
     <input
      placeholder="부서 번호를 검색하세요"
      type="text"
      id="search"
      required
      className="search-box"
     />
     <button className="close-icon" type="reset"></button>
     <button
      type="button"
      className="button -dark center"
      onClick={() => {
       setDeptno(document.getElementById("search").value);
       setCheck(true);
      }}
     >
      검색
     </button>
    </form>
    <div className="resultContainer">
     {depts && <DeptResult depts={depts} setCheck={setCheck} />}
     <div className="deptPage">
      {depts && <Pagination data={depts} setPage={setPage} page={page} />}
      <Link to="/dept/add">
       <button>부서 추가</button>
      </Link>
     </div>
    </div>
   </div>
  </div>
 );
}

export default AllDept;
