import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Button } from './components/shared/button';
import { BUTTON_TYPE } from './components/shared/button/types';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Button type={BUTTON_TYPE.PRIMARY} text='Emanuel es marico' onClick={() => console.log(1)} />
        <Button type={BUTTON_TYPE.WHITE} text='Neptaly tambien es marico' onClick={() => console.log(1)} />
      </div>
    </Provider>
  );
}

export default App;
