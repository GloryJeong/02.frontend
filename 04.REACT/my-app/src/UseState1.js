import React, { useState } from "react";


function UseState1(){
    const [time,setTime] =useState(1);
    console.log("--렌더링--");
    console.log("--외부--",time);
    const updateTime = () =>{
        // setTime(time>=24?1:time+1);
        console.log("--내부--",time);

        // 1. state 변수에는 직접 값을 할당x
        // time += 1

        setTime(time+1);
    }

    return(
        <div>
        <span>Now : {time}</span>
        <button onClick={updateTime}>Click!</button>
    </div>
    )


    }
export default UseState1;
