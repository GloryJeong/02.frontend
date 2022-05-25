import "./App.css";
import axios from "axios";

function App() {
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=f2d43a1e4c3c46bd8f95574937bbb881&category=business"
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={getData}>요청</button>
    </div>
  );
}

export default App;
