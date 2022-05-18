import React from "react";

function Child(props){
    const updateNum = () => {
        props.getNum(props.num + 1);
    }
    return(
        <div>
            <button onClick = {updateNum}>+1</button>
        </div>
    );
};
export default Child;