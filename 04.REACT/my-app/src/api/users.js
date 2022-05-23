// 유저와 관련된 api들을 모아둔 곳
import axios from "axios";

export const getUsers = async () => {
  let url = "https://jsonplaceholder.typicode.com/users";
  const response = await axios.get(url);
  return response;
};
