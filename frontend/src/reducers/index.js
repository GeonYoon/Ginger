import { combineReducers } from 'redux';
import articleReducers from './articleReducers'

export default combineReducers({
    articles : articleReducers
});


