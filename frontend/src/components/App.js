import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import ArticleListContainer from '../containers/Article/articleListContainer'
import ArticleDetailContainer from '../containers/Article/articleDetailContainer'
import AuthorDetailContainer from '../containers/Author/authorDetailContainer'
import AuthorListContainer from '../containers/Author/authorListContainer'
import Header from './Header';

import {fetch_authors,fetch_articles,reset_data} from '../actions';

class App extends Component {

    componentDidMount(){
        if(this.props.authors === undefined){ // prevent unnecessary fetching
          this.props.fetch_authors()
        }
        if(this.props.articles === undefined){ // prevent unnecessary fetching
            this.props.fetch_articles()
        }

        window.addEventListener("beforeunload", (ev) => { // reset redux store when the user exists or refresh the tab
            ev.preventDefault();
            this.props.reset_data()
            return ev.returnValue = 'Are you sure you want to close?';
        });
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <div className="container">
                        <Route exact path="/" component={ArticleListContainer} />
                        <Route exact path="/article" component={ArticleDetailContainer} />
                        <Route exact path="/author" component={AuthorDetailContainer} />
                        <Route exact path="/authorlist" component={AuthorListContainer} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
    
const mapStateToProps = ({articles}) => {
    return {
      authors : articles.authors,
      articles : articles.articles
    }
  };
  
  const mapDispatchToProps = (dispatch,ownProps) => ({
    fetch_authors: () => {
        dispatch(fetch_authors());
    },
    fetch_articles: () => {
        dispatch(fetch_articles());
    },
    reset_data: () => {
        dispatch(reset_data());
    }
  });
  export default (connect(mapStateToProps,mapDispatchToProps)(App));
  