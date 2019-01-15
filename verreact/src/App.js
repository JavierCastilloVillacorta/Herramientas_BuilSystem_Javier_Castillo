import React, { Component } from 'react';
import './App.css';
import Content from './components/Content'
import PropTypes from 'prop-types';


class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const {children } = this.props;
    return (
        <Content body={children} />
    );
  }
}

export default App;
