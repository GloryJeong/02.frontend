import React, { useCallback, useEffect, useReducer, useRef, useState } from "react";
import List2 from "./List2";

const reducer = (state, action) => {
   console.log(state,action);
   
   switch(action.type){
       case "add-list":
           action.inputRef.current.focus();
           action.setList("");
           const name = action.name.list;
           const newList = {
               id : action.id.currentId.current += 1,
               name,
               confirmed : true
           };
           return {
               count : state.count +1, lists : [...state.lists,newList]   
           }
        case "delete-list":
            console.log(state.lists);
            return{
                count : state.count -1, lists : state.lists.filter(list => list.id !== action.removeId)
            }
        default:
            return state
   }
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

function UseReducer3() {
    const [list, setList] = useState("");
    const currentId = useRef(initialList.count)
    const inputRef = useRef()
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
            <button 
                onClick={()=>{
                    dispatch({type: "add-list",id : {currentId}, name : {list},inputRef : inputRef, setList : setList});
                }}>추가</button>
            {finalList.lists.map((list) =>{
                // return <p key={list.id}>{list.name}</p>;
                return <List2 key={list.id}
                              name={list.name} id={list.id} dispatch = {dispatch}></List2>
        })}
        </div>
    )
}

export default UseReducer3;