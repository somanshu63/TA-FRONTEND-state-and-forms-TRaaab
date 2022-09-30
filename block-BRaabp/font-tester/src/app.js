import React from "react";
var fonts = [
  "alkalami",
  "fraunces",
  "interTight",
  "lato",
  "poppins",
  "nunito",
  "pottaOne",
  "roboto",
  "sourceSansPro",
  "yuseiMagic",
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 50,
      text: "",
    };
  }
  render() {
    return (
      <div className="">
        <h1>fonts tester</h1>
        <div className="data align-center justify-center flex">
          <input
            onChange={(event) => {
              this.setState({
                text: event.target.value,
              });
            }}
            type="text"
            id="text"
            placeholder="enter text"
          ></input>
          <input
            id="slider"
            onChange={(event) => {
              this.setState({
                fontSize: event.target.value,
              });
            }}
            type="range"
          />
          <span>{this.state.fontSize} px</span>
        </div>
        <div className="fonts-list flex">
          {fonts.map((font) => {
            return (
              <div className={font} id="font">
                <h3 className="roboto">{font}</h3>
                <hr></hr>
                <p style={{ fontSize: `${this.state.fontSize}px` }}>
                  {this.state.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
