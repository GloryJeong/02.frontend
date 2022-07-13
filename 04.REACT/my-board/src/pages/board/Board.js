import Pagination from "../../components/Pagination";
import BoardTable from "./BoardTable";
import "../../css/board.css";
function Board({ boardList, setPage, page }) {
 return (
  <div className="container">
   <div>
    <div className="boardHead">
     <span>게시판</span>
     <a href="/add" className="addBoard">
      등록
     </a>
    </div>
    <div className="resultTable">
     <div>
      <BoardTable boardList={boardList} />
      <Pagination data={boardList} setPage={setPage} currentPage={page} />
     </div>
    </div>
   </div>
  </div>
 );
}
export default Board;
