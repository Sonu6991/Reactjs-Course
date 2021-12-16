import React, { Component } from "react";
import Title from "./Title";

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  sumbimHandler = (event) => {
    event.preventDefault();
    let inputs = {
      fname: event.target.fname.value,
      lname: event.target.lname.value,
      email: event.target.email.value,
      contact: event.target.contact.value,
      salary: event.target.salary.value,
      gender: event.target.gender.value,
    };

    this.props.formSubmit(inputs);
    event.target.reset();
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
                defaultValue={this.props.editEmployee.fname}
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
                defaultValue={this.props.editEmployee.lname}
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
              defaultValue={this.props.editEmployee.email}
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
              defaultValue={this.props.editEmployee.contact}
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
                defaultValue={this.props.editEmployee.salary}
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
