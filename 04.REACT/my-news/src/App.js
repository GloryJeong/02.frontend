import "./App.css";
import axios from "axios";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import { useState, useCallback } from "react";

function App() {
  const [category, setCategory] = useState("");

  const selectCategory = useCallback((category) => setCategory(category), []);

  console.log(category);
  return (
    // <div>
    //   <button onClick={getData}>요청</button>
    // </div>
    <>
      <Categories
        setCategory={setCategory}
        onClick={selectCategory}
      ></Categories>
      <NewsList category={category}></NewsList>
    </>
  );
}

export default App;
