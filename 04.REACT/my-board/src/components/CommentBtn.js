import { deleteComment, updateComment } from "../api/commentData";

const CommentsBtn = ({ comment, update, setUpdate }) => (
 <div className="commentOption">
  <span className="optionBtn">
   {update ? (
    <a
     href={`./${comment.board.boardNo}`}
     onClick={() => {
      const data = {
       commentContent: document.getElementById("newContent").value,
      };
      updateComment(comment.commentNo, data);
     }}
    >
     수정완료
    </a>
   ) : (
    <span
     onClick={() => {
      setUpdate(true);
     }}
    >
     수정하기
    </span>
   )}
  </span>
  <span className="optionBtn">
   <a
    href={`./${comment.board.boardNo}`}
    onClick={() => deleteComment(comment.commentNo)}
   >
    삭제
   </a>
  </span>
 </div>
);
export default CommentsBtn;
