import React, { Component } from 'react';
import Header from './header/Header';
import Main from './main/Main';

import { connect } from 'react-redux';
import authOperations from '../redux/operations/authOperations';

class App extends Component {
  componentDidMount() {
    console.log('componentDidMount:', this.props.onGetCurrentUser());
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
