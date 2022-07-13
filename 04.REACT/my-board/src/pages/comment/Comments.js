import "../../css/comment.css";
import AddComment from "./AddComment";
import CommentsList from "../../container/comment/CommentsList";

function Comments({ boardNo, comments, setCheck, check, setAdd, add }) {
 return (
  <>
   <div className="commentBtn">
    <span onClick={() => setCheck(!check)}>{`댓글[${comments.length}]`}</span>
    <span onClick={() => setAdd(!add)}>댓글 작성</span>
   </div>
   <div>
    {check &&
     comments &&
     comments.map((comment) => (
      <CommentsList key={comment.commentNo} comment={comment} />
     ))}
   </div>
   <div>{add && <AddComment boardNo={boardNo} />}</div>
  </>
 );
}
export default Comments;
