import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";
import "./modal.css";

const Card = styled.div`
  margin-left: 8px;
  margin-bottom: 8px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 300px;
  padding: 8px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const ImageCard = ({ imgData, onClick }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { webformatURL, id, previewURL } = imgData;
  return (
    <Card
      onClick={() => {
        setModalOpen(!modalOpen);
      }}
    >
      <Img key={id} src={webformatURL}></Img>
    </Card>
  );
};

export default ImageCard;
