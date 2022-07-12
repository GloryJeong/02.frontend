import React from "react";
import styled from "styled-components";

const PaginationUl = styled.ul`
 list-style: none;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 5px;
`;
const PaginationLi = styled.li`
 padding: 4px;
 font-size: 20px;
 &:hover {
  cursor: pointer;
  color: green;
  background-color: orange;
  font-size: 40px;
 }
`;

const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }) => {
 const pageNumbers = [];
 for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  pageNumbers.push(i);
 }

 return (
  <div>
   <div>
    <PaginationUl>
     {pageNumbers.map((number) => (
      <PaginationLi key={number}>
       <span onClick={() => setCurrentPage(number)}>{number}</span>
      </PaginationLi>
     ))}
    </PaginationUl>
   </div>
  </div>
 );
};

export default Pagination;
