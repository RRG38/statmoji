import "./Auth.css";
import logo from '../../assets/statmoji-logo.png'

import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "../../redux/reducer";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMsg: "",
    };
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  handleChange(prop, val) {
    this.setState({
      [prop]: val,
    });
  }

  login() {
    const { email, password } = this.state;
    axios
      .post("/api/auth/login", this.state)
      .then((res) => {
        this.props.updateUser({ email, password });
        this.props.history.push("/main-menu");
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errorMsg: "Incorrect username or password!" });
      });
  }

  register() {
    const { email, password } = this.state;
    axios
      .post("/api/auth/register", this.state)
      .then((res) => {
        this.props.updateUser({ email, password });
        this.props.history.push("/main-menu");
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errorMsg: "Email already registered." });
      });
  }

  closeErrorMessage = () => {
    this.setState({
      errorMsg: false,
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className='auth-parent'>
        <header className='auth-header'>
          Statmoji.app
        </header>
        <section className='section-parent'>
          <img className='logo' src={logo} alt='Smiley face emoji' />
          <div> Statmoji is a web app where you can use emojis to help track your life stats. </div>
        </section>
        <div className='register-container'>
          Want a free account?
          {this.state.errorMsg && (
            <h3 className="auth-error-msg">
              {this.state.errorMsg}{" "}
              <span onClick={this.closeErrorMessage}>X</span>
            </h3>
          )}
          <input
            value={this.state.email} type='email' placeholder="Email"
            onChange={(e) => this.handleChange("email", e.target.value)}
          />
          <input
            value={this.state.password}
            type="password"
            placeholder="Password"
            onChange={(e) => this.handleChange("password", e.target.value)}
          />
          <div className="auth-button-container">
            <button className="dark-button" onClick={this.login}>
              {" "}
              Login{" "}
            </button>
            <button className="dark-button" onClick={this.register}>
              {" "}
              Register{" "}
            </button>
          </div>
        </div>
      </div>
      )
  }
}

export default connect(null, { updateUser })(Auth);




