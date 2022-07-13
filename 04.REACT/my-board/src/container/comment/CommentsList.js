import { useState } from "react";
import CommentsBtn from "../../components/CommentBtn";
import CommentForm from "../../pages/comment/CommentForm";

import "../../css/comment.css";

function CommentsList({ comment }) {
 const [update, setUpdate] = useState(false);
 return (
  <div className="addComment">
   <CommentForm comment={comment} update={update} />
   <CommentsBtn comment={comment} update={update} setUpdate={setUpdate} />
  </div>
 );
}
export default CommentsList;
