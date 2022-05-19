import React, { useCallback, useState } from "react";
import Item from "./item";

function UseCallback2() {
    const [size,setSize] = useState(100);
    const [darkmode, setDarkMode] = useState(false);

    const createItemStyle = useCallback(() => {
        return{
            backgroundColor : "gold",
            width: `${size}px`,
            height: `${size}px`
            
        }
    },[size])

    return (
        <div style={{background : darkmode? "black":"white" }}>
            <input
                type="number"
                value={size}
                onChange={(e)=> setSize(e.target.value)}>
            </input>
            <br/>
            <button onClick={() => setDarkMode(!darkmode)}>DarkMode</button>
            <Item createItemStyle = {createItemStyle}></Item>
        </div>
    );
};

export default UseCallback2;