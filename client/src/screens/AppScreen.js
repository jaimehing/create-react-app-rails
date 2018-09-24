import React from "react";
import {connect} from 'react-redux';
import './AppScreen.css';

class App extends React.Component {
  render() {
    return (
      <div>Hello World</div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {};
};

export default connect(mapStateToProps)(App);
