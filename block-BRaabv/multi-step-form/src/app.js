import React from "react";

class App extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    date: "",
    address: "",
    email: "",
    step: 1,
    message: "",
    choice: "",
    optioncheckbox: "",
    option: "",
  };
  handleInput = ({ target }) => {
    var { name, value } = target;
    console.log(name, value);

    this.setState({
      [name]: value,
    });
  };
  Step1 = () => {
    return (
      <div className="step flex step1">
        <div className="image">
          <img src="/image1.jpeg" alt="image1"></img>
        </div>
        <div className="form">
          <div className="flex align-items-center indexes">
            <div className="active square">1</div>
            <span>Sign Up</span>
            <div className="square">2</div>
            <span>Message</span>
            <div className="square">3</div>
            <span>checkbox</span>
          </div>
          <hr></hr>
          <span className="stepnum">step 1/3</span>
          <h2>Sign Up</h2>
          <form>
            <div className="flex">
              <div className="width-200 margin-right">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  id="firstname"
                  name="firstname"
                  className="form-control"
                  onChange={this.handleInput}
                ></input>
              </div>
              <div className="width-200">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  id="lastname"
                  name="lastname"
                  className="form-control"
                  onChange={this.handleInput}
                ></input>
              </div>
            </div>
            <div className="flex">
              <div className="width-200 margin-right">
                <label htmlFor="date">Date Of birth</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-control"
                  onChange={this.handleInput}
                ></input>
              </div>
              <div className="width-200">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  id="email"
                  name="email"
                  className="form-control"
                  onChange={this.handleInput}
                ></input>
              </div>
            </div>
            <div className="">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                placeholder="Enter address"
                id="address"
                name="address"
                className="form-control"
                onChange={this.handleInput}
              ></input>
            </div>
            <hr></hr>
          </form>
          <button
            onClick={() => {
              this.setState({
                step: 2,
              });
            }}
            className="btn"
          >
            Next Step
          </button>
        </div>
      </div>
    );
  };
  Step2 = () => {
    return (
      <div className="step flex step1">
        <div className="image">
          <img src="/image1.jpeg" alt="image1"></img>
        </div>
        <div className="form">
          <div className="flex align-items-center indexes">
            <div className="square">1</div>
            <span>Sign Up</span>
            <div className="active square">2</div>
            <span>Message</span>
            <div className="square">3</div>
            <span>checkbox</span>
          </div>
          <hr></hr>
          <span className="stepnum">step 2/3</span>
          <h2>Message</h2>
          <form>
            <label htmlFor="message">Message</label>
            <textarea
              onChange={this.handleInput}
              className="form-control"
              id="message"
              name="message"
              rows="5"
            ></textarea>
            <div className="flex">
              <input
                name="choice"
                onChange={this.handleInput}
                id="choice1"
                value="the number one choice"
                type="radio"
              ></input>
              <label htmlFor="choice1">the number one choice</label>
              <input
                name="choice"
                onChange={this.handleInput}
                id="choice2"
                value="the number two choice"
                type="radio"
              ></input>
              <label htmlFor="choice2">the number two choice</label>
            </div>
            <hr></hr>
            <div className="flex float-right">
              <button
                onClick={() => {
                  this.setState({
                    step: 1,
                  });
                }}
                className="btnback"
              >
                Back
              </button>
              <button
                onClick={() => {
                  this.setState({
                    step: 3,
                  });
                }}
                className="btn"
              >
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  Step3 = () => {
    return (
      <div className="step flex step1">
        <div className="image">
          <img src="/image1.jpeg" alt="image1"></img>
        </div>
        <div className="form">
          <div className="flex align-items-center indexes">
            <div className="square">1</div>
            <span>Sign Up</span>
            <div className="square">2</div>
            <span>Message</span>
            <div className="active square">3</div>
            <span>checkbox</span>
          </div>
          <hr></hr>
          <span className="stepnum">step 3/3</span>
          <h2>Checkbox</h2>
          <form>
            <div className="flex">
              <input
                name="optioncheckbox"
                onChange={this.handleInput}
                value="boy"
                type="radio"
                className="displaynone"
                id="boy"
              ></input>
              <label className="boy" htmlFor="boy">
                <img src="/boy.png" alt="boy"></img>
              </label>
              <input
                name="optioncheckbox"
                onChange={this.handleInput}
                value="girl"
                type="radio"
                className="displaynone"
                id="girl"
              ></input>
              <label className="girl" htmlFor="girl">
                <img src="/girl.webp" alt="girl"></img>
              </label>
            </div>
            <div className="flex margin-1 align-center">
              <input
                value="I want to add this option"
                type="radio"
                onChange={this.handleInput}
                name="option"
                id="option1"
              ></input>
              <label id="option1" htmlFor="option1">
                I want to add this option
              </label>
            </div>
            <div className="flex margin-1 align-center">
              <input
                value="Let me click on this checkbox and checkout some cool stuff"
                type="radio"
                onChange={this.handleInput}
                name="option"
                id="option2"
              ></input>
              <label htmlFor="option2">
                Let me click on this checkbox and checkout some cool stuff
              </label>
            </div>
          </form>
          <hr></hr>
          <div className="flex float-right">
            <button
              onClick={() => {
                this.setState({
                  step: 2,
                });
              }}
              className="btnback"
            >
              Back
            </button>
            <button
              onClick={() => {
                this.setState({
                  step: 3,
                });
              }}
              className="btn"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };
  render() {
    if (this.state.step === 2) {
      return <this.Step2 />;
    } else if (this.state.step === 3) {
      return <this.Step3 />;
    } else {
      return <this.Step1 />;
    }
  }
}
export default App;
