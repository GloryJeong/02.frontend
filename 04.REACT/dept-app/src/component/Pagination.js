function Pagination({ data, setPage, page }) {
 return (
  <>
   {data.prev && <button onClick={() => setPage(page - 1)}>이전</button>}
   {data.pageList &&
    data.pageList.map((page) => (
     <span
      className="pageNum"
      key={page}
      id={page}
      onClick={(e) => {
       setPage(parseInt(e.target.id));
      }}
     >
      {page}
     </span>
    ))}
   {data.next && <button onClick={() => setPage(page + 1)}>다음</button>}
  </>
 );
}
export default Pagination;
