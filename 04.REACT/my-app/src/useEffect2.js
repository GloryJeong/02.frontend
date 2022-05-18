import React, { useEffect, useState } from "react";

function UseEffect2(previousState) {
    const[input,setInput]= useState("")
    console.log(previousState.state);
    useEffect(() => {
        if (previousState.state) {
            setInput("작업중 - 콘솔보기")
            const work = setInterval(() => {
                console.log('--work--')
            }, 1000);
            return()=>{
                clearInterval(work);
            };
        }else{
            setInput("");
        }
    })


    return (
        <div>
            <p>{input}</p>
        </div>
    )
}

export default UseEffect2