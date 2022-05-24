import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error("예상치 못한 에러 발생");
  }
}

function Async() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const getData2 = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (error) {
      dispatch({ type: "ERROR", error: error });
    }
  };

  // useEffect(() => {
  //   getData2();
  // }, []);

  const { loading, data, error } = state;
  console.log(data);
  if (loading) return <div>데이터 요청 중입니다.</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  // if (!data) return null;

  return (
    <div>
      <button onClick={getData2}>Data Loading</button>
      {data ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              {user.title} ({user.url})
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
export default Async;
