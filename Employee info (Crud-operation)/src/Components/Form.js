import React, { Component } from "react";
import Title from "./Title";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {},
    };
  }

  edit = (data) => {
    console.log(data);
    this.setState({
      inputs: {
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        contact: data.contact,
        salary: data.salary,
        gender: data.gender,
      },
    });
  };

  onChange = (event, name) => {
    this.setState({
      inputs: { ...this.state.inputs, [name]: event.target.value },
    });
  };

  sumbimHandler = (event) => {
    event.preventDefault();
    this.props.formSubmit(this.state.inputs, this.reset);
  };

  reset = () => {
    this.setState({
      inputs: {
        fname: "",
        lname: "",
        email: "",
        contact: "",
        salary: "",
        gender: "",
      },
    });
  };

  render() {
    return (
      <div className="form-container position-relative col-4 col-xxl-3 p-4 rounded-3">
        <form action="GET" onSubmit={this.sumbimHandler}>
          <Title title="Add employee" />
          <div className="mt-4 d-flex ">
            <div className="me-3 flex-grow-1">
              <label className=" lable text-white " htmlFor="fname">
                First name
              </label>
              <input
                className="input-text form-control "
                type="text"
                id="fname"
                name="fname"
                required
                value={this.state.inputs.fname}
                onChange={(event) => {
                  this.onChange(event, "fname");
                }}
              />
            </div>
            <div className="flex-grow-1">
              <label className=" lable text-white " htmlFor="lname">
                Last name
              </label>
              <input
                className="input-text form-control "
                type="text"
                id="lname"
                name="lname"
                required
                value={this.state.inputs.lname}
                onChange={(event) => {
                  this.onChange(event, "lname");
                }}
              />
            </div>
          </div>
          <div className="mt-3">
            <label className=" lable text-white " htmlFor="email">
              Email
            </label>
            <input
              className="input-text form-control "
              type="email"
              id="email"
              name="email"
              required
              value={this.state.inputs.email}
              required
              onChange={(event) => {
                this.onChange(event, "email");
                this.props.emailValidation(event.target.value);
              }}
            />
          </div>
          <div className="mt-3">
            <label className=" lable text-white " htmlFor="contact">
              Contact No.
            </label>
            <input
              className=" input-text form-control "
              type="text"
              id="contact"
              name="contact"
              required
              value={this.state.inputs.contact}
              onChange={(event) => {
                this.onChange(event, "contact");
                this.props.cantactValidation(event.target.value);
              }}
            />
          </div>
          <div className="mt-3 d-flex ">
            <div className="me-3  flex-grow-1">
              <label className=" lable text-white " htmlFor="salary">
                Salary
              </label>
              <input
                className="input-text form-control "
                type="text"
                id="salary"
                name="salary"
                required
                value={this.state.inputs.salary}
                onChange={(event) => {
                  this.onChange(event, "salary");
                }}
              />
            </div>
            <div className="flex-grow-1">
              <label className=" lable text-white " htmlFor="lname">
                Gender
              </label>
              <div className="border border-1 border-white rounded p-1 px-2 d-flex ">
                <input
                  className="form-check-input me-2 border-white"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={(event) => {
                    this.onChange(event, "gender");
                  }}
                  required
                />
                <label className="lable text-white me-2" htmlFor="male">
                  Male
                </label>
                <input
                  className="form-check-input me-2 text-white border-white"
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={(event) => {
                    this.onChange(event, "gender");
                  }}
                  required
                />
                <label className="lable text-white " htmlFor="female">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="mt-4 text-end">
            <button type="submit" className="btn btn-light px-5 fw-bold">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
