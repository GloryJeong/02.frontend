import axios from "axios";

const postaxios = (url) => {
 axios.delete(url).catch((error) => {
  console.log("비정상 응답", error);
 });
};

export function deleteAxios(deptno) {
 console.log("deptno");
 //   const [data, setData] = useState([]);
 let url = "http://localhost:8080/dept/api/dept";
 url += "/" + deptno;
 console.log(url);
 postaxios(url);
}
export default deleteAxios;
