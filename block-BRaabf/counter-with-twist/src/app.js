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
        this.state.counter <= this.state.maxValue - this.state.step
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
      step: 1,
      maxValue: Infinity,
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
              {[5, 10, 15].map((step) => {
                return (
                  <button
                    key={step}
                    id={step}
                    className={
                      this.state.step === step ? "active sqr-btn" : "sqr-btn"
                    }
                    onClick={(event) => {
                      this.handleStep(+event.target.id);
                    }}
                  >
                    {step}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="max">
            <h3 className="text-center">Max Value</h3>
            <div className="flex">
              {[15, 100, 200].map((max) => {
                return (
                  <button
                    key={max}
                    id={max}
                    className={
                      this.state.maxValue === max ? "active sqr-btn" : "sqr-btn"
                    }
                    onClick={(event) => {
                      this.handleMax(+event.target.id);
                    }}
                  >
                    {max}
                  </button>
                );
              })}
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
