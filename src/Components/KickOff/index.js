import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";

const KickOff = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="kick-off">
      {show === true ? (
        <div>
          <Button variant="primary" onClick={handleShow}>
            Success
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Success</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              You have successfully requesed for a callback, Our representative
              will contact you soon, meanwhile you can browse our free courses!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <div></div>
      )}
      <div className="d-flex flex-column pt-5 pb-5 bg-body-secondary justify-content-center align-items-center flex-sm-row">
        <div className="p-lg-5 p-sm-2 p-3">
          <h1 className="fs-2">
            kick Off your ACCA prep journey with indigoLearn
          </h1>
          <p>Sign-In and get instant access to free courses</p>
          <button type="button" class="btn btn-danger">
            Sign Up
          </button>
        </div>
        <div className="d-flex flex-column w-100 justify-content-center p-5">
          <h4>Aspiring to be an ACCA? Get in touch with us!</h4>

          <InputGroup className="mb-3 ">
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Recipient's email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Phone Number"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <button type="button" onClick={handleShow} class="btn btn-primary">
            Request Call back
          </button>
        </div>
      </div>
    </div>
  );
};

export default KickOff;
