import React, { useEffect, useRef } from "react";

function UseRef3() {
    const inputRef = useRef();

    useEffect(()=> {
        inputRef.current.focus();
    }, []);
    //이름 입력 - 알러트 출력 - 알러트 닫으면 다시 input으로 포커싱
    const showName = () => {
        alert(inputRef.current.value);
        inputRef.current.focus();
    }
    return(
        <div>
            <input ref={inputRef} type="text" placeholder="name" />
            <button onClick={showName}>입력</button>
        </div>
    );
}

export default UseRef3;