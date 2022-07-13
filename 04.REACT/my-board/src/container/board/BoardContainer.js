import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchBoard } from "../../api/boardData";
import UpdateBoard from "../../pages/board/UpdateBoard";

const BoardContainer = () => {
 const [data, setData] = useState({});
 const boardNo = useParams();
 useEffect(() => {
  searchBoard(boardNo.no, setData);
 }, []);
 return (
  <>
   <UpdateBoard data={data} const boardNo={boardNo} />
  </>
 );
};
export default BoardContainer;
