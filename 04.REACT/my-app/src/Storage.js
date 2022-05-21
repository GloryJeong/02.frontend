import React, { useEffect, useRef, useState } from "react";

function Storage() {
    const [name, setName] = useState("");
    const [check, setCheck] = useState(false);
    const [arr, setArr] = useState([]);
    const nextKey = useRef(window.localStorage.length);

    const onChange = (e) => {
        setName(e.target.value);
        setCheck(false);
        setArr([]);
    };
    const saveName = () => {
        nextKey.current += 1;
        const user = { name: name };
        window.localStorage.setItem(`key${nextKey.current}`,JSON.stringify(user))
    }
    const loadName = () => {
        // setCheck(false);
        // while(1){
        //     keyNum += 1;
        //     if(window.localStorage.getItem(`key${keyNum}`) === null){
        //         setCheck(false);
        //         break;
        //     }
        //     else if((JSON.parse(window.localStorage.getItem(`key${keyNum}`)).name === name)) {
        //         console.log(keyNum);
        //         setCheck(true);
        //         setCheckNum(keyNum);
        //         break;
        //     }
        // }

        for (let i = 0; i < window.localStorage.length; i++) {
            let key = window.localStorage.key(i);
            const value = window.localStorage.getItem(key);
            if (JSON.parse(value).name === name) {
                arr.push({ key, name });
                setCheck(check ? check : !check);
                setArr(arr);
                console.log(arr);
            }
        }

    }
    return (
        <div>
            <input
                name="name"
                placeholder="이름을 입력하시오"
                onChange={onChange} />
            <button
                onClick={saveName}>저장</button>
            <button
                onClick={loadName}>요청</button>
            {arr.map((ppl) => {
                return <p key={ppl.key}>{ppl.key} : {ppl.name}</p>
            })}

        </div>
    )
    {/* {check? <p>{arr.map((user) => {user.key,user.name})}</p>:<></>} */ }
}
export default Storage;