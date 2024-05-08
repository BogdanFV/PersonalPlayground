import React from 'react';
import Header from './layout/Header';
import '../styles/main.scss'

import Playground from './layout/Playground';

function App() {
  return (
    <div className="App">
      <Header />
      <body className="body">
        <Playground />
      </body>
    </div>
  );
}

export default App;
