import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Button } from './components/shared/button';
import { BUTTON_TYPE } from './components/shared/button/types';
import { Input } from './components/shared/input';
import './App.css';
import { SIZES } from './components/shared/types';
import { Header } from './components/shared/header';
import { Wrapper } from './components/shared/wrapper';

function App() {
  return (
    <Provider store={store}>
      <Header>
        <Wrapper display='grid' placeItems='center'>
          Icon
        </Wrapper>
        <Wrapper>
          Options
        </Wrapper>
      </Header>
      <div className="App">
        <Button type={BUTTON_TYPE.PRIMARY} text='Emanuel es marico' onClick={() => console.log(1)} />
        <Button type={BUTTON_TYPE.WHITE} text='Neptaly tambien es marico' onClick={() => console.log(2)} />
        <Input onChange={() => console.log(3)} />
      </div>
    </Provider>
  );
}

export default App;
