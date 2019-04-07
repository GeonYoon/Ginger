import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {author_detail} from '../../actions';
import AuthorList from '../../components/Author/AuthorList';


class authorListContainer extends Component {
    render() {
      const {authors,status,number_of_authors,author_detail} = this.props
      return (
          <AuthorList 
            authors={authors}
            status={status}
            number_of_authors={number_of_authors}
            author_detail={author_detail}
          />
      );
    }
}

const mapStateToProps = ({articles}) => {
  return {
    authors : articles.authors,
    full_authors: articles.full_authors,
    status: articles.status,
    number_of_authors: articles.number_of_authors
  }
};

const mapDispatchToProps = (dispatch,ownProps) => ({
  author_detail: (author) => {
    dispatch(author_detail(author,ownProps.history));
  }
});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(authorListContainer));
