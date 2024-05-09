import React from 'react';
import Header from './layout/Header/Header';
import '../styles/main.scss'

import Playground from './layout/Playground';

function App() {
  return (
    <div className="App">
      <Header />
      <Playground />
    </div>
  );
}

export default App;
