import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      confirmpassword: "",
      errors: {
        username: "",
        password: "",
        email: "",
        confirmpassword: "",
      },
    };
  }
  validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
  };
  handleInput = ({ target }) => {
    var { name, value } = target;
    let errors = this.state.errors;
    switch (name) {
      case "email":
        errors.email = this.validateEmail(value) ? "" : "email not valid";
        break;
      case "password":
        errors.password =
          value.length < 6 ? "password can't be less than 6 characters" : "";
        break;
      case "confirmpassword":
        errors.confirmpassword =
          value !== this.state.password ? "password do not match" : "";
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
    return [<this.Form />, <this.Form2 />];
  }
  Form = (props) => {
    return (
      <div className="form">
        <h2>form1</h2>
        <form>
          <label htmlFor="name">Text Input</label>
          <input
            type="text"
            placeholder="enter name"
            className="form-control"
          ></input>
          <label htmlFor="">Date Input</label>
          <input
            type="date"
            placeholder="enter date"
            className="form-control"
          ></input>
          <label htmlFor="">File Input</label>
          <input type="file" className="form-control"></input>
          <label htmlFor="">Read Only Input</label>
          <input
            type="text"
            value="read only text"
            className="form-control"
            readOnly
          ></input>
          <label htmlFor="">Disabled Input</label>
          <input
            type="text"
            placeholder="disabled"
            className="disabled form-control"
            disabled
          ></input>
          <label htmlFor="">Textarea</label>
          <textarea
            placeholder="enter summary"
            className="form-control"
          ></textarea>
          <label htmlFor="">Disabled Textarea</label>
          <textarea
            placeholder="disabled textarea"
            className="disabled form-control"
            disabled
          ></textarea>
        </form>
      </div>
    );
  };

  Form2 = (props) => {
    var { email, password, confirmpassword } = this.state.errors;
    return (
      <div className="form">
        <h2>form2</h2>
        <form>
          <label htmlFor="name">Username Input</label>
          <input
            type="text"
            placeholder="enter username"
            className="form-control"
          ></input>
          <label htmlFor="">Email Input</label>
          <input
            type="email"
            name="email"
            onChange={this.handleInput}
            placeholder="enter email"
            className={email ? "redb form-control" : "form-control"}
          ></input>
          <span className="red">{email}</span>
          <label htmlFor="">password Input</label>
          <input
            type="password"
            name="password"
            onChange={this.handleInput}
            placeholder="enter password"
            className={password ? "redb form-control" : "form-control"}
          ></input>
          <span className="red">{password}</span>
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            onChange={this.handleInput}
            placeholder="enter password again"
            className={confirmpassword ? "redb form-control" : "form-control"}
          ></input>
          <span className="red">{confirmpassword}</span>
        </form>
      </div>
    );
  };
}

export default App;
