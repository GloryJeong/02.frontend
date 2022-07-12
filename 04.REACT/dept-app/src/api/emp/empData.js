import axios from "axios";

const empUrl = "http://localhost:8080/emp";
export function getEmpAllData(setData, page) {
 const url = empUrl + `s?page=${page}`;

 axios
  .get(url)
  .then((response) => {
   setData(response.data);
  })
  .catch((err) => {
   console.log("에러", err);
  });
}
export function addEmp(data) {
 axios
  .post(empUrl, data)
  .then(() => {
   window.location.href = "/emp";
  })
  .catch((err) => {
   console.log("에러", err);
  });
}
export function deleteEmp(empno, setCheck, check) {
 const url = empUrl + `/${empno}`;
 axios
  .delete(url)
  .then(() => {
   setCheck(!check);
  })
  .catch((err) => {
   console.log("에러", err);
  });
}
export function updateEmp(data) {
 const emp = {
  // dname: data.dname,
  // loc: data.loc,
 };
 const url = empUrl + `/${data.empno}`;
 axios.put(url, emp).catch((err) => {
  console.log("에러", err);
 });
}
export function searchEmp(empno, setData) {
 const url = `${empUrl}/${empno}`;
 console.log(url);
 axios
  .get(url)
  .then((response) => {
   setData({ dtoList: [response.data] });
  })
  .catch((err) => {
   console.log("에러", err);
  });
}
