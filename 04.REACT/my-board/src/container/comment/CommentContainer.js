import { useEffect, useState } from "react";
import { boardComments } from "../../api/commentData";
import Comments from "../../pages/comment/Comments";

const CommentContainer = ({ boardNo }) => {
 const [check, setCheck] = useState(false);
 const [add, setAdd] = useState(false);
 const [comments, setComments] = useState([]);
 useEffect(() => {
  boardComments(boardNo, setComments);
 }, []);
 return (
  <>
   <Comments
    boardNo={boardNo}
    comments={comments}
    setCheck={setCheck}
    check={check}
    setAdd={setAdd}
    add={add}
   />
  </>
 );
};
export default CommentContainer;
