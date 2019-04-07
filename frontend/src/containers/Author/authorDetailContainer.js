import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthorDetail from '../../components/Author/AuthorDetail';


class AuthorDetailContainer extends Component {
    
    render() {
      return (
          <AuthorDetail
              {...this.props.location.state}
          />
      );
    }
}

export default withRouter(connect(null,null)(AuthorDetailContainer));
