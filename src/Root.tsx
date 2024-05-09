
import App from './components/App';
import React from 'react';
import { Provider } from 'react-redux';
import store from './scripts/store';

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;