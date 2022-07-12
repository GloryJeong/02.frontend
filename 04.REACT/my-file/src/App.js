import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
 const [files, setFiles] = useState([]);

 useEffect(() => {
  axios.get("http://localhost:8080/file-list").then((response) => {
   setFiles(response.data);
  });
 }, []);
 console.log(files);
 return (
  <div className="App">
   <form
    method="post"
    action="http://localhost:8080/file-save"
    encType="multipart/form-data"
   >
    <input type="file" name="file" id="file"></input>
    <br />
    <input type="submit" value="전송"></input>
   </form>
   <div>
    {files.length !== 0 &&
     files.map((file) => (
      <li key={file.id}>
       <a href={`http://localhost:8080/file-download/${file.id}`}>
        {file.originalFileName}
       </a>
      </li>
     ))}
   </div>
  </div>
 );
}

export default App;
