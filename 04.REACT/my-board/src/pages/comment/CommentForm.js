const CommentForm = ({ comment, update }) => (
 <>
  <div className="commenter">
   <span className="commentTitle">댓글 작성자: </span>
   <span className="commentContent">{comment.commenter}</span>
  </div>
  <div className="commentContent">
   <span className="commentTitle">댓글 내 용: </span>
   {update ? (
    <input defaultValue={comment.commentContent} id="newContent" />
   ) : (
    <span className="commentContent">{comment.commentContent}</span>
   )}
  </div>
 </>
);
export default CommentForm;
