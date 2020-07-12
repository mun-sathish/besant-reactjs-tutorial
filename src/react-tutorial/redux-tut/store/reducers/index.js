import { combineReducers } from 'redux';
import Reducer1 from './reducer1';
import Reducer2 from './reducer2';

export default combineReducers({
    reducer1: Reducer1,
    reducer2: Reducer2
});