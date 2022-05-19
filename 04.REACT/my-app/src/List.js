import React, { useReducer, useState } from "react";
import UseRef1 from "./UseRef1";

const reducer = (state, action) => {
    // console.log(action.lists.lists.length-1);
    let listLength = action.lists.lists.length - 1;
    state.lists[listLength].confirmed = false
    // const filter1 = state.lists.filter(element => element.confirmed  != false);
    // state.lists = filter1;
    // console.log(state);
    
    return state;
}
{/* <Link to = "./" */}
const List = ({ name, finalList }) => {
    const [movement, setmovement] = useState(true);
    const [finalList1, dispatch] = useReducer(reducer, finalList);
    // console.log(finalList1(finalList.lists.count));
    return (
        <div>
            <span>{name}</span>
            <button onClick={() => { dispatch({ lists: finalList1 })}
            }>삭제</button>
        </div>
    )
}

export default List;