import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingAddress: "",
      shippingCode: "",
      shippingCity: "",
      shippingCountry: "",
      billingAddress: "",
      billingCode: "",
      billingCity: "",
      billingCountry: "",
      billingSame: false,
      errors: {
        shippingAddress: "",
        billingAddress: "",
      },
    };
  }
  handleInput = ({ target }) => {
    var { name, value } = target;
    console.log(name, value);
    var errors = this.state.errors;

    switch (name) {
      case "shippingAddress":
        errors.shippingAddress =
          value.length < 8 ? "address can't be less than 8 characters" : "";
        break;
      case "billingAddress":
        errors.billingAddress =
          value.length < 8 ? "address can't be less than 8 characters" : "";
        break;
      default:
        break;
    }

    this.setState({
      errors,
      [name]: value,
    });
  };
  render() {
    return (
      <div className="flex">
        <this.Form1 />
        <this.Form2 />
      </div>
    );
  }
  Form1 = () => {
    var error = this.state.errors.shippingAddress;
    return (
      <div className="form">
        <h2>shipping address</h2>
        <form>
          <label htmlFor="address">address</label>
          <input
            type="text"
            name="shippingAddress"
            id="address"
            placeholder="enter address"
            className={error ? "redb form-control" : "form-control"}
            onChange={this.handleInput}
          ></input>
          <span className="red">{error}</span>
          <br></br>
          <label htmlFor="code">code</label>
          <input
            type="text"
            name="shippingCode"
            id="code"
            placeholder="enter code"
            className="form-control"
            onChange={this.handleInput}
          ></input>
          <label htmlFor="city">city</label>
          <input
            type="text"
            name="shippingCity"
            id="city"
            placeholder="enter city"
            className="form-control"
            onChange={this.handleInput}
          ></input>
          <label htmlFor="country">country</label>
          <input
            type="text"
            name="shippingCountry"
            id="country"
            placeholder="enter country"
            className="form-control"
            onChange={this.handleInput}
          ></input>
        </form>
      </div>
    );
  };
  Form2 = () => {
    var error = this.state.errors.billingAddress;
    return (
      <div className="form">
        <h2>billing address</h2>
        <form>
          <input
            type="checkbox"
            name="checkbox"
            onChange={() => {
              this.setState({
                billingSame: !this.state.billingSame,
                billingAddress: this.state.shippingAddress,
                billingCode: this.state.shippingCode,
                billingCity: this.state.shippingCity,
                billingCountry: this.state.shippingCountry,
              });
              if (this.state.billingSame) {
                this.setState({
                  billingAddress: "",
                  billingCode: "",
                  billingCity: "",
                  billingCountry: "",
                });
              }
            }}
            id="same"
          ></input>
          <label htmlFor="same">same as shipping address</label>
          <br></br>
          <label htmlFor="address">address</label>
          <input
            type="text"
            name="billingAddress"
            id="address"
            value={this.state.billingAddress}
            placeholder="enter address"
            className={error ? "redb form-control" : "form-control"}
            onChange={this.handleInput}
          ></input>
          <span className="red">{error}</span>
          <br></br>
          <label htmlFor="code">code</label>
          <input
            type="text"
            name="billingCode"
            id="code"
            value={this.state.billingCode}
            placeholder="enter code"
            className="form-control"
            onChange={this.handleInput}
          ></input>
          <label htmlFor="city">city</label>
          <input
            type="text"
            name="billingCity"
            id="city"
            value={this.state.billingCity}
            placeholder="enter city"
            className="form-control"
            onChange={this.handleInput}
          ></input>
          <label htmlFor="country">country</label>
          <input
            type="text"
            name="billingCountry"
            id="country"
            value={this.state.billingCountry}
            placeholder="enter country"
            className="form-control"
            onChange={this.handleInput}
          ></input>
        </form>
      </div>
    );
  };
}
export default App;
