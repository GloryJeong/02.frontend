// import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import UseState1 from './UseState1';
import UseState2 from './UseState2';
import View from './View';
import Parent from './Parent';
import Child from './Child';
import UseEffect1 from './useEffect';
import UseEffect2 from './useEffect2';
import { useState } from 'react';
import UseRef1 from './UseRef1';
import UseRef2 from './UseRef2';
import UseRef3 from './useRef3';
import News from './News';
import { UseContext1 } from './UseContext1';

function App() {
  const title = "React"
  // const basicStyle = {color: "green", fontSize : '40px'}
  // const basic = {color: "red", fontSize : '30px'}
  // const {color} = basic;
  // const [previousState,setState] = useState(false)
  // const changeImportant = () =>{
  //   setState(!previousState);
  // }
  const [company,setCompany] = useState("더존");
  const [color, setColor] = useState("black")
  return (
    <div className='App'>

     {/* <View>
       <Hello name="react" color="red"></Hello>
       <Hello name="react" color="blue"></Hello>
       <Hello color="yellowgreen" important={true}></Hello>
      <div className="item"></div>
       <div style={basicStyle}>{title}</div>
     </View> */}

    {/* 부모 - 자식 데이터 전달 */}
    {/* <Parent>
      <Child></Child>
    </Parent> */}

    {/* <UseState1/>
    <UseState2/> */}
    {/* <UseEffect2 state={previousState}/> */}
    {/* work 버튼을 클릭 했을 때 
    --> 1) '작업중 - 콘솔보기'가 출력되면서
        2) 작업이 실행되도록 */}
    {/* <button onClick={changeImportant}>work</button> */}



    {/* UseRef */}
    {/* <UseRef1/> */}
    {/* <UseRef2/> */}
    {/* <UseRef3/> */}
    
    {/* useContext 사용 */}
    {/* <News
     company={company} setCompany={setCompany}></News> */}
     <UseContext1.Provider value={{company,setCompany,color,setColor}}>
    <News></News>
     </UseContext1.Provider>



    </div>
    
  );
}

export default App;
