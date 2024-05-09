import { createStore } from 'redux';
import gameReducer from './reducers/gameReducer.ts';

const store = createStore(gameReducer);

export default store;
