import React, { useContext, useState } from "react";
import { UseContext1 } from "./UseContext1";
    
const Header = () => {
    const {company, setCompany,color, setColor} = useContext(UseContext1);
    

    return (
        <header 
        className="header"
        style={{color : color
		} }
        >
            <h1>{company} New Devs</h1>
            <button onClick={()=>{
                setCompany(company==="더존"? "DouZone":"더존")
            }}>한/영 변환</button>
            {/* 다크모드변환 */}
            <button onClick={()=>{
                setColor(color==="black"?"white":"black")
            }}>ModeChange</button>
        </header>
    );
}

export default Header; 
