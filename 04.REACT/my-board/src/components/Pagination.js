function Pagination({ data, setPage, page }) {
 return (
  <>
   <span onClick={() => setPage(page === 1 ? page : data.start - data.size)}>
    이전
   </span>
   {data.pageList &&
    data.pageList.map((page) => (
     <span
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
     setPage(page === data.totalPage ? page : data.start + data.size)
    }
   >
    다음
   </span>
  </>
 );
}
export default Pagination;
