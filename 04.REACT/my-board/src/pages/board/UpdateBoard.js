import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteBoard, searchBoard, updateBoard } from "../../api/boardData";
import "../../css/updatePage.css";
import Comments from "../comment/Comments";

const clickUpdate = (boardNo) => {
 const title = document.getElementById("title").value;
 const content = document.getElementById("content").value;
 const data = {
  boardTitle: title,
  boardContent: content,
 };
 updateBoard(boardNo, data);
};

function UpdateBoard() {
 const [data, setData] = useState({});
 const [title, setTitle] = useState("");
 const [content, setContent] = useState("");
 const boardNo = useParams();

 useEffect(() => {
  searchBoard(boardNo.no, setData);
 }, []);
 useEffect(() => {
  if (!title && data.boardTitle) {
   setTitle(data.boardTitle);
  }
  if (!content && data.boardContent) {
   setContent(data.boardContent);
  }
 }, [data]);
 return (
  <div className="updatePage">
   <h3>게시판 보기</h3>
   <div>
    <div className="labels">제목</div>
    <input
     type="text"
     id="title"
     value={title || "1"}
     onChange={(e) => {
      setTitle(e.target.value);
     }}
    />
    <div className="labels">내용</div>
    <textarea
     type="text"
     id="content"
     value={content || "1"}
     onChange={(e) => setContent(e.target.value)}
    />
    <div className="labels">작성자</div>
    <div className="userData">
     {data.user && data.user.userEmail.split("@")[0]}{" "}
    </div>
    <div className="labels">등록일</div>
    <div className="userData">
     {data.registeredDate &&
      data.registeredDate.split("T").map((date) => (
       <span key={date} style={{ marginRight: "10px" }}>
        {date}
       </span>
      ))}
    </div>
    <div className="labels">수정일</div>
    <div className="userData">
     {data.modifiedDate &&
      data.modifiedDate.split("T").map((date) => (
       <span key={date} style={{ marginRight: "10px" }}>
        {date}
       </span>
      ))}
    </div>
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
    <Comments boardNo={boardNo.no} />
   </div>
  </div>
 );
}
export default UpdateBoard;
