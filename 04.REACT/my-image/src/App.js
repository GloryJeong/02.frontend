import "./App.css";
import { useEffect, useRef, useState } from "react";
// import Image from "./Image";
function Image({ src }) {
  return <img className='img' src={src} alt=''></img>;
}

function App() {
  const imgRef = useRef(null);
  const [imgList, setImgList] = useState([]);
  return (
    <div className='container'>
      <div className='main'>
        <div
          className='add-btn'
          onClick={() => {
            imgRef.current.click();
          }}
        >
          +
        </div>
        <input
          className='file-upload-input'
          type='file'
          ref={imgRef}
          onChange={(event) => {
            // const value = event.currentTarget.value;
            // setImgList((previousValue) => {
            //   return [...previousValue, value];
            // });
            const file = event.currentTarget.files[0];
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onloadend = (e) => {
              const value = e.currentTarget.result;

              setImgList((previousValue) => {
                return [...previousValue, value];
              });
            };
            event.currentTarget.value = null;
          }}
        />
        <div className='main-text'>Choose Image</div>
        <div className='gallery'>
          {imgList.map((img, idx) => (
            // <div className='img-item' key={img + idx}>
            //   <img src={img} alt={idx}></img>
            // </div>
            // console.log(img)
            <div>
              <Image key={img + idx} className='img-item' src={img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
