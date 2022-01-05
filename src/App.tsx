import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Button } from './components/shared/button';
import { Input } from './components/shared/input';
import { TYPES } from './components/shared/types';
import { Header } from './components/shared/header';
import { Wrapper } from './components/shared/wrapper';
import { Modal } from './components/shared/modal';
import { default as logo } from './assets/logo.svg';
import './App.css';
import './styles/output.css';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Provider store={store}>
      <Header>
        <Wrapper display='grid' placeItems='center'>
          <Wrapper height='80px'><img src={logo}/></Wrapper>
        </Wrapper>
        <Wrapper display='flex' justifyContent='center'>
          <Button width='150px' type={TYPES.PRIMARY} text='Options' onClick={() => console.log(1)} />
        </Wrapper>
      </Header>
      <div className="App">
        <Button type={TYPES.WHITE} text='Neptaly tambien es marico' onClick={() => console.log(2)} />
        <Input onChange={() => console.log(3)} />
        <Modal open={openModal} closeModal={() => setOpenModal(false)} content={<div style={{height: '400px'}}>modal content</div>}>
          <Button type={TYPES.PRIMARY} text='Open modal' onClick={() => setOpenModal(true)} />
        </Modal>
      </div>
    </Provider>
  );
}

export default App;
