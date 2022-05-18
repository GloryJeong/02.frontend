import React, { useState,useRef } from "react";

function UseRef1(){
    // useState : 렌더링이 계속 일어남
    const [stateNumber,setStateNumber] = useState(0);
    const updateStateNumber = () =>{
        setStateNumber(stateNumber+1);
        console.log(stateNumber);
    };
    // useRef : 내부적으로는 실행되지만 렌더링은 일어나지 않는다
    const refNumber = useRef(0);
    const updateRefNumber = () =>{
        refNumber.current = refNumber.current + 1;
        console.log(refNumber.current);
    };

    // console.log('--렌더링--');
    return(
        <div>
            <div>
                <p>StateNumber : {stateNumber}</p>
                <button onClick={updateStateNumber}>StateNumber+1</button>
            </div>
            <hr/>
            <div>
                <p>StateNumber : {refNumber.current}</p>
                <button onClick={updateRefNumber}>StateNumber+1</button>
            </div>
        </div>
    )

}


export default UseRef1;