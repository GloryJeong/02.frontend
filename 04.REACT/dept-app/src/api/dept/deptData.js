import axios from "axios";

let deptUrl = "http://localhost:8080/dept";
export function getDeptAllData(setData, page) {
 const url = deptUrl + `s?page=${page}`;

 axios
  .get(url)
  .then((response) => {
   console.log(response);
   setData(response.data);
  })
  .catch((err) => {
   console.log("에러", err);
  });
}
export function addDept({ deptno, dname, loc }) {
 const param = new URLSearchParams();
 param.append("deptno", deptno);
 param.append("dname", dname);
 param.append("loc", loc);
 axios
  .post(deptUrl, param)
  .then(() => {
   window.location.href = "/dept";
  })
  .catch((err) => {
   console.log("에러", err);
  });
}
export function deleteDept(deptno, setCheck) {
 const url = deptUrl + `/${deptno}`;
 axios
  .delete(url)
  .then(() => {
   setCheck(true);
  })
  .catch((err) => {
   console.log("에러", err);
  });
}
export function updateDept(data) {
 const dept = {
  dname: data.dname,
  loc: data.loc,
 };
 console.log(dept);
 const url = deptUrl + `/${data.deptno}`;
 axios.put(url, dept).catch((err) => {
  console.log("에러", err);
 });
}
export function searchDept(deptno, setData) {
 const url = `${deptUrl}/${deptno}`;
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
