import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetch_articles,fetch_more_articles} from '../../actions';
import ArticleList from '../../components/Article/ArticleList';


class ArticleListContainer extends Component {
    render() {
      const {articles,fetch_more_articles,article_number} = this.props
      return (
          <ArticleList articles={articles} 
                      article_number = {article_number}
                       fetch_more_articles={fetch_more_articles}
          />
      );
    }
}

const mapStateToProps = ({articles}) => {
  return {
    articles : articles.articles,
    article_number: articles.article_number
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetch_articles: () => {
    dispatch(fetch_articles());
  },
  fetch_more_articles: (article_number) => {
    dispatch(fetch_more_articles(article_number));
  }
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ArticleListContainer));
