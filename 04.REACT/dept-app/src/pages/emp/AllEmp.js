import { useEffect, useState } from "react";
import { getEmpAllData, searchEmp } from "../../api/emp/empData";
import { Link } from "react-router-dom";
import EmpResult from "./EmpResult";
import "../../css/input.css";
import Pagination from "../../component/Pagination";

function AllEmp() {
 const [emps, setEmp] = useState([]);
 const [page, setPage] = useState(1);
 const [check, setCheck] = useState(true);

 useEffect(() => {
  getEmpAllData(setEmp, page);
 }, [page, check]);
 useEffect(() => {}, [search]);

 return (
  <div>
   <div className="container">
    <form>
     <input
      placeholder="사원 번호를 검색하세요"
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
       const empno = document.getElementById("search").value;
       searchEmp(empno, setEmp);
      }}
     >
      검색
     </button>
    </form>
    <div className="resultContainer">
     {emps && <EmpResult emps={emps} setCheck={setCheck} check={check} />}
    </div>
    <div className="empPage">
     {emps && <Pagination data={emps} setPage={setPage} page={page} />}
     <Link to="/emp/add">
      <button>사원 추가</button>
     </Link>
    </div>
   </div>
  </div>
 );
}
export default AllEmp;
