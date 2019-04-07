import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {author_detail} from '../../actions';
import ArticleDetail from '../../components/Article/ArticleDetail';


class ArticleDetailContainer extends Component {
    
    render() {
      const {author_detail} = this.props
      return (
          <ArticleDetail 
            {...this.props.location.state}
            author_detail = {author_detail}
          />
      );
    }
}

const mapDispatchToProps = (dispatch,ownProps) => ({
  author_detail: (author) => {
    dispatch(author_detail(author,ownProps.history));
  }
});

export default withRouter(connect(null,mapDispatchToProps)(ArticleDetailContainer));
