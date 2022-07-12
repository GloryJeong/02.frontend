import { useEffect, useState } from "react";
import { getAllBoard } from "../../api/boardData";
import { boardCommentsCount } from "../../api/commentData";
import Pagination from "../../components/Pagination";
import "../../css/board.css";
function Board() {
 const [boardList, setBoardList] = useState([]);
 const [page, setPage] = useState(1);
 let startBoardNo =
  boardList.dtoList && boardList.dtoList[boardList.dtoList.length - 1].boardNo;
 let endBoardNo = boardList.dtoList && boardList.dtoList[0].boardNo;
 useEffect(() => {
  getAllBoard(setBoardList, page);
 }, [page]);
 useEffect(() => {
  if (startBoardNo && endBoardNo) {
   boardCommentsCount(startBoardNo, endBoardNo);
  }
 }, [boardList]);
 return (
  <div className="container">
   <div>
    <div className="boardHead">
     <span>게시판</span>
     <a href="/add" className="addBoard">
      등록
     </a>
    </div>
    <div>
     <table className="boardTable">
      <thead>
       <tr>
        <th> # </th>
        <th> 제목 </th>
        <th> 작성자 </th>
        <th> 등록일 </th>
       </tr>
      </thead>
      <tbody>
       {boardList.dtoList &&
        boardList.dtoList.map((board) => (
         <tr key={board.boardNo}>
          <td>{board.boardNo}</td>
          <td>
           <a href={`/board/edit/${board.boardNo}`}>
            {board.boardTitle}
            {`[${board.comment.length}]`}
           </a>
          </td>
          <td>{board.user && board.user.userEmail.split("@", 1)}</td>
          <td>
           {board.registeredDate.split("T").map((date) => (
            <span key={date} style={{ marginRight: "10%" }}>
             {date}
            </span>
           ))}
          </td>
         </tr>
        ))}
      </tbody>
     </table>
     <div className="pagination">
      <Pagination data={boardList} setPage={setPage} page={page} />
     </div>
    </div>
   </div>
  </div>
 );
}
export default Board;
