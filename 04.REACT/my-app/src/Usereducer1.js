import React, { useCallback, useEffect, useReducer, useState } from "react";

const reducer = (state, action) =>{
    // console.log("--reducer 동작");
    // console.log(state,action);
    switch (action.type) {
        case "buy":
            return state - action.stock;
        case "sell" : 
            return state + action.stock;
        default:
            return;
    }
}

function UseReducer1() {
    const [number, setNumber] = useState(0);
    const [balance, dispatch] = useReducer(reducer,0);

    return(
        <div>
            <p>잔액 : {balance} 원</p>
            <input 
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
                step="1000">
            </input>
            <br />
            <button onClick={()=>{dispatch({type : "buy" , stock : number})}}>매수</button>
            <button onClick={() => {dispatch({type : "sell", stock : number})}}>매도</button>
        </div>
    )
}

export default UseReducer1;