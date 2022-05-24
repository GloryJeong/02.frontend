import React from "react";
import { Async } from "../api/Async";

function Users() {
  const data = Async(0, false);
  return (
    <div>
      <br></br>
      <div className='top-data'>
        <div className='data-list'>USER DATA</div>
        <div>
          {data.map((user) => {
            return (
              <div key={user.id} className='id-data'>
                <div>id:{user.id}</div>
                <div>Title:{user.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Users;
