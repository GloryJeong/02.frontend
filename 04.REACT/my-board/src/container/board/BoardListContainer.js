import { useEffect, useState } from "react";
import { getAllBoard } from "../../api/boardData";
import Board from "../../pages/board/Board";

const BoardListContainer = () => {
 const [boardList, setBoardList] = useState([]);
 const [page, setPage] = useState(1);
 useEffect(() => {
  getAllBoard(setBoardList, page);
 }, [page]);
 return (
  <>
   <Board boardList={boardList} setPage={setPage} page={page} />
  </>
 );
};
export default BoardListContainer;
