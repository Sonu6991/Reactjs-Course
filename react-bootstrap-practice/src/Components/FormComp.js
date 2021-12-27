import React, { useState } from "react";
import { Alert, Button, Form, InputGroup, Col, Row } from "react-bootstrap";

const FormComp = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <Form className="my-2">
        <InputGroup>
          <input type="text" />
        </InputGroup>

        <Button className="mt-2" variant="primary">
          Submit
        </Button>
      </Form>
      {show && (
        <Alert
          className="mt-2"
          variant="success"
          dismissible
          onClose={() => {
            setShow(false);
          }}
        >
          This is a alert—check it out!
        </Alert>
      )}
      <Button
        variant="outline-success"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
      </Button>
    </>
  );
};

export default FormComp;
