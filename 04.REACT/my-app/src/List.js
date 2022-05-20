import React, { useReducer, useState } from "react";
import UseRef1 from "./UseRef1";

const reducer = (state, action) => {
    let listLength = action.lists.lists.length - 1;
    return state.lists[listLength].confirmed = false;
}
{/* <Link to = "./" */}
const List = ({ name, finalList }) => {
    const [finalList1, dispatch] = useReducer(reducer, finalList);
    return (
        <div>
            <span>{name}</span>
            <button onClick={() => { dispatch({ lists: finalList1 })}
            }>삭제</button>
        </div>
    )
}

export default List;