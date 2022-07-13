import { addBoard } from "../../api/boardData";
import "../../css/addPage.css";

const clickAdd = () => {
 const title = document.getElementById("title").value;
 const content = document.getElementById("content").value;
 const user = document.getElementById("user").value;
 const data = {
  boardTitle: title,
  boardContent: content,
  user: { userEmail: user },
 };
 addBoard(data);
};

const AddBoard = () => (
 <div className="addPage">
  <h3>게시판 등록</h3>
  <div>
   <div>제목</div>
   <input type="text" id="title" placeholder="제목을 입력하세요." />
   <div>내용</div>
   <input type="file" id="file" />
   <textarea
    type="text"
    id="content"
    rows="30"
    cols="100"
    placeholder="내용을 입력하세요."
   />
   <div>작성자</div>
   <input type="text" id="user" placeholder="작성자를 입력하세요" />
   <div>
    <a href="/" onClick={() => clickAdd()}>
     등록
    </a>
   </div>
  </div>
 </div>
);
export default AddBoard;
