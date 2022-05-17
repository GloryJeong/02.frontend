import React,{useState} from "react";

function UseState2() {
    let students = ["김민규","정영훈"];
    const [names,setNames] = useState(students);
    const inputValueChange = (event) =>{
        setInput(event.target.value);
        
    }
    const [input, setInput] = useState("");
    const inputValueRecode = () =>{
        setNames((previousValue) => {
            // console.log(previousValue);
            let arr = Array.from(previousValue);
            arr.push(input);
            setInput("");
            return arr ;
        });
    }
    const [color, setColor] = useState("#0xFFFFFF");
    const colorChange = () =>{
        let colorCode = "#"+Math.round(Math.random()*0xffffff).toString(16)
        console.log(colorCode);
        setColor(colorCode)
    }
    let color2 = {color}            

    return(
        <div>
            <input type="text" onChange={inputValueChange} value={input}></input>
            <button onClick = {inputValueRecode}>Recode!</button>
            <button onClick = {colorChange}>Color!</button>
            {names.map((name, idx) =>{
                return <p style={color2} key={idx}>{name}</p>;
        })}
        </div>
    )
}

export default UseState2;