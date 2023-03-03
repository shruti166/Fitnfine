import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          errors: {},
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      onSubmit(e) {
        e.preventDefault();
        const user = {
          email: this.state.email,
          password: this.state.password,
        };
        console.log(user);
      }
  render() {
    return (
        <form >
        <div>
          <p className="lead display-6 text-center">Log In</p>
          <p className="lead text-center">
            Welcome back! Good to see you here
          </p>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-secondary col-12"
          onClick={this.onSubmit}
        >
          Submit
        </button>
      </form>
    )
  }
}