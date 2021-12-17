import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class ErrorModal extends Component {
  render() {
    return (
      // <p>afjsgbvdgd</p>
      <Modal {...this.props} centered className="">
        <Modal.Body className="text-danger">{this.props.messsage}</Modal.Body>
        <Modal.Footer className="border-0">
          <span>
            <Button
              variant="outline-danger"
              className="px-3"
              onClick={this.props.onOk}
            >
              Ok
            </Button>
          </span>
        </Modal.Footer>
      </Modal>
    );
  }
}
