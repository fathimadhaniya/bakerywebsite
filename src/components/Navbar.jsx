
import { Link } from "react-router-dom";
import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";

function Navbar() {
  return (
    <BsNavbar
      expand="md"
      data-bs-theme="dark"
      style={{ backgroundColor: "#4a2c1a" }}
    >
      <Container>
        <BsNavbar.Brand as={Link} to="/">Sweet Crumbs</BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="main-nav" />
        <BsNavbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;