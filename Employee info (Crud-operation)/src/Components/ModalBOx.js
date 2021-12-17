import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class ModalBOx extends Component {
  render() {
    return (
      // <p>afjsgbvdgd</p>
      <Modal {...this.props} centered>
        <Modal.Body>{this.props.messsage}</Modal.Body>
        <Modal.Footer className="border-0">
          <span>
            <Button
              variant="outline-danger"
              className="px-3"
              onClick={this.props.onHide}
            >
              Close
            </Button>
            <Button
              variant="outline-success"
              className="ms-2 px-4"
              onClick={this.props.onOk}
            >
              OK
            </Button>
          </span>
        </Modal.Footer>
      </Modal>
    );
  }
}
