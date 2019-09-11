import React from 'react';
import Aux from '../HOC/aux';
import MainRouter from './main';

import './App.css';

class App extends React.Component{

  render(){
    return (
      <Aux>
        <MainRouter/>
      </Aux>
    )
  }
 
}

export default App;
