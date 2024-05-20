import React from 'react';
import Header from './components/Header/Header' 
import './App.scss';
import Playground from './components/Playground/Playground';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Playground />
      </main>
    </div>
  );
}

export default App;
