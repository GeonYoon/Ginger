import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import {} from '../actions';
import AuthorDetail from '../components/AuthorDetail';


class AuthorDetailContainer extends Component {
    
    render() {
    //   const {} = this.props
      return (
          <AuthorDetail>
          </AuthorDetail>
      );
    }
}

// const mapStateToProps = ({articles}) => {
//   return {
//   }
// };

// const mapDispatchToProps = (dispatch) => ({
// });

export default withRouter(connect(null,null)(AuthorDetailContainer));
