// Inputs
import React, { useState } from "react";

function Inputs() {
  // const [name, setName] = useState("");
  // const [nickName, setNickName] = useState("");

  // const changeName = (event) => {
  //     console.log(event.target.value);
  //     setName(event.target.value);
  // }
  // const changeNickName = (event) => {
  //     console.log(event.target.value);
  //     setNickName(event.target.value);
  // }

  // const resetInputs = () => {
  //     setName("");
  //     setNickName("");
  // }

  // version 2
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });

  const changeInputs = (event) => {
    const { name, value } = event.target;
    // setInputs(event.target.name === "name" ?
    // 	{
    // 		name: event.target.value,
    // 		nickName: inputs.nickName
    // 	} :
    // 	{
    // 		name: inputs.name,
    // 		nickName: event.target.value
    // 	})
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetInputs = () => {
    setInputs({ name: "", nickName: "" });
  };
  console.log(inputs);
  return (
    <div>
      {/* <h1>이름: {name}</h1>
			<h1>닉네임: {nickName}</h1>
            
			<input type="text" value={name} placeholder="이름" onChange={changeName} />
			<input type="text" value={nickName} placeholder="닉네임" onChange={changeNickName} /> */}
      {/* <button onClick={resetInputs}>Reset</button> */}

      {/* version 2 */}
      <h1>이름: {inputs.name}</h1>
      <h1>닉네임: {inputs.nickName}</h1>

      <input
        type='text'
        name='name'
        value={inputs.name}
        placeholder='이름'
        onChange={changeInputs}
      />
      <input
        type='text'
        name='nickName'
        value={inputs.nickName}
        placeholder='닉네임'
        onChange={changeInputs}
      />

      <button onClick={resetInputs}>Reset</button>
    </div>
  );
}

export default Inputs;
