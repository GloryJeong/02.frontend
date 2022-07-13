import { deleteBoard, updateBoard } from "../api/boardData";

const clickUpdate = (boardNo) => {
 const title = document.getElementById("title").value;
 const content = document.getElementById("content").value;
 const data = {
  boardTitle: title,
  boardContent: content,
 };
 updateBoard(boardNo, data);
};

const SubmitBtn = ({ data }) => (
 <div className="submitBtn">
  <span>
   <a href="/">리스트로</a>
  </span>
  <span>
   <a
    href={`./${data.boardNo}`}
    onClick={() => {
     clickUpdate(data.boardNo);
    }}
   >
    수정하기
   </a>
  </span>
  <span>
   <a
    href="/"
    onClick={() => {
     deleteBoard(data.boardNo);
    }}
   >
    삭제하기
   </a>
  </span>
 </div>
);
export default SubmitBtn;
