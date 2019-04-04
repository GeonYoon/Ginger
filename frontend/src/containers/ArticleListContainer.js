import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetch_articles} from '../actions';
import ArticleList from '../components/ArticleList';


class ArticleListContainer extends Component {
  componentDidMount(){
      this.props.fetch_articles()
  }
    render() {
      const {articles} = this.props
      return (
          <ArticleList articles={articles} />
      );
    }
}

const mapStateToProps = ({articles}) => {
  return {
    articles : articles.articles,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetch_articles: () => {
    dispatch(fetch_articles());
  }
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ArticleListContainer));
