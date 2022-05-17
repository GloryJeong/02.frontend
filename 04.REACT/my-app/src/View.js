import React from "react";

function View({children}) {
    const styleValue = {
        border: '4px dashed navy',
        padding: 20,
        margin: 20
    }
    return (
        <div style={styleValue}>{children}</div>
    )
}

export default View;