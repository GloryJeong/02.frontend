import "../css/pagination.css";
function Pagination({ data, setPage, currentPage }) {
 return (
  <div className="pagination">
   <span
    onClick={() =>
     setPage(currentPage <= 1 ? currentPage : data.start - data.size)
    }
   >
    Prev
   </span>
   {data.pageList &&
    data.pageList.map((page) => (
     <span
      className={currentPage === page ? "currentPage" : "nonCurrentPage"}
      key={page}
      id={page}
      onClick={(e) => {
       setPage(parseInt(e.target.id));
      }}
     >
      {page}
     </span>
    ))}
   <span
    onClick={() =>
     setPage(
      data.start + data.size > data.totalPage
       ? currentPage
       : data.start + data.size
     )
    }
   >
    Next
   </span>
  </div>
 );
}
export default Pagination;
