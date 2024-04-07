import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { MdOutlineSchool } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { PiExam } from "react-icons/pi";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="home">
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
      <div className="d-flex flex-column pt-5 mt-5 pb-5 bg-body-secondary justify-content-center align-items-center flex-sm-row">
        <div className="p-lg-5 p-sm-2">
          <h1 className="fs-2">Become ACCA in 18 months</h1>
          <p>
            ACCA (Association of Chartered Certified Accountants) is a UK based
            programme that is recognized in over 180 countries It has more than
            2,36,000 members and 5,36,000 students.
          </p>
          <div className="d-flex flex-column align-items-center justify-content-between w-100 flex-sm-row ">
            <div className="p-3 d-flex flex-column justify-content-center align-items-center border border-dark rounded border-2 w-100 m-2">
              <HiOutlineBuildingOffice size={30} />
              <p>3lakh+ Students</p>
            </div>
            <div className="p-3 d-flex flex-column justify-content-center align-items-center border border-dark rounded border-2 w-100 m-2">
              <PiExam size={30} />
              <p>1500+ Rankers</p>
            </div>
            <div className="p-3 d-flex flex-column justify-content-center align-items-center border border-dark rounded border-2 w-100 m-2">
              <MdOutlineSchool size={30} />
              <p>99% Qualified</p>
            </div>
          </div>
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
export default Header;
