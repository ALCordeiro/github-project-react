import { createStore } from 'redux';
import reducer from '../Reducers/userReducer';

export const Store = createStore(reducer);