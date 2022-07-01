import axios from "axios";

const putaxios = (url, data) => {
 axios.put(url, data).catch((error) => {
  console.log("비정상 응답", error);
 });
};

export function updateAxios(deptno, dname, loc) {
 console.log(deptno);
 let url = "http://localhost:8080/dept/api/dept";
 let data = {
  deptno: deptno,
  dname: dname,
  loc: loc,
 };
 putaxios(url, data);
}
export default updateAxios;
