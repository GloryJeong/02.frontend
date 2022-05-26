import logo from "./logo.svg";
import "./App.css";
import WeatherData from "./api/WeatherData";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    WeatherData(setData, language);
  }, [language]);
  if (data !== null) {
    console.log(data);
    console.log(data.sys.sunset);
    var date = new Date(data.sys.sunset);
    date = date.toString();
    date = date.replace("GMT+0900 (한국 표준시)", "");

    return (
      <div className='container'>
        <div className='header'>React : my-weather</div>
        <hr />
        <div className='body'>
          <div className='output'>
            <form action=''>
              <select
                name=''
                id='selectLange'
                onChange={(event) => {
                  setLanguage(event.currentTarget.value);
                }}
              >
                <option value=''>언어</option>
                <option value='kr'>한국어</option>
                <option value='en'>English</option>
              </select>
            </form>
            <div className='city'>{data.name}</div>
            <hr />
            <ul className='dataList'>
              <li>
                {language == "kr" ? "날씨 " : "Weather "} :{" "}
                {data.weather[0].main}
              </li>
              <li>
                {language == "kr" ? "설명 " : "Description "} :{" "}
                {data.weather[0].description}
              </li>
              <li>
                {language == "kr" ? "풍속 " : "Wind Speed "} : {data.wind.speed}
              </li>
              <li>
                {language == "kr" ? "일몰 시간 " : "Sunset "} : {date}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
