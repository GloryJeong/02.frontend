import "./modal.css";
function Modal({ previewURL, setModalOpen }) {
  console.log(previewURL);
  return (
    <div className='modalBackground'>
      <img
        className='modal'
        src={previewURL}
        onClick={() => {
          setModalOpen(false);
        }}
      />
    </div>
  );
}
export default Modal;
