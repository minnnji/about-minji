import React, { useState } from 'react';
import ForceChart from './ForceChart';
import { createGlobalStyle } from 'styled-components';
import Modal from './Modal';

function App() {
  const initialModal = {
    title: '',
    content: '',
    isDisplay: false
  };

  const [modal, setModal] = useState(initialModal);
  return (
    <div>
      <GlobalStyle />
      <ForceChart setModal={setModal}/>
      <Modal
        modal={modal}
        initialModal={initialModal}
        setModal={setModal}/>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
    margin: 0;
    background-color: #30303d; color: #fff;
	}
`;

export default App;
