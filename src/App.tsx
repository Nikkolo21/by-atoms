import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Button } from './components/shared/button';
import { Input } from './components/shared/input';
import { TYPES } from './components/shared/types';
import { Header } from './components/shared/header';
import { Wrapper } from './components/shared/wrapper';
import { Link } from './components/shared/link';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Header>
        <Wrapper display='grid' placeItems='center'>
          <Link onClick={() => console.log('icon clicked')} type='primary'>Icon</Link>
        </Wrapper>
        <Wrapper display='flex' justifyContent='center'>
          Options
        </Wrapper>
      </Header>
      <div className="App">
        <Button type={TYPES.PRIMARY} text='Emanuel es marico' onClick={() => console.log(1)} />
        <Button type={TYPES.WHITE} text='Neptaly tambien es marico' onClick={() => console.log(2)} />
        <Input onChange={() => console.log(3)} />
      </div>
    </Provider>
  );
}

export default App;
