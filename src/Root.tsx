
import App from './components/App';
import React from 'react';
import { createStore } from 'redux';
import { rootReducer } from './scripts/redux/reducers/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;