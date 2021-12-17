import userEvent from "@testing-library/user-event";
import React, { Component } from "react";
import EmployeeRecord from "./EmployeeRecord";
import ErrorModal from "./ErrorModal";
import Form from "./Form";
import Title from "./Title";

export default class EmployeeWrapper extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.state = {
      Employees: JSON.parse(localStorage.getItem("Employees")),
      editEmployee: {},
      sortedField: "",
      duplicateEmail: false,
      duplicateContact: false,
      isModalShow: false,
    };
  }

  formSubmithandler = (employees, reset) => {
    if (!this.state.duplicateEmail && !this.state.duplicateContact) {
      if (Object.keys(this.state.editEmployee).length !== 0) {
        this.setState(
          {
            Employees: this.state.Employees.map((employee) => {
              if (this.state.editEmployee.emp_id === employee.emp_id) {
                return {
                  ...employee,
                  fname: employees.fname,
                  lname: employees.lname,
                  email: employees.email,
                  contact: employees.contact,
                  salary: employees.salary,
                  gender: employees.gender,
                };
              } else {
                return employee;
              }
            }),
          },
          () => {
            localStorage.setItem(
              "Employees",
              JSON.stringify(this.state.Employees)
            );
            // console.log(reset);
            reset();
          }
        );
      } else {
        this.setState(
          {
            Employees: [
              ...this.state.Employees,
              {
                emp_id: Math.random(),
                fname: employees.fname,
                lname: employees.lname,
                email: employees.email,
                contact: employees.contact,
                salary: employees.salary,
                gender: employees.gender,
              },
            ],
          },
          () => {
            console.log(this.state.Employees);
            localStorage.setItem(
              "Employees",
              JSON.stringify(this.state.Employees)
            );
            reset();
            // console.log(reset);
          }
        );
      }

      this.setState({
        editEmployee: {},
      });
    } else {
    }
  };

  editHandler = (id) => {
    this.setState(
      {
        editEmployee: this.state.Employees.find(
          (employee) => employee.emp_id === id
        ),
      },

      () => {
        this.form.current.edit(this.state.editEmployee);

        document
          .querySelector("input[value='male']")
          .removeAttribute("checked");
        document
          .querySelector("input[value='female']")
          .removeAttribute("checked");

        if (this.state.editEmployee.gender !== "female") {
          document
            .querySelector("input[value='male']")
            .setAttribute("checked", "true");
        } else {
          document
            .querySelector("input[value='female']")
            .setAttribute("checked", "true");
        }
      }
    );
  };

  deleteHandler = (id) => {
    console.log("this.state.Employees", this.state);
    this.setState(
      {
        Employees: this.state.Employees.filter(
          (employee) => employee.emp_id !== id
        ),
      },
      () => {
        console.log(this.state.Employees);
        localStorage.setItem("Employees", JSON.stringify(this.state.Employees));
      }
    );
  };

  sortHandler = (value) => {
    if (value !== "") {
      this.setState({
        Employees: this.state.Employees.sort((a, b) => {
          if (a[value] < b[value]) {
            return -1;
          }
          if (a[value] > b[value]) {
            return 1;
          }
          return 0;
        }),
      });

      console.log("sorted", this.state.Employees);
    }
  };

  handleEmailChange = (email) => {
    console.log(this.state.editEmployee);
    let isUserFound = [];
    if (Object.keys(this.state.editEmployee).length !== 0) {
      if (email.toLowerCase() !== this.state.editEmployee.email.toLowerCase()) {
        isUserFound = this.state.Employees.filter((employee) => {
          return employee.email.toLowerCase() === email.toLowerCase();
        });
      }
    } else {
      isUserFound = this.state.Employees.filter((employee) => {
        return employee.email.toLowerCase() === email.toLowerCase();
      });
    }
    console.log("isUserFound", isUserFound);

    isUserFound.length
      ? this.setState({
          duplicateEmail: true,
          isModalShow: true,
        })
      : this.setState({
          duplicateEmail: false,
          isModalShow: false,
        });
  };
  handleContactChange = (contact) => {
    let isUserFound = [];

    if (Object.keys(this.state.editEmployee).length !== 0) {
      if (contact !== this.state.editEmployee.contact) {
        isUserFound = this.state.Employees.filter((employee) => {
          return employee.contact === contact;
        });
      }
    } else {
      isUserFound = this.state.Employees.filter((employee) => {
        return employee.contact === contact;
      });
    }
    console.log("isUserFound", isUserFound);
    isUserFound.length
      ? this.setState({
          duplicateContact: true,
          isModalShow: true,
        })
      : this.setState({
          duplicateContact: false,
          isModalShow: false,
        });
  };

  onModalOk = () => {
    this.setState({
      isModalShow: false,
    });
    console.log(">>>>>>>", this.form.current);
  };
  render() {
    return (
      <div className="employee-wrapper w-100 ">
        <Title title="Employee Information" />
        <Form
          formSubmit={this.formSubmithandler}
          editEmployee={this.state.editEmployee}
          employees={this.state.Employees}
          emailValidation={this.handleEmailChange}
          cantactValidation={this.handleContactChange}
          ref={this.form}
        />
        {/* {this.state.Employees.length !== 0 ? (
          <EmployeeRecord
            employees={this.state.Employees}
            edit={this.editHandler}
            delete={this.deleteHandler}
          />
        ) : null} */}

        <EmployeeRecord
          employees={this.state.Employees}
          edit={this.editHandler}
          delete={this.deleteHandler}
          sorting={this.sortHandler}
        />
        {this.state.isModalShow && (
          <ErrorModal
            messsage={
              this.state.email
                ? "upicate email address!"
                : "duplicate Contact number!"
            }
            onOk={this.onModalOk}
            show={this.state.isModalShow}
          />
        )}
      </div>
    );
  }
}
