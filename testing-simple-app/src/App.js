import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">Current counter is: {this.state.counter}</h1>
        <button
          data-test="increment-button"
          onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}
        >
          Increment counter
        </button>
      </div>
    );
  }
}

export default App;
