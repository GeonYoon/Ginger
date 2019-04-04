import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import {} from '../actions';
import Landing from '../components/Landing';


class LandingContainer extends Component {
  componentDidMount(){
      this.props.fetch_articles()
  }

    render() {
    //   const {} = this.props
      return (
          <Landing>
          </Landing>
      );
    }
}

// const mapStateToProps = ({articles}) => {
// };

const mapDispatchToProps = (dispatch) => ({
  
});

export default withRouter(connect(null,null)(LandingContainer));
