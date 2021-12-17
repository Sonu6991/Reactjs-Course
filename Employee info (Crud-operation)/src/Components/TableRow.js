import React, { Component } from "react";
import ModalBOx from "./ModalBOx";

export default class TableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: false,
      isDelete: false,
    };
  }

  editHandler = () => {
    this.props.editemployee(this.props.data.emp_id);
  };

  employeedelete = () => {
    this.setState({
      modalShow: true,
    });
  };

  onOk = () => {
    this.props.deleteEmployee(this.props.data.emp_id);
  };

  render() {
    return (
      <tr className=" text-white ">
        <th scope="row ">{this.props.no}</th>
        <td>{this.props.data.fname}</td>
        <td>{this.props.data.lname}</td>
        <td>{this.props.data.gender}</td>
        <td>{this.props.data.email}</td>
        <td>{this.props.data.contact}</td>
        <td>{this.props.data.salary}</td>

        <td>
          <div className="d-flex">
            <span
              role="button"
              className="fa fa-edit text-success fs-5  me-4 text-outline"
              onClick={this.editHandler}
            ></span>
            <span
              role="button"
              className="fa fa-trash text-danger fs-5 text-outline"
              onClick={this.employeedelete}
            ></span>
          </div>
        </td>

        <ModalBOx
          messsage="Are sure to delete the record?"
          onOk={this.onOk}
          show={this.state.modalShow}
          onHide={() => {
            this.setState({
              modalShow: false,
            });
          }}
        />
      </tr>
    );
  }
}
