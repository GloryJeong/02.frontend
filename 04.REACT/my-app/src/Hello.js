import React from "react"

function Hello({name, color, important}){
    console.log(important);
    return ( 
        <div style={{
            color
        }}>
            {important && "!!"}
            Hello,{name}
        </div>
    )
}


Hello.defaultProps={
    name : "name prop 기본값"
}

export default Hello;

