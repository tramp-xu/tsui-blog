import { createStore } from 'redux';
import rootReducer from './reducer/index';

export default function configureStore (initState = {}) {
  const store = createStore(rootReducer, initState);

  return store;
};
