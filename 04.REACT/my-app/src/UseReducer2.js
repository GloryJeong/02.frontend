import React, { useCallback, useEffect, useReducer, useRef, useState } from "react";
import List from "./List";


const reducer = (state, action) => {
    action.id.current += 1
    action.setList("")
    action.inputRef.current.focus();
    const filter1 = state.lists.filter(element => element.confirmed  != false);
    state.lists = filter1;

    return state = {count : state.lists.length+1,lists : [...state.lists,{
        id : action.id.current,
        name : action.name,
        confirmed : true}]};

}

const initialList = {
    count: 0, 
    lists : [
        // {
        //     id: 1,
        //     name: 'ramen',
        //     confirmed: true
        // }
    ]
}


function UseReducer2() {
    const [list, setList] = useState("");
    const listId = useRef(0);
    const inputRef = useRef();
    const [finalList, dispatch] = useReducer(reducer, initialList); 

    
    return(
        <div>
            <h2>물품 리스트</h2>
            <p>총 물품수 : {finalList.count} 개</p>
            <input
                ref={inputRef}
                value={list}
                type="text"
                placeholder="물품을 입력하세요"
                onChange={(e) => setList(e.target.value)}>
            </input>
            <button onClick={()=> {dispatch({lists : finalList,name : list, id : listId,setList : setList,inputRef : inputRef})}}>추가</button>
            {finalList.lists.map((obj) =>{if (obj.length != 0) {  
                return <List key={obj.id} name={obj.name} confirmed={obj.confirmed} finalList = {finalList}></List>
            }
            })}
        </div>
    )
}

export default UseReducer2;