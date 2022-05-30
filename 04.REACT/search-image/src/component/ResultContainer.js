import styled from "styled-components";
import DummyData from "../asset/dummyData";
import ImageCard from "./ImageCard";
import NotFoundResult from "./NotFoundResult";
import getImages from "../api/getImage";
import { useState, useEffect } from "react";

const Container = styled.div`
  max-width: 1600px;
  margin: 8px auto;
  padding-right: 8px;
`;

const ResultsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const ResultContainer = ({ data }) => {
  return (
    <Container>
      <ResultsWrapper>
        {data.hits && data.hits.length !== 0 ? (
          data.hits.map((imgData) => (
            <ImageCard key={imgData.id} imgData={imgData} />
          ))
        ) : (
          <NotFoundResult />
        )}
      </ResultsWrapper>
    </Container>
  );
};

export default ResultContainer;
