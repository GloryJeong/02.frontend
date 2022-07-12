import { useEffect, useState } from "react";
import { boardComments } from "../../api/commentData";
import "../../css/comment.css";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
function Comments({ boardNo }) {
 const [check, setCheck] = useState(false);
 const [add, setAdd] = useState(false);
 const [comments, setComments] = useState([]);
 useEffect(() => {
  boardComments(boardNo, setComments);
 }, []);
 return (
  <>
   <div className="commentBtn">
    <span onClick={() => setCheck(true)}>{`댓글[${comments.length}]`}</span>
    <span onClick={() => setAdd(true)}>댓글 작성</span>
   </div>
   <div>
    {check &&
     comments &&
     comments.map((comment) => (
      <CommentsList
       key={comment.commentNo}
       comment={comment}
       boardNo={boardNo}
      />
     ))}
   </div>
   <div>{add && <AddComment boardNo={boardNo} />}</div>
  </>
 );
}
export default Comments;
