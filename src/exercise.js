import React from 'react';
import ReactDOM from 'react-dom';

class Exercise extends React.Component {
  render() {
    return <h2>{this.props.type} workouts:</h2>
  }
}

export default Exercise;