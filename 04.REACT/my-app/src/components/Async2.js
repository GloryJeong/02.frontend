import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { getUsers } from "../api/users";

function Async() {
  const [photos, setPhotos] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  let endNumber = useRef(0);

  const getData = () => {
    let url = "https://jsonplaceholder.typicode.com/photos";
    axios
      .get(url)
      .then((response) => {
        setPhotos(response.data.slice(pageNumber, pageNumber + 10));
        endNumber.current = response.data.length;
      })
      .catch((error) => {
        console.log("비정상 응답", error);
      });
  };
  useEffect(() => {
    getData();
  }, [pageNumber]);
  return (
    <div>
      {/* <button onClick={getData}>Data Loading</button> */}
      <button
        onClick={() => {
          setPageNumber(pageNumber >= endNumber.current ? 0 : pageNumber + 10);
        }}
      >
        next
      </button>
      <button
        onClick={() => {
          setPageNumber(pageNumber <= 0 ? 0 : pageNumber - 10);
        }}
      >
        previous
      </button>
      {photos.map((photo) => {
        return (
          <div key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.id}></img>
            <br />
            Title : {photo.title}
          </div>
        );
      })}
    </div>
  );
}

export default Async;
