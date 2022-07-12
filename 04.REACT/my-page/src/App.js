import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./Posts.js";
import Pagination from "./Pagination";

function App() {
 const [posts, setPosts] = useState([]);
 const [currentPage, setCurrentPage] = useState(1);
 const [postsPerPage, setPostsPerPage] = useState(10);

 // 현재 페이지
 // size
 // 총 데이터의 개수
 // 끝 페이지
 useEffect(() => {
  const data = async () => {
   const response = await axios.get(
    "http://jsonplaceholder.typicode.com/posts"
   );
   setPosts(response.data);
  };
  data();
 }, []);

 const lastPage = currentPage * postsPerPage;
 const firstPage = lastPage - postsPerPage;
 const currentPosts = (posts) => {
  return posts.slice(firstPage, lastPage);
 };
 //  const currentPosts = (posts) => {
 //   currentPosts = posts.slice(firstPage, lastPage);
 //   return currentPosts;
 //  };

 return (
  <div className="App">
   <Posts posts={currentPosts(posts)} />
   <Pagination
    postsPerPage={postsPerPage}
    totalPosts={posts.length}
    setCurrentPage={setCurrentPage}
   />
  </div>
 );
}

export default App;
