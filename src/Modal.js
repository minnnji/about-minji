import React from 'react';
import styled from 'styled-components';

const Modal = ({ modal, initialModal, setModal }) => {
  return (
    <ModalWrapper isDisplay={modal.isDisplay}>
      <ModalOverlay onClick={() => setModal(initialModal)}/>
      <ModalContent>
        <ModalHeader>
          <Title>{modal.title}</Title>
          <Close onClick={() => setModal(initialModal)}>X</Close>
        </ModalHeader>
        <div>{modal.content}</div>
      </ModalContent>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  display: ${props => props.isDisplay ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #282929;
`;

const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
  position: relative;
  padding: 40px;
  top: 0px;
  width: 550px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  background-color: white;
  border-radius: 2px;
`;

const ModalHeader = styled.header`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: 700;
`;

const Close = styled.button`
  float: right;
  all: unset;
  border-radius: 5px;
  font-size: 25px;
  cursor: pointer;
`;

export default Modal;
