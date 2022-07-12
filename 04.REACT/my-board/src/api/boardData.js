import axios from "axios";

const baseUrl = "http://localhost:8080/board";

export function getAllBoard(setBoardList, page) {
 const url = baseUrl + `s?page=${page}`;
 axios
  .get(url)
  .then((response) => {
   console.log(response.data);
   setBoardList(response.data);
  })
  .catch((err) => console.log("에러", err));
}

export function addBoard(data) {
 axios.post(baseUrl, data).catch((err) => console.log("에러", err));
}

export function searchBoard(boardNo, setData) {
 const url = baseUrl + `/${boardNo}`;
 axios
  .get(url)
  .then((response) => setData(response.data))
  .catch((err) => console.log("에러", err));
}

export function deleteBoard(boardNo) {
 const url = baseUrl + `/${boardNo}`;
 axios.delete(url).catch((err) => {
  console.log("에러", err);
 });
}

export function updateBoard(boardNo, data) {
 const url = baseUrl + `/${boardNo}`;
 axios.put(url, data).catch((err) => {
  console.log("에러", err);
 });
}
