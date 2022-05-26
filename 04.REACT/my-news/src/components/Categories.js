import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getCategoryData from "../api/getCategoryData";
import { Link } from "react-router-dom";
// const categories = [
//   {
//     name: "all",
//     text: "전체보기",
//   },
//   {
//     name: "business",
//     text: "비즈니스",
//   },
//   {
//     name: "entertainment",
//     text: "엔터테인먼트",
//   },
//   {
//     name: "health",
//     text: "건강",
//   },
//   {
//     name: "science",
//     text: "과학",
//   },
//   {
//     name: "sports",
//     text: "스포츠",
//   },
//   {
//     name: "technology",
//     text: "기술",
//   },
// ];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }
`;

function Categories({ category, setCategory }) {
  const [categories, setCategories] = useState([]);
  const getCategory = async () => {
    const data = await getCategoryData();
    console.log(data);
    setCategories(data);
  };
  useEffect(() => {
    getCategory();
    console.log(categories);
  }, []);
  console.log(category);
  return (
    <CategoriesBlock>
      {/* <Link> */}
      {categories.map((c) => (
        <Category
          key={c.name}
          onClick={() => {
            setCategory(c.name);
            category = c.name;
          }}
        >
          <Link to={`/${c.name}`}>{c.text}</Link>
        </Category>
      ))}
      {/* </Link> */}
    </CategoriesBlock>
  );
}
export default Categories;
