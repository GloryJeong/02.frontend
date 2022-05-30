import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "../asset/delete.svg";

const Tag = styled.div`
  display: flex;
  font-size: 14px;
  border-radius: 16px;
  padding: 6px 10px;
  color: var(--primary);
  background-color: var(--highlight);
  cursor: pointer;
  &:hover {
    background-color: var(--overlay);
  }
  margin: 4px;
`;

const TagLabel = styled.span`
  margin-right: 4px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const SearchTag = ({ query }) => {
  const [queryList, setQueryList] = useState([]);
  useEffect(() => {
    setQueryList(!!query ? [...queryList, query] : queryList);
  }, [query]);
  const deleteQuery = ({ idx }) => {
    console.log(idx);
    queryList.splice(idx, 1);
    console.log(queryList);
    setQueryList(queryList);
  };
  return (
    <Tag>
      <TagLabel>최근 검색어</TagLabel>
      {queryList.length !== 0 &&
        queryList.map((query, idx) => (
          <React.Fragment key={query + idx}>
            <span>{query}</span>
            <DeleteIcon width='12px' onClick={() => deleteQuery({ idx })} />
          </React.Fragment>
        ))}
    </Tag>
  );
};

export default SearchTag;
