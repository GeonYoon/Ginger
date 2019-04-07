import { handleActions } from 'redux-actions';
import{ sortProperties} from '../utils/util'
import {
  FETCH_ARTICLES,
  FETCH_MORE_ARTICLES,
  FETCH_AUTHORS_PARTIAL,
  FETCH_AUTHORS_FULL,
  RESET_DATA
} from '../actions/types';

const InitialState = {
    articles : undefined,
    article_number: 0,
    authors: undefined,
    full_authors: [],
    status: false,
    number_of_authors: 0,
}

export default handleActions({
  [FETCH_ARTICLES] : (state, action) => {
      return {
        ...state,
        article_number : 10,
        articles: action.payload
      }
  },
  [FETCH_MORE_ARTICLES] : (state, action) => {
    return {
      ...state,
      article_number : state.article_number + 10,
      articles: state.articles.concat(action.payload)
    }
  },
  [FETCH_AUTHORS_PARTIAL] : (state, action) => {
    const recieved_authors = sortProperties(action.payload)
    return {
      ...state,
      authors: recieved_authors.slice(0, 50),
      number_of_authors: state.number_of_authors + recieved_authors.length
    }
  },
 [FETCH_AUTHORS_FULL] : (state, action) => {
  const recieved_full_authors = sortProperties(action.payload)
  return {
    ...state,
    authors: recieved_full_authors.slice(0, 50),
    full_authors: recieved_full_authors,
    number_of_authors: recieved_full_authors.length,
    status: true,
  }
 },
 [RESET_DATA] : (state, action) => {
  return {
    articles : undefined,
    authors: undefined,
    full_authors: [],
    status: false,
    number_of_authors: 0
  }
},
}, InitialState)