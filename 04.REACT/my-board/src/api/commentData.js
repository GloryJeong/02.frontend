import axios from "axios";

const baseUrl = "http://localhost:8080/comment";

export function addComment(data) {
 axios.post(baseUrl, data).catch((err) => {
  console.log(err);
 });
}

export function boardComments(boardNo, setComments) {
 const url = baseUrl + `/${boardNo}`;
 axios
  .get(url)
  .then((response) => setComments(response.data))
  .catch((err) => console.log("에러", err));
}

export function deleteComment(commentNo) {
 const url = baseUrl + `/${commentNo}`;
 axios.delete(url).catch((err) => console.log("에러", err));
}

export function updateComment(commentNo, data) {
 const url = baseUrl + `/${commentNo}`;
 axios.put(url, data).catch((err) => console.log("에러", err));
}
