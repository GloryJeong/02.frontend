// import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import UseState1 from './UseState1';
import UseState2 from './UseState2';
import View from './View';


function App() {
  const title = "React"
  const basicStyle = {color: "green", fontSize : '40px'}
  // const basic = {color: "red", fontSize : '30px'}
  // const {color} = basic;

  return (
    // <View>
    //   <Hello name="react" color="red"></Hello>
    //   {/* <Hello name="react" color="blue"></Hello> */}
    //   <Hello color="yellowgreen" important={true}></Hello>
    //   {/* <div className="item"></div>
    //   <div style={basicStyle}>{title}</div> */}
    // </View>
    <UseState2/>
  );
}

export default App;
