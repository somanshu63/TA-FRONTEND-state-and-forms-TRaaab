import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxValue: Infinity,
      counter: 0,
      step: 1,
    };
  }
  handleIncrement = () => {
    this.setState({
      counter:
        this.state.counter < this.state.maxValue - this.state.step
          ? this.state.counter + this.state.step
          : this.state.counter,
    });
  };
  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - this.state.step,
    });
  };
  handleReset = () => {
    this.setState({
      counter: 0,
    });
  };
  handleStep = (value) => {
    this.setState({
      step: value,
    });
  };
  handleMax = (value) => {
    this.setState({
      maxValue: value,
    });
  };
  render() {
    return (
      <>
        <div>
          <h2 className="text-center">{this.state.counter}</h2>
        </div>
        <div className="flex align-center">
          <div className="step">
            <h3 className="text-center">Steps</h3>
            <div className="flex">
              <button
                id="5"
                className="sqr-btn"
                onClick={(event) => {
                  this.handleStep(+event.target.id);
                }}
              >
                5
              </button>
              <button
                id="10"
                className="sqr-btn"
                onClick={(event) => {
                  this.handleStep(+event.target.id);
                }}
              >
                10
              </button>
              <button
                id="15"
                className="sqr-btn"
                onClick={(event) => {
                  this.handleStep(+event.target.id);
                }}
              >
                15
              </button>
            </div>
          </div>
          <div className="max">
            <h3 className="text-center">Max Value</h3>
            <div className="flex">
              <button
                id="200"
                className="sqr-btn"
                onClick={(event) => {
                  this.handleMax(+event.target.id);
                }}
              >
                200
              </button>
              <button
                id="50"
                className="sqr-btn"
                onClick={(event) => {
                  this.handleMax(+event.target.id);
                }}
              >
                50
              </button>
              <button
                id="1000"
                className="sqr-btn"
                onClick={(event) => {
                  this.handleMax(+event.target.id);
                }}
              >
                1000
              </button>
            </div>
          </div>
        </div>
        <div className="flex align-center">
          <button className="rect-btn" onClick={this.handleIncrement}>
            Increment
          </button>
          <button className="rect-btn" onClick={this.handleDecrement}>
            Decrement
          </button>
          <button className="rect-btn" onClick={this.handleReset}>
            Reset
          </button>
        </div>
      </>
    );
  }
}

export default App;
