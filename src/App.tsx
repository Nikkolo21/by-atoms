import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Button } from './components/shared/button';
import { Input } from './components/shared/input';
import { TYPES } from './components/shared/types';
import { Header } from './components/shared/header';
import { Wrapper } from './components/shared/wrapper';
import { Link } from './components/shared/link';
import { Modal } from './components/shared/modal';
import './App.css';
import './styles/output.css';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Provider store={store}>
      <Header>
        <Wrapper display='grid' placeItems='center'>
          <Link onClick={() => console.log('icon clicked')} type='primary'>Icon</Link>
        </Wrapper>
        <Wrapper display='flex' justifyContent='center'>
          <Button type={TYPES.PRIMARY} size='xl' text='Options' onClick={() => console.log(1)} />
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
