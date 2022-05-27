import "./App.css";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// 작성
const LectureList = styled.ul`
  padding-left: 0px;
`;

// 작성
const Lecture = styled.li`
  width: 100px;
  background: palevioletred;
  color: white;
  font-size: 1.125rem;
  list-style-type: none;
  text-align: center;
  border-radius: 5px;
  padding: 0.25rem;
  margin: 5px;
`;

const App = () => {
  const [lectures, setLectures] = useState(["HTML", "CSS", "JavaScript"]);
  const [newLecture, setNewLecture] = useState("");
  const inputRef = useRef();

  //Ref로 입력값 비우기

  // 작성
  const handleInputLecture = (event) => {
    setNewLecture(event.target.value);

    //Ref로 입력값 비우기
  };

  // 작성
  const handleUpdateLecture = () => {
    inputRef.current.focus();
    newLecture !== "" && setLectures([...lectures, newLecture]);
    //Ref로 입력값 비우기
    inputRef.current.value = "";

    //  useState로 입력값 비우기
    // setNewLecture("");
  };

  return (
    <div className='lecture-container'>
      <div>
        <input
          ref={inputRef}
          type='text'
          placeholder='배운 과목을 입력해주세요'
          onChange={handleInputLecture}
          autoFocus
        ></input>
        <button onClick={handleUpdateLecture}>추가</button>
      </div>
      <LectureList>
        {lectures.map((lecture, idx) => (
          <Lecture key={`${lecture + idx}`}>{lecture}</Lecture>
        ))}
      </LectureList>
    </div>
  );
};

export default App;
