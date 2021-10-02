import { createStore } from 'redux';
import rootReducer from '../reducers/IndexReducer';
const store = createStore(rootReducer);

export default store;