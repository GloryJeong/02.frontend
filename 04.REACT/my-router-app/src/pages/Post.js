import React, { useRef, useState } from "react";
import { Async } from "../api/Async";
import "./Post.css";
function Posts() {
  const [userId, setUserId] = useState(0);
  const onChange = (event) => {
    setUserId(event.target.value);
    // const data = Async(event.target.value);
    // console.log(data);
  };
  const data = Async(userId, true);
  return (
    <>
      <div>
        <input
          type='number'
          onChange={onChange}
          placeholder='User ID를 입력하세요'
        ></input>
      </div>
      <div className='top-data'>
        <div className='data-list'>USER ID {userId} DATA</div>
        {data.map((user) => {
          return (
            <div key={user.id} className='id-data'>
              <div>id:{user.id}</div>
              <div>Title:{user.title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Posts;
