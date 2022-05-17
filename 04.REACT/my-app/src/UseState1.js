import React, { useState } from "react";


function UseState1(){
    const [time,setTime] =useState(1);
    const updateTime = () =>{
        setTime(time>=24?1:time+1);
        
    }
    return(
        <div>
        <span>Now : {time}</span>
        <button onClick={updateTime}>Click!</button>
    </div>
    )


    }
export default UseState1;
