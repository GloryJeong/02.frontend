import React, { useEffect, useState } from "react";

function UseEffect1(){
    const [number, setNumber] = useState(0);
    const [input , setInput] = useState("");
    const updateNumber = () => {
        setNumber(number + 1);
    }
    const inputValueChange = (event) =>{
        setInput(event.target.value);
    }
    useEffect(() => {
        console.log("--useEffect 실행--");
    },[]);
    // number가 바뀔때만 useEffect 실행
    useEffect(() => {
        // console.log("--useEffect 실행 : number--");
    }, [number]);

    // text가 바뀔때만 useEffect 실행
    useEffect(() => {
        // console.log("--useEffect 실행 : text--");
    }, [number,input]);

    return (
        <div>
            <div>
                <button onClick={updateNumber}>+1</button>
                <span>Current Number : {number}</span>
            </div>
            <div>
                <input type="text" onChange={inputValueChange}/>
                <p>{input}</p>
            </div>
        </div>
    );
};

export default UseEffect1;