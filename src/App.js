import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from '../src/component/form'
import {Provider} from 'react-redux'
import {store} from '../src/store/store'
import Other from '../src/component/other'
function App() {
  return (
    
      <Provider store={store}> <Form/> <Other/> </Provider>
      
    
  );
}

export default App;
