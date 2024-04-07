import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import "./index.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-bodys fixed-top">
      <Container className="pl-5">
        <Navbar.Brand href="#home" className="text-light fs-2">
          indigoLearn
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="text-light">
              About
            </Nav.Link>
            <Nav.Link href="#learnings" className="text-light">
              Learnings
            </Nav.Link>
            <Nav.Link href="#benefits" className="text-light">
              Benefits
            </Nav.Link>
            <Nav.Link href="#kick-off" className="text-light">
              Kick Off
            </Nav.Link>
          </Nav>
          <Button variant="btn btn-light" className="mt-2">
            Log Out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
