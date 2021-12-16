import React, { Component } from "react";
import Title from "./Title";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Employees: [],
      fname: "",
      lname: "",
      email: "",
      contact: "",
      salary: "",
      gender: "",
    };
  }

  fnameChange = (event) => {
    this.setState({
      fname: event.target.value,
    });
  };

  lnameChange = (event) => {
    this.setState({
      lname: event.target.value,
    });
  };
  emailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  contactChange = (event) => {
    this.setState({
      contact: event.target.value,
    });
  };
  salaryChange = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  genderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  reset = () => {
    this.setState({
      fname: "",
      lname: "",
      email: "",
      contact: "",
      salary: "",
      gender: "",
    });
  };
  sumbimHandler = (event) => {
    this.setState(
      {
        gender: event.target.gender.value,
      },
      () => {
        event.preventDefault();
        if (Object.keys(this.props.editEmployee).length !== 0) {
          this.setState(
            {
              Employees: this.state.Employees.map((employee) => {
                if (this.props.editEmployee.emp_id === employee.emp_id) {
                  return {
                    ...employee,
                    // fname: this.state.fname,
                    fname: event.target.fname.value,
                    lname: this.state.lname,
                    email: this.state.email,
                    contact: this.state.contact,
                    salary: this.state.salary,
                    gender: this.state.gender,
                  };
                } else {
                  return employee;
                }
              }),
            },
            () => {
              this.reset();
              this.props.formSubmit(this.state.Employees);
            }
          );
        } else {
          this.setState(
            {
              Employees: [
                ...this.state.Employees,
                {
                  emp_id: Math.random(),
                  fname: this.state.fname,
                  lname: this.state.lname,
                  email: this.state.email,
                  contact: this.state.contact,
                  salary: this.state.salary,
                  gender: this.state.gender,
                },
              ],
            },
            () => {
              this.reset();
              this.props.formSubmit(this.state.Employees);
            }
          );
        }
      }
    );
    // this.genderChange();

    // event.preventDefault();
    // if (Object.keys(this.props.editEmployee).length !== 0) {
    //
    //   this.setState(
    //     {
    //       Employees: this.state.Employees.map((employee) => {
    //         if (this.props.editEmployee.emp_id === employee.emp_id) {
    //           return {
    //             ...employee,
    //             fname: this.state.fname,
    //             lname: this.state.lname,
    //             email: this.state.email,
    //             contact: this.state.contact,
    //             salary: this.state.salary,
    //             gender: this.state.gender,
    //           };
    //         } else {
    //           return employee;
    //         }
    //       }),
    //     },
    //     () => {
    //       this.reset();
    //       this.props.formSubmit(this.state.Employees);
    //
    //     }
    //   );
    // } else {
    //   this.setState(
    //     {
    //       Employees: [
    //         ...this.state.Employees,
    //         {
    //           emp_id: Math.random(),
    //           fname: this.state.fname,
    //           lname: this.state.lname,
    //           email: this.state.email,
    //           contact: this.state.contact,
    //           salary: this.state.salary,
    //           gender: this.state.gender,
    //         },
    //       ],
    //     },
    //     () => {
    //       this.reset();
    //       this.props.formSubmit(this.state.Employees);
    //     }
    //   );
    // }
  };

  updateInputs = (editEmployee) => {
    this.setState({
      fname: editEmployee.fname,
      lname: editEmployee.lname,
      email: editEmployee.email,
      contact: editEmployee.contact,
      salary: editEmployee.salary,
      gender: editEmployee.gender,
    });
  };

  deleteEmp = (id) => {
    this.setState(
      {
        Employees: this.state.Employees.filter(
          (employee) => employee.emp_id !== id
        ),
      },
      () => {
        this.props.formSubmit(this.state.Employees);
      }
    );
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
                onChange={this.fnameChange}
                value={this.state.fname}
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
                onChange={this.lnameChange}
                value={this.state.lname}
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
              onChange={this.emailChange}
              value={this.state.email}
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
              onChange={this.contactChange}
              value={this.state.contact}
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
                onChange={this.salaryChange}
                value={this.state.salary}
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
                  onChange={this.genderChange}
                  checked
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
                  onChange={this.genderChange}
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
