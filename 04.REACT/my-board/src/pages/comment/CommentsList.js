import { useState } from "react";
import {
 addComment,
 deleteComment,
 updateComment,
} from "../../api/commentData";
import "../../css/comment.css";

function CommentsList({ comment, boardNo }) {
 const [update, setUpdate] = useState(false);
 const [content, setContent] = useState("");
 console.log("11");
 return (
  <div className="addComment">
   <div className="commenter">
    <span className="commentTitle">댓글 작성자: </span>
    <span className="commentContent">{comment.commenter}</span>
   </div>
   <div className="commentContent">
    <span className="commentTitle">댓글 내 용: </span>
    {update ? (
     <input value={content} onChange={(e) => setContent(e.target.value)} />
    ) : (
     <span className="commentContent">{comment.commentContent}</span>
    )}
   </div>
   <div className="commentOption">
    <span className="optionBtn">
     {update ? (
      <a
       href={`./${boardNo}`}
       onClick={() => {
        const data = { commentContent: content };
        updateComment(comment.commentNo, data);
       }}
      >
       수정완료
      </a>
     ) : (
      <span
       onClick={() => {
        setUpdate(true);
        setContent(comment.commentContent);
       }}
      >
       수정하기
      </span>
     )}
    </span>
    <span className="optionBtn">
     <a href={`./${boardNo}`} onClick={() => deleteComment(comment.commentNo)}>
      삭제
     </a>
    </span>
   </div>
  </div>
 );
}
export default CommentsList;
