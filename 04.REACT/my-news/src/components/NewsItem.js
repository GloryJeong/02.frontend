import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;

  .thumnail {
    margin-right: 1rem;

    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;

      a {
        color: #000;
      }
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;

function NewsItem({ article }) {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      (
      <div className={"thumnail"}>
        <a href={url} target='_blank'>
          <img src={urlToImage} alt={"thumnail"}></img>
        </a>
      </div>
      )
      <div className={"contents"}>
        <h2>
          <a href={url} target='_blank'>
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
}

export default NewsItem;
