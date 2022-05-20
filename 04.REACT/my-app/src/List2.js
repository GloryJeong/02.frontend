import React, { useReducer, useState } from "react";

const List2 = ( {id,name,dispatch} ) => {
    const [select,setSelect] = useState(true)
    return(
        <div>
            <span style={{
                color : (select ? "black":"red"), 
                textDecoration : (select?"none":"line-through")}}onClick={()=>{
                setSelect(!select)}}>{name}</span>
            <button onClick={()=>{
                dispatch({type : "delete-list",removeId : id})}}>삭제</button>
        </div>
    )
}

export default List2;