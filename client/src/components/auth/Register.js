
import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";



 class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.registerUser(newUser);
    
  }
  render() {

    const { user } = this.props.auth;

    return (
      <form onSubmit={this.onSubmit}>
       
        <div>
        {user ? user.name : null}
          <p className="lead display-6 text-center">Sign Up</p>
          <p className="lead text-center">
            Create your own account & join our community
          </p>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
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
    );
  }
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(Register)
