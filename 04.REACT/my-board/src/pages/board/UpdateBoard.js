import BoardForm from "./BoardForm";
import "../../css/updatePage.css";

const UpdateBoard = ({ data, boardNo }) => (
 <div className="updatePage">
  <h3>게시판 보기</h3>
  <BoardForm data={data} boardNo={boardNo} />
 </div>
);

export default UpdateBoard;
