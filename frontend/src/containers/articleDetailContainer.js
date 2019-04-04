import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import {} from '../actions';
import ArticleDetail from '../components/ArticleDetail';


class ArticleDetailContainer extends Component {
    
    render() {
      return (
          <ArticleDetail 
            {...this.props.location.state}
          />
      );
    }
}

// const mapStateToProps = ({articles}) => {
//   return {
//   }
// };

// const mapDispatchToProps = (dispatch) => ({
// });

export default withRouter(connect(null,null)(ArticleDetailContainer));
