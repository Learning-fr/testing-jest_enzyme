import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      errors: false
    }
  }


  incrementCounter = (val) => {
    if (this.state.errors === true) {
      this.setState({
        errors: false
      })
    }
    this.setState({
      counter: this.state.counter + val
    })
  }

  /**
   * Decrement counter by val number
   * @param {int} val - Decrement factor for counter
   * @returns void
   */
  decrementCounter = (val) => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - val
      })
    } else {
      this.setState({
        errors: true
      })
    }
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">Current counter is: {this.state.counter}</h1>
        {this.state.errors && <h3 data-test="error-display">Error: counter cannot be below 0!</h3>}
        <button
          data-test="increment-button"
          onClick={() => this.incrementCounter(1)}
        >
          Increment counter
        </button>
        <button
          data-test="decrement-button"
          onClick={() => { this.decrementCounter(1) }}
        >
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;
