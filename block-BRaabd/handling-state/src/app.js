import cricket from "./assets/cricket.jpg";
import basketball from "./assets/basketball.jpg";
import laptop from "./assets/laptop.jpg";
import phone from "./assets/phone.jpg";
import pubg from "./assets/pubg.jpeg";
import tiger from "./assets/tiger.jpg";
import React from "react";

var images = [cricket, basketball, laptop, phone, pubg, tiger];
var imagesNames = ["cricket", "basketball", "laptop", "phone", "pubg", "tiger"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: tiger,
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
          {images.map((image, i) => {
            return (
              <button
                id={image}
                onClick={(event) => {
                  this.handleChange(event.target.id);
                }}
              >
                {imagesNames[i]}
              </button>
            );
          })}
        </div>
        <div className="displayUI">
          <img src={this.state.display} alt={this.state.display}></img>
        </div>
      </>
    );
  }
}
export default App;
