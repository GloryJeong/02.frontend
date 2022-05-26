import "./App.css";
import axios from "axios";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import { useState, useCallback } from "react";
import { useParams } from "react-router-dom";

function App() {
  const [category, setCategory] = useState("");
  const { categoryValue } = useParams();
  const selectCategory = useCallback((category) => setCategory(category), []);
  console.log(categoryValue);
  return (
    // <div>
    //   <button onClick={getData}>요청</button>
    // </div>
    <>
      <Categories
        category={category}
        setCategory={setCategory}
        onClick={selectCategory}
      ></Categories>
      <NewsList category={category} categoryValue={categoryValue}></NewsList>
    </>
  );
}

export default App;
