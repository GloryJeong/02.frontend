function BoardTable({ boardList }) {
 return (
  <table className="boardTable">
   <thead>
    <tr>
     <th className="boardNo"> # </th>
     <th className="boardTitle"> 제목 </th>
     <th className="boardWirtten"> 작성자 </th>
     <th className="boardDate"> 등록일 </th>
    </tr>
   </thead>
   <tbody>
    {boardList.dtoList &&
     boardList.dtoList.map((board) => (
      <tr key={board.boardNo}>
       <td>{board.boardNo}</td>
       <td>
        <a href={`/board/edit/${board.boardNo}`}>
         {board.boardTitle}
         {`[${board.comment.length}]`}
        </a>
       </td>
       <td>{board.user && board.user.userEmail.split("@", 1)}</td>
       <td>
        {board.registeredDate.split("T").map((date) => (
         <span key={date} style={{ marginRight: "10%" }}>
          {date}
         </span>
        ))}
       </td>
      </tr>
     ))}
   </tbody>
  </table>
 );
}
export default BoardTable;
