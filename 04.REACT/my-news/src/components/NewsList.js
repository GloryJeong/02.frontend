import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import styled from "styled-components";
import axios from "axios";

const NewsItemBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sample = {
  title: "제목",
  description: "내용",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
};

function NewsList({ category, categoryValue }) {
  const [articles, setArticles] = useState([]);
  console.log(categoryValue);
  const queryString =
    categoryValue === "all" || !categoryValue
      ? ""
      : "&category=" + categoryValue;

  console.log(categoryValue);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&apiKey=8e1ae87b2eff40b785dbdf5134b493f8${queryString}`
        );
        console.log(response.data.articles);
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [category, categoryValue]);

  return (
    <NewsItemBlock>
      {/* <NewsItem article={sample}></NewsItem>
      <NewsItem article={sample}></NewsItem>
      <NewsItem article={sample}></NewsItem> */}
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsItemBlock>
  );
}

export default NewsList;
