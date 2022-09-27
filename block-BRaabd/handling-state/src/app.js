import cricket from "./assets/cricket.jpg";
import basketball from "./assets/basketball.jpg";
import laptop from "./assets/laptop.jpg";
import phone from "./assets/phone.jpg";
import pubg from "./assets/pubg.jpeg";
import tiger from "./assets/tiger.jpg";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
    };
  }
  handleChange = (id) => {
    this.setState({
      display: id,
    });
  };
  render() {
    return (
      <>
        <div className="flex">
          <button
            id={tiger}
            onClick={(event) => {
              this.handleChange(event.target.id);
            }}
          >
            tiger
          </button>
          <button
            id={laptop}
            onClick={(event) => {
              this.handleChange(event.target.id);
            }}
          >
            laptop
          </button>
          <button
            id={basketball}
            onClick={(event) => {
              this.handleChange(event.target.id);
            }}
          >
            basketball
          </button>
          <button
            id={cricket}
            onClick={(event) => {
              this.handleChange(event.target.id);
            }}
          >
            cricket
          </button>
          <button
            id={phone}
            onClick={(event) => {
              this.handleChange(event.target.id);
            }}
          >
            phone
          </button>
          <button
            id={pubg}
            onClick={(event) => {
              this.handleChange(event.target.id);
            }}
          >
            pubg
          </button>
        </div>
        <div className="displayUI">
          <img src={this.state.display} alt={this.state.display}></img>
        </div>
      </>
    );
  }
}
export default App;
