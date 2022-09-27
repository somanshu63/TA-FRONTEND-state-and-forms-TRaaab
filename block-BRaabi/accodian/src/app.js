import React from "react";
import questions from "./data";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
    };
  }
  handleAnswer(id) {
    this.setState({
      active: this.state.active === id ? null : id,
    });
  }
  render() {
    return (
      <div className="accordian">
        <div className="closed">
          <div className="closed-state">closed state</div>
          <ul>
            {questions.map((a) => {
              return (
                <li className="qlist">
                  {a.Q}
                  <i className="fa-solid fa-hand-point-down"></i>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="open">
          <div className="closed-state">open state</div>
          <ul>
            {questions.map((a, i) => {
              return (
                <>
                  <li
                    id={i}
                    onClick={(event) => {
                      this.handleAnswer(+event.target.id);
                    }}
                    className={
                      this.state.active === i ? "activecolor qlist" : "qlist"
                    }
                  >
                    {a.Q}
                    <i
                      id={i}
                      className={
                        this.state.active === i
                          ? "fa-solid fa-hand-point-up"
                          : "fa-solid fa-hand-point-down"
                      }
                    ></i>
                  </li>
                  <p
                    id={i}
                    className={
                      this.state.active === i ? "active answer" : "answer"
                    }
                  >
                    {a.A}
                  </p>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
