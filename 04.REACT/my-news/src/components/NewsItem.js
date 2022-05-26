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
  const noImage =
    "data:image/png;base64,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";
  return (
    <NewsItemBlock>
      (
      <div className={"thumnail"}>
        <a href={url} target='_blank'>
          <img src={urlToImage ? urlToImage : noImage} alt={"thumnail"}></img>
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
