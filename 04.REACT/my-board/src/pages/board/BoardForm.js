import SubmitBtn from "../../components/SubmitBtn";
import CommentContainer from "../../container/comment/CommentContainer";
import Comments from "../comment/Comments";

const BoardForm = ({ data, boardNo }) => (
 <div>
  <div className="labels">제목</div>
  <input type="text" id="title" defaultValue={data.boardTitle} />
  <div className="labels">내용</div>
  <textarea type="text" id="content" defaultValue={data.boardContent} />
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
  <SubmitBtn data={data} />
  <CommentContainer boardNo={boardNo.no} />
 </div>
);

export default BoardForm;
