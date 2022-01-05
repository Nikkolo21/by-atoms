import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, Link } from "react-router-dom";
import { store } from './store';
import { Button } from './components/shared/button';
import { TYPES } from './components/shared/types';
import { Header } from './components/shared/header';
import { Wrapper } from './components/shared/wrapper';
import { Login } from './components/login';
import { default as logo } from './assets/logo.svg';
import './App.css';
import './styles/output.css';

function App() {
  return (
    <Provider store={store}>
      <Header>
        <Wrapper>
          <Link to="/">
            <Wrapper height='80px'>
              <img src={logo}/>
            </Wrapper>
          </Link>
        </Wrapper>
        <Wrapper display='flex' justifyContent='end'>
          <Link to='/login'>
            <Button width='150px' type={TYPES.PRIMARY} text='Login' />
          </Link>
        </Wrapper>
      </Header>
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Provider>
  );
}

export default App;
