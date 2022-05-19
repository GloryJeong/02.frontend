import React, { useCallback,useState, useMemo, useEffect } from "react";

function UseCallback1() {
    const [number, setNumber] = useState(0);
    
    // const showNumber = () =>{
    //     console.log(`showNumber : number ${number}`);
    //     return;
    // }
    const showNumber =useCallback(() => {
        console.log(`showNumber : number ${number}`);
        return;
    },[number]);
    useEffect(() => {
        console.log("showNumber가 변경되었습니다.");
    },[showNumber]);

    const [toggle, setToggle] = useState(true);



    return(
        <div>
            <input 
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}>
            </input>
            <br />
            <button onClick={showNumber}>Show Number</button>
            <br />
            <button onClick={() =>{setToggle(!toggle)}}>{toggle.toString()}</button>
        </div>
    )

}
export default UseCallback1;