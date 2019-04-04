import { handleActions } from 'redux-actions';
import {
  FETCH_ARTICLES
} from '../actions/types';

const InitialState = {
    articles : []
}

export default handleActions({
  [FETCH_ARTICLES] : (state, action) => {
      return {
        articles: action.payload
      }
  }
}, InitialState)