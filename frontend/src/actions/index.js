import axios from 'axios';
import parser from 'fast-xml-parser'
import {FETCH_ARTICLES,
} from './types';

export const fetch_articles = () => async dispatch => {
    const res = await axios.get('http://export.arxiv.org/api/query?search_query=all:psychiatry+OR+all:therapy+OR+all:data+science+OR+all:machine+learning&sortBy=lastUpdatedDate&sortOrder=descending&max_results=20');
    var jsonObj = parser.parse(res.data);
    dispatch({type: FETCH_ARTICLES, payload: jsonObj.feed.entry});
};


