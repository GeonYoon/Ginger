import axios from 'axios';
import {FETCH_ARTICLES,
} from './types';

export const fetch_articles = () => async dispatch => {
    console.log("fetch articles")
    // const res = await axios.get('/api/messages');
    // dispatch({type: FETCH_ARTICLES, payload: res.data});
};

