import React, { Component } from "react";
import TableRow from "./TableRow";

export default class EmployeeRecord extends Component {
  sortHandler = (e) => {
    this.props.sorting(e.target.value);
  };

  render() {
    return (
      <div className="employee-record col-6 col-xxl-7">
        <h3 className="rounded text-dark  fw-bold text-outline">
          Employee Record
        </h3>

        <div className="text-white mt-3">
          <table className="table employee-table ">
            <thead className="mb-3 table-header fs-5">
              <tr className=" text-white ">
                <th scope="col">No.</th>
                <th scope="col" className="" role="button">
                  <button
                    className="bg-transparent text-white border-0"
                    value="fname"
                    onClick={this.sortHandler}
                  >
                    First Name
                    <span className="fas fa-angle-down ms-2"></span>
                  </button>
                </th>
                <th scope="col" className="" role="button">
                  <button
                    className="bg-transparent text-white border-0"
                    value="lname"
                    onClick={this.sortHandler}
                  >
                    Last Name
                    <span className="fas fa-angle-down ms-2"></span>
                  </button>
                </th>
                <th scope="col" className="" role="button">
                  <button
                    className="bg-transparent text-white border-0"
                    value="gender"
                    onClick={this.sortHandler}
                  >
                    Gender
                    <span className="fas fa-angle-down ms-2"></span>
                  </button>
                </th>
                <th scope="col" className="" role="button">
                  Email
                </th>
                <th scope="col" className="" role="button">
                  Contact no
                </th>
                <th scope="col" className="" role="button">
                  <button
                    className="bg-transparent text-white border-0"
                    value="salary"
                    onClick={this.sortHandler}
                  >
                    Salary
                    <span className="fas fa-angle-down ms-2"></span>
                  </button>
                </th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="fs-6">
              {this.props.employees.map((employee, index) => {
                return (
                  <TableRow
                    key={employee.emp_id}
                    no={index + 1}
                    data={employee}
                    editemployee={this.props.edit}
                    deleteEmployee={this.props.delete}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
