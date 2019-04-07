import axios from 'axios';
import parser from 'fast-xml-parser'
import {FETCH_ARTICLES,
        FETCH_AUTHORS_PARTIAL,
        FETCH_AUTHORS_FULL,
        RESET_DATA,
        FETCH_MORE_ARTICLES
} from './types';
import{
    get_json_data,
    filterByDate,
    filterBy
} from '../utils/util'

// get article when the page loads
export const fetch_articles = () => async dispatch => {
    const res = await axios.get('http://export.arxiv.org/api/query?search_query=all:psychiatry+OR+all:therapy+OR+all:data+science+OR+all:machine+learning&start=0&max_results=10');
    var jsonObj = parser.parse(res.data);
    dispatch({type: FETCH_ARTICLES, payload: jsonObj.feed.entry});
};

// get more articles when the user press the button
export const fetch_more_articles = (article_number) => async dispatch => {
    const res = await axios.get(`http://export.arxiv.org/api/query?search_query=all:psychiatry+OR+all:therapy+OR+all:data+science+OR+all:machine+learning&start=${article_number}&max_results=10`);
    var jsonObj = parser.parse(res.data);
    dispatch({type: FETCH_MORE_ARTICLES, payload: jsonObj.feed.entry});
};

// get the articles of the specific user
// This function is actually wrong. I should've created the loop until it reaches 30days. 
// However, it took too much time to fetch the data if I create the loop since search articles by author name is not accurate.
// If the name of the author is K. rolling, it gives me every articles that have the authors name containing k.  
// So I just set the max request to 80 and make it one time. 
// I can correct this in the future! 
export const author_detail = (author,history) => async dispatch => {
    const res = await axios.get(`http://export.arxiv.org/api/query?search_query=au:${author}&sortBy=lastUpdatedDate&sortOrder=descending&max_results=80`); // This is not accurate.
    var jsonObj = parser.parse(res.data);
    var data = filterBy(jsonObj,author) // filter out the articles published over 30 days 
    history.push({
        pathname: '/author',
        state: { name: author, payload: data }
    })
};

// get authors and process them by the date 
export const fetch_authors = () => async dispatch => {
    var authors = {}
    // only few articles for psychiatry and therapy. 
    var startfrom1 = 0  // increments by 50
    var findpoint1 = false 
    while(findpoint1 === false){
        const endpoint = `http://export.arxiv.org/api/query?search_query=all:psychiatry+OR+all:therapy&sortBy=lastUpdatedDate&sortOrder=descending&start=${startfrom1}&max_results=50`
        var json_data1 = await get_json_data(endpoint); // get data and convert xml to json format
        var filteredData1 = filterByDate(json_data1,authors) // filter data by date
        authors = filteredData1[0] // update authors data 
        findpoint1 = filteredData1[1] // true if there was a article submitted more than 30days agao
        startfrom1 = startfrom1 + 50 
        dispatch({type: FETCH_AUTHORS_PARTIAL, payload: authors});
    }
   
    // tons of articles for data scinece and machine learing
    var startfrom2 = 0 // increments by 2000
    var findpoint2 = false
    while(findpoint2 === false){
        const endpoint2 = `http://export.arxiv.org/api/query?search_query=all:data+science+OR+all:machine+learning&sortBy=lastUpdatedDate&sortOrder=descending&start=${startfrom2}&max_results=2000`
        var json_data2 = await get_json_data(endpoint2) // get data and convert xml to json format
        var filteredData2 = filterByDate(json_data2,authors) // filter data by date
        authors = filteredData2[0] // update authors data 
        findpoint2 = filteredData2[1] // true if there was a article submitted more than 30days agao
        startfrom2 = startfrom2 + 2000
        dispatch({type: FETCH_AUTHORS_PARTIAL, payload: authors});
    }   
    dispatch({type: FETCH_AUTHORS_FULL, payload: authors});
};

// reset redux store when the user refresh the page or exit the browser
export const reset_data = () => dispatch => {
    dispatch({type: RESET_DATA});
}

