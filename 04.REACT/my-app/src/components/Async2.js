import React, { useEffect } from "react";
import axios from "axios";
import { getUsers } from "../api/users";

function Async() {
  const userData = getUsers();
  usersData.then((response) => {
    console.log(response);
    console.log("-----------");
  });

  const getData = () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    // let url = "https://jsonplaceholder.typicode.com/photos";
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        console.log("정상응답");
      })
      .catch((error) => {
        console.log("비정상 응답", error);
      });
  };

  const getData2 = async () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await axios.get(url);
      console.log("정상 응답");
    } catch (error) {
      console.log("비정상 응답", error);
    }
  };

  useEffect(() => {
    const getData3 = async () => {
      let url = "https://jsonplaceholder.typicode.com/users";
      try {
        const response = await axios.get(url);
        console.log("정상 응답");
      } catch (error) {
        console.log("비정상 응답", error);
      }
    };
  }, []);

  return (
    <div>
      <button onClick={getData}>Data Loading</button>
    </div>
  );
}

export default Async;
