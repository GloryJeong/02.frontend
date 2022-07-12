import { addComment } from "../../api/commentData";
import "../../css/comment.css";

const clickAdd = (boardNo) => {
 const user = document.getElementById("commentUser").value;
 const content = document.getElementById("commentContent").value;
 const data = {
  board: { boardNo: boardNo },
  commenter: user,
  commentContent: content,
 };
 addComment(data);
};

function AddComment({ boardNo }) {
 return (
  <div className="addComment">
   <div className="commenter">
    <span className="commentTitle">댓글 작성자: </span>
    <input id="commentUser" />
   </div>
   <div className="commentContent">
    <span className="commentTitle">댓글 내 용: </span>
    <input id="commentContent" />
   </div>
   <div className="commentOption">
    <span className="optionBtn" onClick={() => clickAdd(boardNo)}>
     <a href={`./${boardNo}`}>작성</a>
    </span>
   </div>
  </div>
 );
}
export default AddComment;
