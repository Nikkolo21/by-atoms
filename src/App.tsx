import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';
import { Button } from './components/shared/button';
import { BUTTON_TYPE } from './components/shared/button/types';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Button type={BUTTON_TYPE.PRIMARY} size='xl' text='asdsa' onClick={() => console.log(1)} />
      </div>
    </Provider>
  );
}

export default App;
